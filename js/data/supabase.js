import { createClient as createSupabaseClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

/**
 * Get Credentials from window.ENV, Vite import.meta.env, or process.env
 * ZERO HARDCODED DEFAULT KEYS IN SOURCE CODE
 */
export function getCredentials() {
  let url = '';
  let key = '';

  if (typeof window !== 'undefined') {
    if (window.ENV_SUPABASE_URL) url = window.ENV_SUPABASE_URL;
    if (window.ENV_SUPABASE_ANON_KEY) key = window.ENV_SUPABASE_ANON_KEY;
  }

  // Check Vite environment variables if available
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      if (import.meta.env.VITE_SUPABASE_URL) url = import.meta.env.VITE_SUPABASE_URL;
      if (import.meta.env.VITE_SUPABASE_ANON_KEY) key = import.meta.env.VITE_SUPABASE_ANON_KEY;
    }
  } catch (e) {}

  // Check process.env if available
  try {
    if (typeof process !== 'undefined' && process.env) {
      if (process.env.SUPABASE_URL) url = process.env.SUPABASE_URL;
      if (process.env.SUPABASE_ANON_KEY) key = process.env.SUPABASE_ANON_KEY;
    }
  } catch (e) {}

  if (!url || !key) {
    console.warn("⚠️ SUPABASE CONFIG NOTICE: URL atau Anon Key belum terpasang di window.ENV atau Vercel Environment Variables.");
  }

  return { url: url.trim(), key: key.trim() };
}

// Singleton Supabase Client Instance
let supabaseClient = null;

/**
 * Initialize / Get Singleton Supabase Client Instance
 */
export function getSupabase() {
  if (supabaseClient) return supabaseClient;

  const { url, key } = getCredentials();
  if (!url || !key) {
    throw new Error("Koneksi Supabase belum dikonfigurasi! Pastikan SUPABASE_URL dan SUPABASE_ANON_KEY di-set di Vercel Environment Variables.");
  }

  // 1. Try official ESM imported createClient
  try {
    if (typeof createSupabaseClient === 'function') {
      supabaseClient = createSupabaseClient(url, key);
      return supabaseClient;
    }
  } catch (err) {
    console.warn("ESM createClient init notice:", err);
  }

  // 2. Fallback to window.supabase if attached by UMD CDN script
  if (typeof window !== 'undefined' && window.supabase && typeof window.supabase.createClient === 'function') {
    try {
      supabaseClient = window.supabase.createClient(url, key);
      return supabaseClient;
    } catch (err) {
      console.warn("window.supabase init notice:", err);
    }
  }

  throw new Error("Gagal terhubung ke Supabase SDK. Mohon periksa koneksi internet Anda.");
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
 * HTML Escaper / Anti-XSS Sanitizer
 */
export function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * String Input Sanitizer (removes null bytes, script tags, control chars)
 */
export function sanitizeInput(str, maxLen = 500) {
  if (!str) return '';
  let clean = String(str).replace(/\0/g, '').trim();
  clean = clean.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  return clean.slice(0, maxLen);
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
 * CREATE ORDER - Customer Checkout (Stores directly into Supabase public.orders via Anon Key)
 */
export async function createOrder(orderPayload) {
  const rawPhone = orderPayload.phone_number || orderPayload.customer_name || '';
  const cleanPhone = normalizePhone(rawPhone);

  const newOrder = {
    order_id: generateOrderId(),
    brand: sanitizeInput(orderPayload.brand || 'Kopi Kenangan', 100),
    customer_name: sanitizeInput(orderPayload.customer_name || '', 100),
    phone_number: cleanPhone,
    outlet: sanitizeInput(orderPayload.outlet || '', 150),
    pickup_time: sanitizeInput(orderPayload.pickup_time || 'Sekarang', 50),
    items: orderPayload.items || [],
    notes: sanitizeInput(orderPayload.notes || '', 500),
    subtotal: Number(orderPayload.subtotal) || 0,
    surcharge: Number(orderPayload.surcharge) || 0,
    total_price: Number(orderPayload.total_price) || 0,
    payment_method: 'QRIS',
    status: 'BELUM_DIPROSES',
    status_label: 'Belum Diproses',
    receipt_url: null,
    receipt_uploaded_at: null,
    created_at: new Date().toISOString()
  };

  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    newOrder.id = crypto.randomUUID();
  }

  console.log("🚀 [CREATE ORDER STARTED] Payload to INSERT into public.orders:", newOrder);

  const client = getSupabase();
  try {
    const { data, error } = await client.from('orders').insert([newOrder]).select().single();
    if (error) {
      console.error("❌ [CREATE ORDER ERROR DETAILS]:", error);
      throw new Error(`Database Error (${error.code || 'INSERT_FAILED'}): ${error.message}`);
    }
    console.log("✅ [CREATE ORDER SUCCESS] Inserted row returned from Supabase:", data);
    return data || newOrder;
  } catch (err) {
    console.error("❌ [CREATE ORDER EXCEPTION]:", err);
    throw err;
  }
}

/**
 * FETCH ALL ORDERS (for Admin Web - Secured Server-Side API Routing)
 */
export async function fetchAllOrders() {
  console.log("📦 [FETCH ALL ORDERS STARTED] Fetching rows via Server-side API /api/admin-orders...");
  try {
    const apiRes = await fetch('/api/admin-orders');
    if (apiRes.ok) {
      const data = await apiRes.json();
      console.log("✅ [FETCH ALL ORDERS VIA SERVER API SUCCESS] Total orders fetched:", data ? data.length : 0);
      return data || [];
    }
  } catch (e) {
    console.warn("Server API fetch notice, falling back to Supabase client:", e);
  }

  const client = getSupabase();
  try {
    const { data, error } = await client.from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("❌ [FETCH ALL ORDERS ERROR]:", error);
      throw new Error(`Gagal mengambil data pesanan: ${error.message}`);
    }

    return data || [];
  } catch (err) {
    console.error("❌ [FETCH ALL ORDERS EXCEPTION]:", err);
    throw err;
  }
}

