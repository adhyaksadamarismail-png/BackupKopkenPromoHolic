import crypto from 'crypto';

// Server Secret for HMAC Session Token Signing
const SERVER_SECRET = process.env.ADMIN_JWT_SECRET || 'promoholic-super-secret-server-key-2026';

function verifyToken(token) {
  if (!token || !token.includes('.')) return null;
  const [base64, signature] = token.split('.');
  const expectedSig = crypto.createHmac('sha256', SERVER_SECRET).update(base64).digest('base64url');

  try {
    const bufSig = Buffer.from(signature);
    const bufExp = Buffer.from(expectedSig);
    if (bufSig.length !== bufExp.length || !crypto.timingSafeEqual(bufSig, bufExp)) {
      return null;
    }

    const payload = JSON.parse(Buffer.from(base64, 'base64url').toString('utf8'));
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch (e) {
    return null;
  }
}

function parseCookies(cookieHeader) {
  const list = {};
  if (!cookieHeader) return list;
  cookieHeader.split(';').forEach(cookie => {
    let [name, ...rest] = cookie.split('=');
    name = name?.trim();
    if (!name) return;
    const value = rest.join('=').trim();
    list[name] = decodeURIComponent(value);
  });
  return list;
}

export default async function handler(req, res) {
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  // Verify Admin Session Cookie (HttpOnly)
  const cookies = parseCookies(req.headers.cookie);
  const sessionToken = cookies['ph_admin_session'];
  const session = verifyToken(sessionToken);

  if (!session || session.role !== 'admin') {
    return res.status(401).json({ error: 'Akses ditolak. Sesi admin tidak valid.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || 'https://ltseoigmcjvtaxdgcjjq.supabase.co';
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseKey) {
    return res.status(500).json({ error: 'Konfigurasi Supabase Key di server belum lengkap.' });
  }

  // GET: Fetch All Orders for Admin Panel
  if (req.method === 'GET') {
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/orders?select=*&order=created_at.desc`, {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Gagal mengambil data pesanan dari Supabase.');
      }
      return res.status(200).json(data);
    } catch (e) {
      console.error("API GET admin-orders error:", e);
      return res.status(500).json({ error: e.message });
    }
  }

  // PATCH / POST: Update Order Status
  if (req.method === 'PATCH' || req.method === 'POST') {
    let body = {};
    try {
      body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    } catch (e) {
      body = {};
    }

    const { orderId, newStatus, extraData } = body;
    if (!orderId || !newStatus) {
      return res.status(400).json({ error: 'orderId dan newStatus wajib diisi.' });
    }

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
      ...(extraData || {})
    };

    const isUuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(orderId);
    const filterQuery = isUuid ? `id=eq.${orderId}` : `order_id=eq.${encodeURIComponent(orderId)}`;

    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/orders?${filterQuery}`, {
        method: 'PATCH',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify(updatePayload)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Gagal memperbarui status order.');
      }
      return res.status(200).json((data && data.length > 0) ? data[0] : updatePayload);
    } catch (e) {
      console.error("API PATCH admin-orders error:", e);
      return res.status(500).json({ error: e.message });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
