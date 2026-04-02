import { motion } from "framer-motion";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowDownDoubleIcon, Directions02Icon, Calendar02Icon } from '@hugeicons/core-free-icons';
import fpcLogo from "@/assets/fpc-logo.png";
import uapLogo from "@/assets/uap-logo.png";


const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden magic-pattern">
    {/* Camera focus reveal - isolated so filter doesn't block pointer-events */}
    <div className="absolute inset-0 z-[1] pointer-events-none camera-focus-reveal" />

    {/* Camera focus ring */}
    <div className="camera-focus-ring pointer-events-none" />

    {/* Camera viewfinder corners + crosshair */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[6]">
      <motion.div
        className="camera-viewfinder"
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
      >
        <motion.div className="absolute top-0 left-0 vf-corner border-t-2 border-l-2 border-primary/40" animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="absolute top-0 right-0 vf-corner border-t-2 border-r-2 border-primary/40" animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} />
        <motion.div className="absolute bottom-0 left-0 vf-corner border-b-2 border-l-2 border-primary/40" animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        <motion.div className="absolute bottom-0 right-0 vf-corner border-b-2 border-r-2 border-primary/40" animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-px h-6 md:h-8 bg-primary/20 absolute left-1/2 -translate-x-1/2 -top-3 md:-top-4" />
          <div className="w-6 md:w-8 h-px bg-primary/20 absolute top-1/2 -translate-y-1/2 -left-3 md:-left-4" />
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full border border-primary/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </motion.div>
    </div>

    <div className="grid-pattern absolute inset-0 opacity-15 pointer-events-none" />

    {/* Film strip left */}
    <div className="hidden md:block absolute left-0 top-0 bottom-0 film-strip opacity-20 pointer-events-none z-0" />
    <div className="hidden md:block absolute right-0 top-0 bottom-0 film-strip opacity-20 pointer-events-none z-0" />

    {/* Camera HUD Elements */}
    <div className="absolute top-8 right-8 z-20 pointer-events-none hidden sm:flex items-center gap-2 font-mono text-xs md:text-sm text-red-500 font-bold tracking-widest">
      <motion.div 
        className="w-3 h-3 rounded-full bg-red-500"
        animate={{ opacity: [1, 0, 1] }} 
        transition={{ duration: 2, repeat: Infinity }} 
      />
      REC
      <span className="ml-2 text-foreground/70">
        00<motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>:</motion.span>00<motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}>:</motion.span>00
      </span>
    </div>

    <div className="absolute bottom-8 left-8 z-20 pointer-events-none hidden sm:flex flex-col gap-1 font-mono text-xs text-foreground/50 tracking-widest">
      <span>ISO 800</span>
      <span>F/2.8</span>
      <span>1/125</span>
    </div>

    <div className="container relative z-[50] px-4 py-20 pointer-events-auto select-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center relative z-[50] w-full"
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
          <motion.div
            className="w-px h-16 md:h-20 bg-foreground/20"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
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
          className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground mb-4 font-retro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Film & Photography Club,CSE-UAP presents
        </motion.p>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-8xl lg:text-9xl font-display font-900 tracking-tight leading-none mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ animation: "flicker 4s ease-in-out infinite" }}
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
          <div className="h-0.5 w-16 md:w-24 bg-foreground/20" />
          <span className="text-6xl md:text-8xl font-display font-black text-primary">8</span>
          <div className="h-0.5 w-16 md:w-24 bg-foreground/20" />
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mb-4 font-retro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          A Captivating Photographic Journey
        </motion.p>

        {/* Dates */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-sm bg-primary/10 border border-primary/20 text-primary text-sm font-medium retro-shadow">
            <span className="flex items-center justify-center">
              <HugeiconsIcon icon={Calendar02Icon} size={16} color="currentColor" strokeWidth={2} />
            </span>
            19-20 April
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-sm bg-secondary border border-border text-secondary-foreground text-sm font-medium retro-shadow">
            <span className="flex items-center justify-center">
              <HugeiconsIcon icon={Directions02Icon} size={16} color="currentColor" strokeWidth={2} />
            </span>
            UAP Plaza
          </div>
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#details"
          className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold text-lg rounded-sm overflow-hidden transition-all retro-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          whileTap={{ scale: 0.97 }}
        >
          Explore Details
          <span className="transition-transform group-hover:translate-y-1 flex items-center justify-center">
            <HugeiconsIcon icon={ArrowDownDoubleIcon} size={20} color="currentColor" strokeWidth={2.5} />
          </span>
        </motion.a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-0"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex justify-center pt-2">
        <div className="w-1.5 h-3 rounded-full bg-primary/50" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
