-- ============================================================
-- Migration: Add traffic source / referral tracking columns
-- Table: site_visitors
-- ============================================================

-- 1. Add new columns (safe to run multiple times with IF NOT EXISTS style)
ALTER TABLE site_visitors
  ADD COLUMN IF NOT EXISTS referrer        TEXT,
  ADD COLUMN IF NOT EXISTS traffic_source  TEXT DEFAULT 'direct',
  ADD COLUMN IF NOT EXISTS utm_source      TEXT,
  ADD COLUMN IF NOT EXISTS utm_medium      TEXT,
  ADD COLUMN IF NOT EXISTS utm_campaign    TEXT,
  ADD COLUMN IF NOT EXISTS landing_url     TEXT;

-- 2. Update (or replace) the track_visitor RPC to accept the new params
-- Drop the old function first so we can change its signature
DROP FUNCTION IF EXISTS track_visitor(TEXT, TEXT, TEXT, TEXT);

CREATE OR REPLACE FUNCTION track_visitor(
  p_ip_address    TEXT,
  p_user_agent    TEXT,
  p_language      TEXT,
  p_path          TEXT,
  p_referrer      TEXT      DEFAULT NULL,
  p_traffic_source TEXT     DEFAULT 'direct',
  p_utm_source    TEXT      DEFAULT NULL,
  p_utm_medium    TEXT      DEFAULT NULL,
  p_utm_campaign  TEXT      DEFAULT NULL,
  p_landing_url   TEXT      DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO site_visitors (
    ip_address,
    user_agent,
    language,
    path,
    referrer,
    traffic_source,
    utm_source,
    utm_medium,
    utm_campaign,
    landing_url,
    visit_count,
    first_seen,
    last_seen
  )
  VALUES (
    p_ip_address,
    p_user_agent,
    p_language,
    p_path,
    p_referrer,
    p_traffic_source,
    p_utm_source,
    p_utm_medium,
    p_utm_campaign,
    p_landing_url,
    1,
    NOW(),
    NOW()
  )
  ON CONFLICT (ip_address) DO UPDATE
    SET
      visit_count    = site_visitors.visit_count + 1,
      last_seen      = NOW(),
      user_agent     = EXCLUDED.user_agent,
      language       = EXCLUDED.language,
      -- Update traffic source only if the new visit has a non-direct source
      -- (so we don't overwrite a known Facebook visitor with "direct" on their second visit)
      traffic_source = CASE
                         WHEN EXCLUDED.traffic_source <> 'direct' THEN EXCLUDED.traffic_source
                         ELSE site_visitors.traffic_source
                       END,
      referrer       = COALESCE(EXCLUDED.referrer, site_visitors.referrer),
      utm_source     = COALESCE(EXCLUDED.utm_source, site_visitors.utm_source),
      utm_medium     = COALESCE(EXCLUDED.utm_medium, site_visitors.utm_medium),
      utm_campaign   = COALESCE(EXCLUDED.utm_campaign, site_visitors.utm_campaign),
      landing_url    = COALESCE(EXCLUDED.landing_url, site_visitors.landing_url);
END;
$$;

-- 3. Grant execute permission to the anon role (used by the frontend)
GRANT EXECUTE ON FUNCTION track_visitor(TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT)
  TO anon, authenticated;

-- ============================================================
-- Useful analytics queries you can run in Supabase Dashboard
-- ============================================================

-- Visits by traffic source:
-- SELECT traffic_source, COUNT(*) as unique_visitors, SUM(visit_count) as total_visits
-- FROM site_visitors
-- GROUP BY traffic_source
-- ORDER BY total_visits DESC;

-- Facebook-only visits:
-- SELECT ip_address, visit_count, first_seen, last_seen, landing_url
-- FROM site_visitors
-- WHERE traffic_source = 'facebook'
-- ORDER BY last_seen DESC;

-- UTM campaign breakdown:
-- SELECT utm_campaign, utm_source, utm_medium, COUNT(*) as visitors, SUM(visit_count) as visits
-- FROM site_visitors
-- WHERE utm_campaign IS NOT NULL
-- GROUP BY utm_campaign, utm_source, utm_medium
-- ORDER BY visits DESC;
