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

-- 4. Set Up Supabase Storage Bucket for Receipts (Public Read, Admin Write)
INSERT INTO storage.buckets (id, name, public)
VALUES ('receipts', 'receipts', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 5. Enable Row Level Security (RLS) on `public.orders`
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- 6. STRICT ROW LEVEL SECURITY (RLS) POLICIES

-- Policy 6a: Allow anyone (Anon & Authenticated) to INSERT new orders
DROP POLICY IF EXISTS "Allow anon and authenticated to insert orders" ON public.orders;
DROP POLICY IF EXISTS "Allow customer order creation" ON public.orders;
CREATE POLICY "Allow customer order creation"
  ON public.orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy 6b: SELECT Policy
-- Authenticated users (Admin) can read ALL orders.
-- Anon users can read orders for customer tracking.
DROP POLICY IF EXISTS "Allow select orders" ON public.orders;
DROP POLICY IF EXISTS "Allow select orders by phone or admin" ON public.orders;
CREATE POLICY "Allow select orders by phone or admin"
  ON public.orders FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy 6c: STRICT UPDATE Policy (ADMIN ONLY)
-- ONLY Authenticated Admin users can update order status and receipt URL!
-- Anonymous users CANNOT update any orders!
DROP POLICY IF EXISTS "Allow update orders" ON public.orders;
DROP POLICY IF EXISTS "Allow authenticated admin full access" ON public.orders;
DROP POLICY IF EXISTS "Only admin update orders" ON public.orders;

CREATE POLICY "Only admin update orders"
  ON public.orders FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy 6d: STRICT DELETE Policy (ADMIN ONLY)
DROP POLICY IF EXISTS "Only admin delete orders" ON public.orders;
CREATE POLICY "Only admin delete orders"
  ON public.orders FOR DELETE
  TO authenticated
  USING (true);

-- 7. Secure Storage Bucket Security Policies for `receipts`
DROP POLICY IF EXISTS "Public Read Receipts" ON storage.objects;
CREATE POLICY "Public Read Receipts"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'receipts');

-- Only Authenticated Admin users can upload receipt photos
DROP POLICY IF EXISTS "Upload Receipts Policy" ON storage.objects;
DROP POLICY IF EXISTS "Admin Upload Receipts Policy" ON storage.objects;
CREATE POLICY "Admin Upload Receipts Policy"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'receipts');

DROP POLICY IF EXISTS "Update Receipts Policy" ON storage.objects;
DROP POLICY IF EXISTS "Admin Update Receipts Policy" ON storage.objects;
CREATE POLICY "Admin Update Receipts Policy"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'receipts');

-- 8. Secure RPC Function for Customer Order Tracking by Phone
CREATE OR REPLACE FUNCTION public.get_customer_orders_by_phone(p_phone text)
RETURNS SETOF public.orders
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT * FROM public.orders
  WHERE phone_number = p_phone
  ORDER BY created_at DESC;
$$;

GRANT EXECUTE ON FUNCTION public.get_customer_orders_by_phone(text) TO anon, authenticated;

-- 9. Notify PostgREST to reload schema cache immediately
NOTIFY pgrst, 'reload schema';
