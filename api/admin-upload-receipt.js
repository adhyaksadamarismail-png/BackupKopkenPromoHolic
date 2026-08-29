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

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch (e) {
    body = {};
  }

  const { orderId, fileData, fileName, mimeType } = body;
  if (!orderId || !fileData) {
    return res.status(400).json({ error: 'orderId dan fileData (base64) wajib diisi.' });
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || 'https://ltseoigmcjvtaxdgcjjq.supabase.co';
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseKey) {
    return res.status(500).json({ error: 'Konfigurasi Supabase Key di server belum lengkap.' });
  }

  const cleanId = String(orderId).replace(/[^a-zA-Z0-9]/g, '');
  const ext = (fileName || 'receipt.png').split('.').pop() || 'png';
  const filePath = `receipt_${cleanId}_${Date.now()}.${ext}`;

  try {
    // Convert base64 data to Buffer
    const base64Content = fileData.includes(',') ? fileData.split(',')[1] : fileData;
    const fileBuffer = Buffer.from(base64Content, 'base64');
    const uploadMime = mimeType || 'image/png';

    // Upload to Private Supabase Storage Bucket 'receipts' via Server API
    const uploadResponse = await fetch(`${supabaseUrl}/storage/v1/object/receipts/${filePath}`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': uploadMime,
        'x-upsert': 'true'
      },
      body: fileBuffer
    });

    let receiptAccessUrl = '';
    if (uploadResponse.ok) {
      // Generate 1-Year (31,536,000 seconds) Signed URL for private receipts bucket
      try {
        const signRes = await fetch(`${supabaseUrl}/storage/v1/object/sign/receipts/${filePath}`, {
          method: 'POST',
          headers: {
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ expiresIn: 31536000 })
        });
        const signData = await signRes.json();
        if (signData && signData.signedURL) {
          receiptAccessUrl = signData.signedURL.startsWith('http') 
            ? signData.signedURL 
            : `${supabaseUrl}/storage/v1${signData.signedURL}`;
        }
      } catch (e) {}

      if (!receiptAccessUrl) {
        receiptAccessUrl = `${supabaseUrl}/storage/v1/object/public/receipts/${filePath}`;
      }
    } else {
      console.warn("Storage API upload notice (using base64 fallback):", await uploadResponse.text());
      receiptAccessUrl = fileData.startsWith('data:') ? fileData : `data:${uploadMime};base64,${base64Content}`;
    }

    const uploadedAt = new Date().toISOString();
    const updatePayload = {
      status: 'DIPROSES',
      status_label: 'Diproses',
      receipt_url: receiptAccessUrl,
      receipt_uploaded_at: uploadedAt
    };

    const isUuid = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(orderId);
    const filterQuery = isUuid ? `id=eq.${orderId}` : `order_id=eq.${encodeURIComponent(orderId)}`;

    // Update order status in public.orders
    const updateRes = await fetch(`${supabaseUrl}/rest/v1/orders?${filterQuery}`, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(updatePayload)
    });

    const updateData = await updateRes.json();
    const updatedOrder = (updateData && updateData.length > 0) ? updateData[0] : updatePayload;

    return res.status(200).json({
      receipt_url: receiptAccessUrl,
      uploadedAt,
      order: updatedOrder
    });
  } catch (e) {
    console.error("API admin-upload-receipt error:", e);
    return res.status(500).json({ error: e.message });
  }
}
