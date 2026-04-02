import { supabase } from "@/lib/supabase";

/**
 * Tracks a unique visitor by IP address via a Supabase RPC function.
 * The RPC function handles upserting the visitor record and incrementing
 * the visit count atomically on the database side.
 *
 * Required Supabase SQL to set up:
 * See the SQL migration at the bottom of this file's companion notes.
 */
export async function trackUniqueVisitor(): Promise<void> {
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const { ip } = await res.json();

    const userAgent = window.navigator.userAgent;
    const language = window.navigator.language;
    const path = window.location.pathname;

    const { error } = await supabase.rpc("track_visitor", {
      p_ip_address: ip,
      p_user_agent: userAgent,
      p_language: language,
      p_path: path,
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
 * Returns total visits, unique IPs, and top paths.
 */
export async function fetchVisitorStats(): Promise<{
  totalVisits: number;
  uniqueVisitors: number;
} | null> {
  try {
    const { data, error } = await supabase
      .from("site_visitors")
      .select("visit_count");

    if (error) {
      console.error("Failed to fetch visitor stats:", error.message);
      return null;
    }

    const uniqueVisitors = data?.length ?? 0;
    const totalVisits =
      data?.reduce((sum, row) => sum + (row.visit_count ?? 0), 0) ?? 0;

    return { totalVisits, uniqueVisitors };
  } catch (err) {
    console.error("Error fetching visitor stats:", err);
    return null;
  }
}
