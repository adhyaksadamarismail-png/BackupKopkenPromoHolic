-- ====================================================================
-- PROMO.HOLIC HARDENED SECURITY DATABASE MIGRATION SCRIPT FOR SUPABASE
-- Run this script in your Supabase SQL Editor: Dashboard -> SQL Editor -> New Query
-- ====================================================================

-- 1. Ensure `public.orders` Table Exists
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id TEXT UNIQUE NOT NULL,
  brand TEXT DEFAULT 'Kopi Kenangan',
  customer_name TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  outlet TEXT NOT NULL,
  pickup_time TEXT DEFAULT 'Sekarang',
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  notes TEXT DEFAULT '',
  subtotal NUMERIC NOT NULL DEFAULT 0,
  surcharge NUMERIC NOT NULL DEFAULT 0,
  total_price NUMERIC NOT NULL DEFAULT 0,
  payment_method TEXT DEFAULT 'QRIS',
  status TEXT DEFAULT 'BELUM_DIPROSES',
  status_label TEXT DEFAULT 'Belum Diproses',
  receipt_url TEXT DEFAULT NULL,
  receipt_uploaded_at TIMESTAMPTZ DEFAULT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Grant Schema Permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON TABLE public.orders TO authenticated, service_role;
GRANT INSERT, SELECT ON TABLE public.orders TO anon;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;

-- 2. Create Indexes for Fast Realtime & Query Lookup
CREATE INDEX IF NOT EXISTS idx_orders_phone_number ON public.orders(phone_number);
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders(created_at DESC);

-- 3. Enable Supabase Realtime Publication for `public.orders`
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_publication_tables 
    WHERE pubname = 'supabase_realtime' AND tablename = 'orders'
  ) THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.orders;
  END IF;
END $$;

-- 4. Set Up Supabase Storage Bucket for Receipts (PRIVATE BUCKET)
INSERT INTO storage.buckets (id, name, public)
VALUES ('receipts', 'receipts', false)
ON CONFLICT (id) DO UPDATE SET public = false;

-- 5. Enable Row Level Security (RLS) on `public.orders`
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- 6. STRICT ROW LEVEL SECURITY (RLS) POLICIES
-- NOTE: ALL ADMIN READ/UPDATE/DELETE OPERATIONS ARE ROUTED VIA SERVER-SIDE API (/api/orders) USING SERVICE_ROLE KEY.
-- DIRECT FRONTEND POSTGREST SELECT/UPDATE/DELETE WITH ANON OR AUTHENTICATED KEYS ARE BLOCKED.

-- Policy 6a: Customer Order Creation (INSERT ONLY FOR ANON & AUTHENTICATED)
DROP POLICY IF EXISTS "Allow anon and authenticated to insert orders" ON public.orders;
DROP POLICY IF EXISTS "Allow customer order creation" ON public.orders;
CREATE POLICY "Allow customer order creation"
  ON public.orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy 6b: REMOVE DIRECT SELECT FOR ANON & AUTHENTICATED
-- Direct SELECT * on public.orders via PostgREST is blocked for anon & authenticated.
-- All admin reading is handled securely by /api/orders on the server using service_role key.
DROP POLICY IF EXISTS "Allow select orders" ON public.orders;
DROP POLICY IF EXISTS "Allow select orders by phone or admin" ON public.orders;
DROP POLICY IF EXISTS "Only admin select orders" ON public.orders;

-- Policy 6c: REMOVE DIRECT UPDATE FOR ANON & AUTHENTICATED
-- Direct UPDATE via PostgREST is blocked. Server API (/api/orders) handles updates.
DROP POLICY IF EXISTS "Allow update orders" ON public.orders;
DROP POLICY IF EXISTS "Allow authenticated admin full access" ON public.orders;
DROP POLICY IF EXISTS "Only admin update orders" ON public.orders;

-- Policy 6d: REMOVE DIRECT DELETE FOR ANON & AUTHENTICATED
-- Direct DELETE via PostgREST is blocked. Server API (/api/orders) handles deletion.
DROP POLICY IF EXISTS "Only admin delete orders" ON public.orders;


-- 7. Secure Storage Bucket Security Policies for `receipts` (PRIVATE BUCKET)
DROP POLICY IF EXISTS "Public Read Receipts" ON storage.objects;
DROP POLICY IF EXISTS "Upload Receipts Policy" ON storage.objects;
DROP POLICY IF EXISTS "Admin Upload Receipts Policy" ON storage.objects;
DROP POLICY IF EXISTS "Update Receipts Policy" ON storage.objects;
DROP POLICY IF EXISTS "Admin Update Receipts Policy" ON storage.objects;

-- Storage objects access for anon and authenticated is blocked.
-- Uploads & Signed URL generation are handled strictly by Server API (/api/admin-upload-receipt) using service_role key.


-- 8. Secure RPC Function for Customer Order Tracking (EXPLICIT COLUMNS ONLY)
-- Returns strictly necessary columns for the customer's own order tracking
DROP FUNCTION IF EXISTS public.get_customer_orders_by_phone(text);

CREATE OR REPLACE FUNCTION public.get_customer_orders_by_phone(p_phone text)
RETURNS TABLE (
  order_id text,
  brand text,
  outlet text,
  pickup_time text,
  total_price numeric,
  status text,
  status_label text,
  receipt_url text,
  created_at timestamptz
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT 
    order_id,
    brand,
    outlet,
    pickup_time,
    total_price,
    status,
    status_label,
    receipt_url,
    created_at
  FROM public.orders
  WHERE phone_number = p_phone
  ORDER BY created_at DESC;
$$;

GRANT EXECUTE ON FUNCTION public.get_customer_orders_by_phone(text) TO anon, authenticated;

-- 9. Notify PostgREST to reload schema cache immediately
NOTIFY pgrst, 'reload schema';
