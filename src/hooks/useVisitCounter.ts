import { supabase } from "@/lib/supabase";

/**
 * Detects the traffic source/platform from URL parameters and referrer.
 *
 * Known click-tracking params:
 *  fbclid  → Facebook
 *  gclid   → Google Ads
 *  msclkid → Microsoft/Bing Ads
 *  ttclid  → TikTok
 *  twclid  → Twitter/X
 *  igshid  → Instagram
 *  utm_source → generic UTM (fallback)
 */
function detectTrafficSource(params: URLSearchParams, referrer: string): string {
  if (params.has("fbclid")) return "facebook";
  if (params.has("gclid")) return "google_ads";
  if (params.has("msclkid")) return "bing_ads";
  if (params.has("ttclid")) return "tiktok";
  if (params.has("twclid")) return "twitter";
  if (params.has("igshid")) return "instagram";

  // UTM source takes priority after platform-specific IDs
  const utmSource = params.get("utm_source");
  if (utmSource) return utmSource.toLowerCase();

  // Fall back to parsing the referrer domain
  if (referrer) {
    try {
      const referrerHost = new URL(referrer).hostname.replace("www.", "");
      if (referrerHost.includes("facebook.com") || referrerHost.includes("fb.com")) return "facebook";
      if (referrerHost.includes("instagram.com")) return "instagram";
      if (referrerHost.includes("twitter.com") || referrerHost.includes("x.com")) return "twitter";
      if (referrerHost.includes("tiktok.com")) return "tiktok";
      if (referrerHost.includes("google.")) return "google";
      if (referrerHost.includes("bing.com")) return "bing";
      if (referrerHost.includes("youtube.com")) return "youtube";
      if (referrerHost.includes("whatsapp.com") || referrerHost.includes("wa.me")) return "whatsapp";
      if (referrerHost.includes("linkedin.com")) return "linkedin";
      // Any other external referrer — just use the domain
      if (referrerHost) return referrerHost;
    } catch {
      // Malformed referrer — ignore
    }
  }

  return "direct";
}

/**
 * Tracks a unique visitor by IP address via a Supabase RPC function.
 * Captures traffic source, referrer, UTM params, and the full landing URL.
 */
export async function trackUniqueVisitor(): Promise<void> {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const { ip } = await res.json();

    const userAgent = window.navigator.userAgent;
    const language = window.navigator.language;
    const path = window.location.pathname;
    const referrer = document.referrer;

    const params = new URLSearchParams(window.location.search);
    const trafficSource = detectTrafficSource(params, referrer);

    // Capture UTM fields individually for richer filtering in Supabase
    const utmSource = params.get("utm_source") ?? null;
    const utmMedium = params.get("utm_medium") ?? null;
    const utmCampaign = params.get("utm_campaign") ?? null;

    // Full landing URL (strip hash for cleanliness, keep query params)
    const landingUrl = `${window.location.origin}${window.location.pathname}${window.location.search}`;

    const { error } = await supabase.rpc("track_visitor", {
      p_ip_address: ip,
      p_user_agent: userAgent,
      p_language: language,
      p_path: path,
      p_referrer: referrer || null,
      p_traffic_source: trafficSource,
      p_utm_source: utmSource,
      p_utm_medium: utmMedium,
      p_utm_campaign: utmCampaign,
      p_landing_url: landingUrl,
    });

    if (error) {
      console.error("Visitor tracking failed via RPC:", error.message || error);
    }
  } catch (err) {
    console.error("Error tracking visitor:", err);
  }
}

/**
 * Fetches aggregated visitor stats from Supabase.
 * Returns total visits, unique IPs, and a breakdown by traffic source.
 */
export async function fetchVisitorStats(): Promise<{
  totalVisits: number;
  uniqueVisitors: number;
  bySource?: Record<string, number>;
} | null> {
  try {
    const { data, error } = await supabase
      .from("site_visitors")
      .select("visit_count, traffic_source");

    if (error) {
      console.error("Failed to fetch visitor stats:", error.message);
      return null;
    }

    const uniqueVisitors = data?.length ?? 0;
    const totalVisits =
      data?.reduce((sum, row) => sum + (row.visit_count ?? 0), 0) ?? 0;

    // Build a per-source breakdown
    const bySource: Record<string, number> = {};
    for (const row of data ?? []) {
      const src = row.traffic_source ?? "direct";
      bySource[src] = (bySource[src] ?? 0) + (row.visit_count ?? 0);
    }

    return { totalVisits, uniqueVisitors, bySource };
  } catch (err) {
    console.error("Error fetching visitor stats:", err);
    return null;
  }
}
