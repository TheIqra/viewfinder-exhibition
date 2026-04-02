import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { CloudUploadIcon, PaintBoardIcon, Location01Icon } from "@hugeicons/core-free-icons";

const timeline = [
  { date: "13th April", label: "Submission Deadline", icon: CloudUploadIcon, active: true },
  { date: "19-20 April", label: "Exhibition Dates", icon: PaintBoardIcon, active: false },
  { date: "UAP Plaza", label: "Venue — CSE Dept.", icon: Location01Icon, active: false },
];

const ScheduleSection = () => (
  <section className="relative py-32 bg-foreground text-background overflow-hidden">
    <div className="container relative z-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm tracking-[0.4em] uppercase text-background/60 font-medium mb-3 font-retro">
          Exhibition Timeline
        </p>
        <h2 className="text-4xl md:text-6xl font-display font-black text-background">
          Road to <span className="text-primary italic font-serif font-light">ViewFinder</span>
        </h2>
      </motion.div>

      {/* Film Strip Timeline */}
      <div className="relative max-w-6xl mx-auto mt-12">
        {/* The Film Strip Base */}
        <div className="relative bg-[#111] border-y border-white/10 rounded-xl overflow-hidden py-6 md:py-12 px-4 md:px-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Top Perforations */}
          <div className="absolute top-2 left-0 right-0 flex justify-between px-4 opacity-30">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-2 md:w-3 h-3 md:h-4 bg-background rounded-sm" />
            ))}
          </div>

          {/* Bottom Perforations */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4 opacity-30">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-2 md:w-3 h-3 md:h-4 bg-background rounded-sm" />
            ))}
          </div>

          {/* Timeline Frames */}
          <div className="relative z-10 grid md:grid-cols-3 gap-6 md:gap-10">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex items-center">
                {/* The Frame */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: "brightness(0.5)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className={`relative w-full aspect-[4/3] rounded-lg overflow-hidden flex flex-col items-center justify-center p-6 text-center border transition-all duration-500 hover:scale-105 group ${
                    item.active 
                      ? "bg-primary/20 border-primary shadow-[0_0_30px_rgba(225,29,72,0.3)]" 
                      : "bg-white/5 border-white/10 hover:border-white/30"
                  }`}
                >
                  {/* Subtle inner ambient light */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t ${item.active ? "from-primary/20" : "from-white/10"} to-transparent pointer-events-none`} />

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${item.active ? "bg-primary text-primary-foreground" : "bg-white/10 text-white/70"}`}>
                    <HugeiconsIcon icon={item.icon} size={28} strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl md:text-3xl font-display font-black mb-2 tracking-tight ${item.active ? "text-white" : "text-white/90"}`}>
                    {item.date}
                  </h3>
                  <p className={`text-sm md:text-xs font-retro tracking-widest uppercase ${item.active ? "text-primary-foreground/90" : "text-white/50"}`}>
                    {item.label}
                  </p>
                  
                  {/* Frame Counter Corner Text */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-white/20">
                    FRM - 0{i + 1}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ScheduleSection;
