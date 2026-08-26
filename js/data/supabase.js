/**
 * PromoHolic Supabase Realtime, Storage & Database Production Layer
 */

// ENVIRONMENT TOGGLE: Set to false for Production (Supabase primary)
export const IS_DEV = false;

// Configurable Credentials (via window.ENV or environment vars)
export const SUPABASE_URL = (typeof window !== 'undefined' && window.ENV_SUPABASE_URL)
  ? window.ENV_SUPABASE_URL
  : 'https://xyzcompany.supabase.co';

export const SUPABASE_ANON_KEY = (typeof window !== 'undefined' && window.ENV_SUPABASE_ANON_KEY)
  ? window.ENV_SUPABASE_ANON_KEY
  : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5emNvbXBhbnkiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTcwMDAwMDAwMCwiZXhwIjoyMDAwMDAwMDAwfQ.example';

let supabaseClient = null;

/**
 * Initialize Supabase Client
 */
export function getSupabase() {
  if (supabaseClient) return supabaseClient;

  if (typeof window !== 'undefined' && window.supabase && typeof window.supabase.createClient === 'function') {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      return supabaseClient;
    } catch (err) {
      if (!IS_DEV) {
        throw new Error("Gagal menginisialisasi client Supabase: " + err.message);
      }
    }
  }

  if (!IS_DEV) {
    throw new Error("Library Supabase JS SDK belum dimuat di browser. Pastikan script Supabase CDN diikutsertakan.");
  }

  return null;
}

/**
 * Phone Number Normalizer (e.g. 089520484771 -> 6289520484771)
 */
export function normalizePhone(phone) {
  let clean = (phone || '').trim().replace(/[^0-9]/g, '');
  if (clean.startsWith('0')) {
    clean = '62' + clean.slice(1);
  }
  return clean;
}

/**
 * Generate Unique Order ID (e.g. #ORD-260826-001)
 */
export function generateOrderId() {
  const date = new Date();
  const dateStr = String(date.getDate()).padStart(2, '0') +
                  String(date.getMonth() + 1).padStart(2, '0') +
                  String(date.getFullYear()).slice(-2);
  const randomNum = String(Math.floor(100 + Math.random() * 900));
  return `#ORD-${dateStr}-${randomNum}`;
}

/**
 * CREATE ORDER - Stores directly into Supabase public.orders
 */
export async function createOrder(orderPayload) {
  const rawPhone = orderPayload.phone_number || orderPayload.customer_name || '';
  const cleanPhone = normalizePhone(rawPhone);

  const newOrder = {
    id: 'ord_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
    order_id: generateOrderId(),
    brand: orderPayload.brand || 'Kopi Kenangan',
    customer_name: orderPayload.customer_name || '',
    phone_number: cleanPhone,
    outlet: orderPayload.outlet || '',
    pickup_time: orderPayload.pickup_time || 'Sekarang',
    items: orderPayload.items || [],
    notes: orderPayload.notes || '',
    subtotal: orderPayload.subtotal || 0,
    surcharge: orderPayload.surcharge || 0,
    total_price: orderPayload.total_price || 0,
    payment_method: orderPayload.payment_method || 'QRIS',
    status: 'BELUM_DIPROSES',
    status_label: 'Belum Diproses',
    receipt_url: null,
    receipt_uploaded_at: null,
    created_at: new Date().toISOString()
  };

  const client = getSupabase();
  if (!client) {
    throw new Error("Koneksi database Supabase tidak tersedia.");
  }

  const { data, error } = await client.from('orders').insert([newOrder]).select();
  if (error) {
    throw new Error("Gagal menyimpan pesanan ke database Supabase: " + error.message);
  }

  return data && data.length > 0 ? data[0] : newOrder;
}

/**
 * FETCH ALL ORDERS (for Admin Web)
 */
export async function fetchAllOrders() {
  const client = getSupabase();
  if (!client) {
    throw new Error("Koneksi database Supabase tidak tersedia.");
  }

  const { data, error } = await client.from('orders')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error("Gagal mengambil data pesanan dari Supabase: " + error.message);
  }

  return data || [];
}

/**
 * FETCH ORDERS BY PHONE (Direct database query for Customer Tracking)
 */
export async function fetchOrdersByPhone(phone) {
  const cleanPhone = normalizePhone(phone);
  if (!cleanPhone) return [];

  const client = getSupabase();
  if (!client) {
    throw new Error("Koneksi database Supabase tidak tersedia.");
  }

  // Exact query directly to database by normalized phone number
  const { data, error } = await client.from('orders')
    .select('*')
    .eq('phone_number', cleanPhone)
    .order('created_at', { ascending: false });

  if (error) {
    throw new Error("Gagal melacak pesanan dari database: " + error.message);
  }

  return data || [];
}

/**
 * UPDATE ORDER STATUS
 */
export async function updateOrderStatus(orderId, newStatus, extraData = {}) {
  const statusLabels = {
    'BELUM_DIPROSES': 'Belum Diproses',
    'DIPROSES': 'Diproses',
    'SUDAH_DIPROSES': 'Sudah Diproses',
    'SELESAI': 'Selesai',
    'DIBATALKAN': 'Dibatalkan',
    'MENUNGGU_PEMBAYARAN': 'Menunggu Pembayaran',
    'PEMBAYARAN_DIKONFIRMASI': 'Pembayaran Dikonfirmasi'
  };

  const updatePayload = {
    status: newStatus,
    status_label: statusLabels[newStatus] || newStatus,
    ...extraData
  };

  const client = getSupabase();
  if (!client) {
    throw new Error("Koneksi database Supabase tidak tersedia.");
  }

  const { data, error } = await client.from('orders')
    .update(updatePayload)
    .eq('order_id', orderId)
    .select();

  if (error) {
    throw new Error("Gagal memperbarui status pesanan di Supabase: " + error.message);
  }

  return data && data.length > 0 ? data[0] : updatePayload;
}

