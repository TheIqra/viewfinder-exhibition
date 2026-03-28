import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import MagicShapes from "./MagicShapes";

const ComingSoonSection = () => (
  <section className="relative py-32 overflow-hidden magic-pattern">
    <MagicShapes />
    <div className="grain-overlay absolute inset-0" />
    <div className="container relative z-10 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-6 font-retro">Stay Tuned</p>
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