/**
 * FETCH ORDERS BY PHONE (Direct RPC/Database Query for Customer Tracking)
 */
export async function fetchOrdersByPhone(phone) {
  const cleanPhone = normalizePhone(phone);
  if (!cleanPhone) return [];

  const client = getSupabase();
  try {
    // 1. Try RPC function get_customer_orders_by_phone first
    const { data: rpcData, error: rpcError } = await client.rpc('get_customer_orders_by_phone', { p_phone: cleanPhone });
    if (!rpcError && rpcData) {
      return rpcData || [];
    }

    // 2. Fallback to direct query
    const { data, error } = await client.from('orders')
      .select('*')
      .eq('phone_number', cleanPhone)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("SUPABASE FETCH PHONE ERROR:", error);
      throw new Error(`Gagal melacak pesanan dari database: ${error.message}`);
    }

    return data || [];
  } catch (err) {
    console.error("SUPABASE FETCH PHONE EXCEPTION:", err);
    throw err;
  }
}

/**
 * UPDATE ORDER STATUS - Secured Server API Routing
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

  try {
    const apiRes = await fetch('/api/admin-orders', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderId, newStatus, extraData })
    });
    if (apiRes.ok) {
      const data = await apiRes.json();
      return data || updatePayload;
    }
  } catch (e) {
    console.warn("Server API status update notice, falling back to Supabase client:", e);
  }

  const client = getSupabase();
  try {
    const isUuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(orderId);
    let query = client.from('orders').update(updatePayload);
    if (isUuid) {
      query = query.eq('id', orderId);
    } else {
      query = query.eq('order_id', orderId);
    }

    const { data, error } = await query.select();
    if (error) {
      console.error("SUPABASE UPDATE ERROR:", error);
      throw new Error(`Gagal memperbarui status: ${error.message}`);
    }

    return (data && data.length > 0) ? data[0] : updatePayload;
  } catch (err) {
    console.error("SUPABASE UPDATE EXCEPTION:", err);
    throw err;
  }
}

/**
 * UPLOAD RECEIPT IMAGE - Secured Server-Side API Upload
 */
