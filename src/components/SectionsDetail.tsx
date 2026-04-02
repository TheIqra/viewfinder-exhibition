import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar02Icon, SmartPhone01Icon } from "@hugeicons/core-free-icons";

const sections = [
  { 
    title: "Day - 1", 
    subtitle: "On-Campus Action", 
    theme: "April 19, 2026", 
    items: [
      "Photo Exhibition",
      "Color Hunt",
      "Pop Quiz 1",
      "Photo Hunt"
    ],
    icon: Calendar02Icon, 
    rotate: -4, 
    bgColor: "bg-stone-100", 
    tapePos: "top-[-10px] left-1/2 -ml-10 rotate-[-2deg]",
  },
  { 
    title: "Day - 2", 
    subtitle: "Closing Ceremony", 
    theme: "April 20, 2026", 
    items: [
      "Photo Exhibition",
      "Dump Charades",
      "Pop Quiz 2",
      "Prize Giving"
    ], 
    icon: Calendar02Icon, 
    rotate: 2, 
    bgColor: "bg-slate-100", 
    tapePos: "top-[-12px] right-8 rotate-[4deg]",
  },
  { 
    title: "Online Event", 
    subtitle: "Virtual Session", 
    theme: "Pre-Event", 
    items: [
      "Critiquest (Movie Review)"
    ], 
    icon: SmartPhone01Icon, 
    rotate: -2, 
    bgColor: "bg-orange-50", 
    tapePos: "bottom-[-10px] left-1/2 -ml-10 rotate-[1deg]",
  },
];

const SectionsDetail = () => (
  <section id="categories" className="relative py-32 overflow-hidden bg-background">
    <div className="grain-overlay absolute inset-0 pointer-events-none" />
    
    <div className="container relative z-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="inline-block px-4 py-1 border-2 border-primary/20 rounded-full text-xs font-mono tracking-widest uppercase text-primary mb-6 retro-shadow bg-card">
          Festival Activities
        </p>
        <h2 className="text-4xl md:text-7xl font-display font-black text-foreground leading-[1.1]">
          Explore The <br className="hidden md:block" />
          <span className="text-gradient italic font-serif font-light">Event Schedule</span>
        </h2>
      </motion.div>

      {/* Scattered Polaroids Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-6 lg:gap-12 mt-10">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: s.rotate }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 60 }}
            whileHover={{ y: -15, rotate: 0, zIndex: 50, scale: 1.05 }}
            className={`relative w-[280px] sm:w-[320px] ${s.bgColor} p-4 pb-12 rounded-sm shadow-xl transition-all duration-300 border border-black/5 hover:shadow-2xl`}
            style={{boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 3px 5px rgba(0,0,0,0.05)"}}
          >
            {/* Masking Tape */}
            <div 
              className={`absolute w-24 h-6 bg-white/60 backdrop-blur-sm border border-black/5 shadow-sm transform z-20 ${s.tapePos}`}
              style={{ clipPath: "polygon(0 5%, 100% 0, 95% 100%, 5% 95%)" }}
            />

            {/* Inner Photo Area */}
            <div className="w-full aspect-square bg-white border border-black/10 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
              {/* Halftone subtle dots */}
              <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "10px 10px"}} />
              
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/10 transition-transform duration-500">
                <HugeiconsIcon icon={s.icon} size={32} strokeWidth={1.5} className="text-primary" />
              </div>
              
              <h3 className="font-display font-bold text-2xl text-foreground !leading-tight mb-2 relative z-10 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-sm font-retro text-muted-foreground uppercase tracking-wider relative z-10">
                {s.subtitle}
              </p>
            </div>

            {/* Polaroid Bottom Text Area */}
            <div className="pt-6 px-2 text-center">
              <span className="inline-block px-3 py-1 rounded bg-black/5 text-foreground/80 font-mono text-[10px] tracking-widest uppercase mb-4">
                {s.theme}
              </span>
              
              <ul className="text-foreground/80 text-sm leading-snug font-medium italic font-serif space-y-1.5 min-h-[5rem]">
                {s.items.map((item, idx) => (
                  <li key={idx}>— {item}</li>
                ))}
              </ul>

              {/* Handwritten signature/number */}
              <div className="absolute bottom-4 right-4 opacity-30 font-serif italic text-xl">
                0{i + 1}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectionsDetail;
