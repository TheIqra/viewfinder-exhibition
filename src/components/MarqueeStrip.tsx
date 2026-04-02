import { Camera, Aperture, Film, Focus, Eye, Sparkles } from "lucide-react";

const items = [
  { text: "THE VIEWFINDER 8", icon: Camera },
  { text: "SUBMIT BY 13TH APRIL", icon: Aperture },
  { text: "EXHIBITION 19-20 APRIL", icon: Film },
  { text: "UAP PLAZA", icon: Focus },
  { text: "OPEN FOR ALL DEPARTMENTS", icon: Eye },
  { text: "SHOWCASE YOUR VISION", icon: Sparkles },
];

const MarqueeStrip = () => (
  <div className="relative overflow-hidden bg-primary py-3 border-y-2 border-foreground/20">
    <div className="marquee-track">
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <div key={i} className="flex items-center gap-3 px-8 whitespace-nowrap">
          <item.icon className="w-4 h-4 text-primary-foreground/80" />
          <span className="font-retro text-sm text-primary-foreground tracking-widest">
            {item.text}
          </span>
          <span className="text-primary-foreground/40 mx-2">///</span>
        </div>
      ))}
    </div>
  </div>
);

export default MarqueeStrip;
