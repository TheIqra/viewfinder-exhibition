import { motion } from "framer-motion";
import fpcLogo from "@/assets/fpc-logo.png";
import uapLogo from "@/assets/uap-logo.png";
import MagicShapes from "./MagicShapes";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden magic-pattern">
    <MagicShapes />
    <div className="grid-pattern absolute inset-0 opacity-40" />

    <div className="container relative z-10 px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center"
      >
        {/* Logos */}
        <div className="flex items-center gap-6 md:gap-10 mb-8">
          <motion.img
            src={uapLogo}
            alt="University of Asia Pacific"
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <div className="w-px h-16 md:h-20 bg-border" />
          <motion.img
            src={fpcLogo}
            alt="Film & Photography Club"
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Film & Photography Club presents
        </motion.p>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-8xl lg:text-9xl font-display font-900 tracking-tight leading-none mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <span className="text-foreground">The</span>{" "}
          <span className="text-gradient">ViewFinder</span>
        </motion.h1>

        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <div className="h-px w-16 md:w-24 bg-primary/30" />
          <span className="text-6xl md:text-8xl font-display font-black text-primary">8</span>
          <div className="h-px w-16 md:w-24 bg-primary/30" />
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          A Photography Exhibition by UAP
        </motion.p>

        {/* Dates */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <div className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            📅 20-21 Nov 2024
          </div>
          <div className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            📍 Void Space, CSE Dept.
          </div>
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#details"
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-lg rounded-full overflow-hidden transition-all hover:shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{ animationName: "pulse-glow", animationDuration: "3s", animationIterationCount: "infinite" }}
        >
          Explore Details
          <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
        <div className="w-1.5 h-3 rounded-full bg-primary/50" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
