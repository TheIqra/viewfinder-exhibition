import { motion } from "framer-motion";
import { Radio, Crosshair } from "lucide-react";

const ComingSoonSection = () => (
  <section className="relative py-32 overflow-hidden magic-pattern">
    {/* Camera crosshair / focus element */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <motion.div
        className="camera-viewfinder"
        initial={{ opacity: 0, scale: 1.3 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Corners */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary/40" />
        <motion.div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary/40" animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-primary/40" animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
        <motion.div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-primary/40" animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <motion.div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-primary/40" animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />
        {/* Center cross */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-px h-8 bg-primary/20 absolute left-1/2 -translate-x-1/2 -top-4" />
          <div className="w-8 h-px bg-primary/20 absolute top-1/2 -translate-y-1/2 -left-4" />
          <div className="w-2 h-2 rounded-full border border-primary/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </motion.div>
    </div>

    <div className="grain-overlay absolute inset-0" />
    <div className="container relative z-10 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 mb-6">
          <Crosshair className="w-4 h-4 text-primary" />
          <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium font-retro">Stay Tuned</p>
        </div>
        <h2 className="text-4xl md:text-7xl font-display font-black text-foreground mb-4" style={{ animation: "flicker 4s ease-in-out infinite" }}>
          Coming <span className="text-gradient">Soon</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10 font-retro">
          Online submission portal & more updates are on the way. Keep your cameras ready!
        </p>
        <motion.div
          className="inline-flex items-center gap-3 px-8 py-4 rounded-sm border-2 border-primary/30 text-primary font-display font-semibold retro-shadow bg-card"
          animate={{ boxShadow: ["4px 4px 0px hsl(350 72% 45% / 0.15)", "4px 4px 12px hsl(350 72% 45% / 0.3)", "4px 4px 0px hsl(350 72% 45% / 0.15)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Radio className="w-5 h-5 animate-pulse" />
          Submissions Opening Soon
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ComingSoonSection;
