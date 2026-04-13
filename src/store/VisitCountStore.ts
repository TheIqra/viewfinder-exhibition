import { create } from "zustand";
import { trackUniqueVisitor, fetchVisitorStats } from "@/hooks/useVisitCounter";

interface VisitCountState {
  totalVisits: number;
  uniqueVisitors: number;
  loading: boolean;
  error: boolean;
  initialize: () => Promise<void>;
}

const SESSION_TRACK_KEY = "vf_visit_tracked";
let isInitializing = false;
let hasTracked = false;

const useVisitCountStore = create<VisitCountState>((set) => ({
  totalVisits: 0,
  uniqueVisitors: 0,
  loading: true,
  error: false,

  initialize: async () => {
    if (isInitializing) return;
    isInitializing = true;

    set({ loading: true, error: false });

    // Track this visit once per page load to see the counter increase correctly
    // (avoids React Strict Mode double-firing).
    if (!hasTracked) {
      hasTracked = true;
      await trackUniqueVisitor();
    }

    // Fetch aggregated stats to display in footer
    const stats = await fetchVisitorStats();

    if (stats) {
      set({
        totalVisits: stats.totalVisits,
        uniqueVisitors: stats.uniqueVisitors,
        loading: false,
      });
    } else {
      set({ loading: false, error: true });
    }
    
    isInitializing = false;
  },
}));

export default useVisitCountStore;