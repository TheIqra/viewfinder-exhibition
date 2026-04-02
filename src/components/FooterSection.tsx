import { useEffect } from "react";
import fpcLogo from "@/assets/fpc-logo.png";
import uapLogo from "@/assets/uap-logo.png";
import useVisitCountStore from "@/store/VisitCountStore";
import { Eye, Users } from "lucide-react";

const FooterSection = () => {
  const { totalVisits, uniqueVisitors, loading, error, initialize } =
    useVisitCountStore();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <footer className="py-12 border-t-2 border-border bg-card relative overflow-hidden">
      <div className="grain-overlay absolute inset-0" />
      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logos */}
          <div className="flex items-center gap-4">
            <img src={fpcLogo} alt="FPC" className="w-10 h-10 object-contain" />
            <div className="w-px h-8 bg-border" />
            <img src={uapLogo} alt="UAP" className="w-10 h-10 object-contain" />
          </div>

          {/* Center copyright */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-retro">
              Film &amp; Photography Club — CSE,UAP
            </p>
            <p className="text-xs text-muted-foreground/60 mt-1 font-retro">
              The ViewFinder 8 &copy; 2026. All rights reserved.
            </p>
          </div>

          {/* Visitor Stats */}
          <div className="flex flex-col items-center md:items-end gap-1.5">
            {loading ? (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/40 bg-background/30">
                <Eye className="w-3.5 h-3.5 text-muted-foreground/40" />
                <span className="text-xs font-retro text-muted-foreground/40 animate-pulse">
                  loading…
                </span>
              </div>
            ) : error ? (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border/30 bg-background/20">
                <Eye className="w-3.5 h-3.5 text-muted-foreground/30" />
                <span className="text-xs font-retro text-muted-foreground/30">
                  — visits
                </span>
              </div>
            ) : (
              <>
                {/* Total visits */}
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/50 bg-background/40 backdrop-blur-sm"
                  title="Total page visits across all viewers"
                >
                  <Eye className="w-3.5 h-3.5 text-muted-foreground/60" />
                  <span className="text-xs font-retro text-muted-foreground/80 tabular-nums">
                    {totalVisits.toLocaleString()} visits
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
