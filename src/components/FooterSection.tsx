import fpcLogo from "@/assets/fpc-logo.png";
import uapLogo from "@/assets/uap-logo.png";

const FooterSection = () => (
  <footer className="py-12 border-t-2 border-border bg-card">
    <div className="grain-overlay absolute inset-0" />
    <div className="container px-4 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img src={fpcLogo} alt="FPC" className="w-10 h-10 object-contain" />
          <div className="w-px h-8 bg-border" />
          <img src={uapLogo} alt="UAP" className="w-10 h-10 object-contain" />
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm text-muted-foreground font-retro">
            Film & Photography Club — University of Asia Pacific
          </p>
          <p className="text-xs text-muted-foreground/60 mt-1 font-retro">
            The ViewFinder 8 &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