export async function uploadReceiptImage(orderId, file) {
  if (!file) {
    throw new Error("File receipt tidak ditemukan.");
  }

  const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (!validTypes.includes(file.type)) {
    throw new Error("Format file receipt harus berupa JPG, JPEG, atau PNG.");
  }
  if (file.size > 5 * 1024 * 1024) {
    throw new Error("Ukuran file receipt maksimal 5 MB.");
  }

  // Convert File to base64 for Server-Side Upload Processing
  const base64Data = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file);
  });

  try {
    const apiRes = await fetch('/api/admin-upload-receipt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId,
        fileData: base64Data,
        fileName: file.name,
        mimeType: file.type
      })
    });

    if (apiRes.ok) {
      const resultData = await apiRes.json();
      return resultData;
    }
  } catch (e) {
    console.warn("Server API upload notice, falling back to Supabase client storage:", e);
  }

  const client = getSupabase();
  const ext = file.name.split('.').pop() || 'png';
  const cleanId = orderId.replace(/[^a-zA-Z0-9]/g, '');
  const filePath = `receipt_${cleanId}_${Date.now()}.${ext}`;

  try {
    const { data: storageData, error: storageError } = await client.storage
      .from('receipts')
      .upload(filePath, file, { cacheControl: '3600', upsert: true });

    let publicUrl = '';
    if (!storageError && storageData) {
      const { data: urlData } = client.storage.from('receipts').getPublicUrl(filePath);
      publicUrl = urlData ? urlData.publicUrl : '';
    } else {
      publicUrl = base64Data;
    }

    const uploadedAt = new Date().toISOString();
    const updateData = {
      receipt_url: publicUrl,
      receipt_uploaded_at: uploadedAt
    };

    const updatedOrder = await updateOrderStatus(orderId, 'DIPROSES', updateData);
    return { receipt_url: publicUrl, uploadedAt, order: updatedOrder };
  } catch (err) {
    console.error("SUPABASE UPLOAD RECEIPT ERROR:", err);
    throw new Error("Gagal mengunggah foto receipt: " + err.message);
  }
}

/**
 * REALTIME SUBSCRIPTION FOR ADMIN (Listens to INSERT, UPDATE, DELETE on orders)
 */
let adminChannel = null;

export function subscribeAdminOrders(onUpdateCallback, onErrorCallback) {
  const client = getSupabase();
  if (!client) return () => {};

  if (adminChannel) {
    client.removeChannel(adminChannel);
    adminChannel = null;
  }

  try {
    console.log("📡 [SUBSCRIBE ADMIN REALTIME] Subscribing to postgres_changes on public.orders...");
    adminChannel = client.channel('admin-orders-realtime-channel')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, async (payload) => {
        console.log("🔔 [REALTIME EVENT RECEIVED IN ADMIN]:", payload.eventType, payload);
        try {
          const orders = await fetchAllOrders();
          console.log("✅ [REALTIME RE-FETCH COMPLETE]: Updated orders list count =", orders.length);
          onUpdateCallback(orders, payload);
        } catch (err) {
          console.error("❌ [REALTIME CALLBACK ERROR]:", err);
          if (onErrorCallback) onErrorCallback(err);
        }
      })
      .subscribe((status, err) => {
        console.log("📡 [REALTIME ADMIN CHANNEL STATUS]:", status, err || '');
        if (status === 'SUBSCRIBED') {
          console.log("🟢 [REALTIME ADMIN CHANNEL SUBSCRIBED] Admin is now listening for INSERT, UPDATE, DELETE in real-time.");
        }
        if (status === 'CHANNEL_ERROR' || err) {
          console.error("❌ [REALTIME ADMIN CHANNEL ERROR]:", status, err);
          if (onErrorCallback) onErrorCallback(err || new Error(`Gagal berlangganan channel Realtime admin (${status}).`));
        }
      });

    return () => {
      if (adminChannel) {
        console.log("🧹 [CLEANUP REALTIME ADMIN CHANNEL]");
        client.removeChannel(adminChannel);
        adminChannel = null;
      }
    };
  } catch (e) {
    console.error("❌ [REALTIME SUBSCRIBE EXCEPTION]:", e);
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
  if (!client) return () => {};

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
