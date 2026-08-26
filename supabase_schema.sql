-- ====================================================================
-- PROMO.HOLIC PRODUCTION DATABASE MIGRATION SCRIPT FOR SUPABASE
-- Run this script in your Supabase SQL Editor: Dashboard -> SQL Editor -> New Query
-- ====================================================================

-- 1. Create `public.orders` Table
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

-- 4. Set Up Supabase Storage Bucket for Receipts
INSERT INTO storage.buckets (id, name, public)
VALUES ('receipts', 'receipts', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- 5. Enable Row Level Security (RLS) on `public.orders`
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- 6. Row Level Security Policies for `public.orders`

-- Policy 6a: Allow anyone (Anon & Authenticated) to INSERT new orders
DROP POLICY IF EXISTS "Allow anon and authenticated to insert orders" ON public.orders;
CREATE POLICY "Allow anon and authenticated to insert orders"
  ON public.orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy 6b: Allow select orders by phone number or exact query
DROP POLICY IF EXISTS "Allow select orders" ON public.orders;
CREATE POLICY "Allow select orders"
  ON public.orders FOR SELECT
  TO anon, authenticated
  USING (true);

-- Policy 6c: Allow authenticated users (Admin) full update & delete access
DROP POLICY IF EXISTS "Allow authenticated admin full access" ON public.orders;
CREATE POLICY "Allow authenticated admin full access"
  ON public.orders FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- 7. Storage Bucket Security Policies for `receipts`
DROP POLICY IF EXISTS "Public Read Receipts" ON storage.objects;
CREATE POLICY "Public Read Receipts"
  ON storage.objects FOR SELECT
  TO anon, authenticated
  USING (bucket_id = 'receipts');

DROP POLICY IF EXISTS "Upload Receipts Policy" ON storage.objects;
CREATE POLICY "Upload Receipts Policy"
  ON storage.objects FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'receipts');

DROP POLICY IF EXISTS "Update Receipts Policy" ON storage.objects;
CREATE POLICY "Update Receipts Policy"
  ON storage.objects FOR UPDATE
  TO anon, authenticated
  USING (bucket_id = 'receipts');