/**
 * UPLOAD RECEIPT IMAGE - Uploads file to Supabase Storage bucket 'receipts'
 */
export async function uploadReceiptImage(orderId, file) {
  if (!file) {
    throw new Error("File receipt tidak ditemukan.");
  }

  // File validation (JPG, JPEG, PNG max 5MB)
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (!validTypes.includes(file.type)) {
    throw new Error("Format file receipt harus berupa JPG, JPEG, atau PNG.");
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error("Ukuran file receipt maksimal 5 MB.");
  }

  const client = getSupabase();
  if (!client) {
    throw new Error("Koneksi database Supabase tidak tersedia.");
  }

  // Generate unique file path in Supabase Storage
  const ext = file.name.split('.').pop() || 'png';
  const cleanId = orderId.replace(/[^a-zA-Z0-9]/g, '');
  const filePath = `receipt_${cleanId}_${Date.now()}.${ext}`;

  // 1. Upload to Supabase Storage Bucket 'receipts'
  const { data: storageData, error: storageError } = await client.storage
    .from('receipts')
    .upload(filePath, file, { cacheControl: '3600', upsert: true });

  let publicUrl = '';
  if (!storageError && storageData) {
    const { data: urlData } = client.storage.from('receipts').getPublicUrl(filePath);
    publicUrl = urlData ? urlData.publicUrl : '';
  } else {
    // If bucket doesn't exist or storage fails, use DataURL fallback gracefully
    publicUrl = await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.readAsDataURL(file);
    });
  }

  const uploadedAt = new Date().toISOString();

  // 2. Update order row in Supabase database with receipt URL
  const updateData = {
    receipt_url: publicUrl,
    receipt_uploaded_at: uploadedAt
  };

  const updatedOrder = await updateOrderStatus(orderId, 'DIPROSES', updateData);
  return { receipt_url: publicUrl, uploadedAt, order: updatedOrder };
}

/**
 * REALTIME SUBSCRIPTION FOR ADMIN (Listens to INSERT, UPDATE, DELETE on orders)
 */
let adminChannel = null;

export function subscribeAdminOrders(onUpdateCallback, onErrorCallback) {
  const client = getSupabase();
  if (!client) {
    if (onErrorCallback) onErrorCallback(new Error("Supabase client tidak tersedia."));
    return () => {};
  }

  // Clean up existing channel if active
  if (adminChannel) {
    client.removeChannel(adminChannel);
    adminChannel = null;
  }

  try {
    adminChannel = client.channel('admin-orders-realtime-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, async (payload) => {
        try {
          const orders = await fetchAllOrders();
          onUpdateCallback(orders, payload);
        } catch (err) {
          if (onErrorCallback) onErrorCallback(err);
        }
      })
      .subscribe((status, err) => {
        if (status === 'CHANNEL_ERROR' || err) {
          if (onErrorCallback) onErrorCallback(err || new Error("Gagal berlangganan channel Realtime admin."));
        }
      });

    return () => {
      if (adminChannel) {
        client.removeChannel(adminChannel);
        adminChannel = null;
      }
    };
  } catch (e) {
    if (onErrorCallback) onErrorCallback(e);
    return () => {};
  }
}

/**
 * REALTIME SUBSCRIPTION FOR CUSTOMER TRACKING (Filtered by normalized phone)
 */
let customerChannels = {};

export function subscribeCustomerOrders(phone, onUpdateCallback, onErrorCallback) {
  const cleanPhone = normalizePhone(phone);
  if (!cleanPhone) return () => {};

  const client = getSupabase();
  if (!client) {
    if (onErrorCallback) onErrorCallback(new Error("Supabase client tidak tersedia."));
    return () => {};
  }

  // Clean up existing channel for this phone if active
  if (customerChannels[cleanPhone]) {
    client.removeChannel(customerChannels[cleanPhone]);
    delete customerChannels[cleanPhone];
  }

  const handler = async () => {
    try {
      const orders = await fetchOrdersByPhone(cleanPhone);
      onUpdateCallback(orders);
    } catch (err) {
      if (onErrorCallback) onErrorCallback(err);
    }
  };

  try {
    const channelName = 'customer-orders-realtime-' + cleanPhone;
    const channel = client.channel(channelName)
      .on(
        'postgres_changes', 
        { event: '*', schema: 'public', table: 'orders', filter: `phone_number=eq.${cleanPhone}` }, 
        handler
      )
      .subscribe((status, err) => {
        if (status === 'CHANNEL_ERROR' || err) {
          if (onErrorCallback) onErrorCallback(err || new Error("Gagal berlangganan Realtime customer tracking."));
        }
      });

    customerChannels[cleanPhone] = channel;

    return () => {
      if (customerChannels[cleanPhone]) {
        client.removeChannel(customerChannels[cleanPhone]);
        delete customerChannels[cleanPhone];
      }
    };
  } catch (e) {
    if (onErrorCallback) onErrorCallback(e);
    return () => {};
  }
}

/**
 * SUPABASE AUTHENTICATION HELPERS FOR ADMIN
 */
export async function loginAdmin(email, password) {
  const client = getSupabase();
  if (!client) {
    throw new Error("Supabase client tidak tersedia.");
  }

  const { data, error } = await client.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    throw new Error("Login Gagal: " + error.message);
  }

  return data;
}

export async function logoutAdmin() {
  const client = getSupabase();
  if (client) {
    await client.auth.signOut();
  }
}

export async function getAdminSession() {
  const client = getSupabase();
  if (!client) return null;
  const { data } = await client.auth.getSession();
  return data ? data.session : null;
}
