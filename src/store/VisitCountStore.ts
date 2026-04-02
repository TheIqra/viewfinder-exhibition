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

const useVisitCountStore = create<VisitCountState>((set) => ({
  totalVisits: 0,
  uniqueVisitors: 0,
  loading: true,
  error: false,

  initialize: async () => {
    if (isInitializing) return;
    isInitializing = true;

    set({ loading: true, error: false });

    // Track this visit only once per session
    if (!sessionStorage.getItem(SESSION_TRACK_KEY)) {
      // We can await this if we want the newly incremented stats to show up accurately right away
      await trackUniqueVisitor();
      sessionStorage.setItem(SESSION_TRACK_KEY, "true");
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