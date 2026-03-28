import { motion } from "framer-motion";
import MagicShapes from "./MagicShapes";

const ComingSoonSection = () => (
  <section className="relative py-32 overflow-hidden magic-pattern">
    <MagicShapes />
    <div className="container relative z-10 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm tracking-[0.3em] uppercase text-primary font-medium mb-6">Stay Tuned</p>
        <h2 className="text-4xl md:text-7xl font-display font-black text-foreground mb-4">
          Coming <span className="text-gradient">Soon</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
          Online submission portal & more updates are on the way. Keep your cameras ready!
        </p>
        <motion.div
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-primary/30 text-primary font-display font-semibold"
          animate={{ boxShadow: ["0 0 20px hsl(350 72% 45% / 0.1)", "0 0 40px hsl(350 72% 45% / 0.25)", "0 0 20px hsl(350 72% 45% / 0.1)"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
          Submissions Opening Soon
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ComingSoonSection;
