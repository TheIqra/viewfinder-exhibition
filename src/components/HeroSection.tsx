import { motion } from "framer-motion";
import fpcLogo from "@/assets/fpc-logo.png";

const HeroSection = () => (
  <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-background">
    {/* Soft glowing ambient backgrounds */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    
    {/* Gentle dust particles overlay (simulated with grid) */}
    <div className="grid-pattern absolute inset-0 opacity-10 pointer-events-none" />

    {/* Cinematic framing crop marks */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[6]">
      <motion.div
        className="w-[90vw] h-[90vh] md:w-[85vw] md:h-[85vh] relative"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      >
        <div className="absolute top-0 left-0 w-8 md:w-16 h-px bg-primary/30" />
        <div className="absolute top-0 left-0 w-px h-8 md:h-16 bg-primary/30" />
        <div className="absolute top-0 right-0 w-8 md:w-16 h-px bg-primary/30" />
        <div className="absolute top-0 right-0 w-px h-8 md:h-16 bg-primary/30" />
        <div className="absolute bottom-0 left-0 w-8 md:w-16 h-px bg-primary/30" />
        <div className="absolute bottom-0 left-0 w-px h-8 md:h-16 bg-primary/30" />
        <div className="absolute bottom-0 right-0 w-8 md:w-16 h-px bg-primary/30" />
        <div className="absolute bottom-0 right-0 w-px h-8 md:h-16 bg-primary/30" />
      </motion.div>
    </div>

    {/* Film strip subtle lines (left and right edges) */}
    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none z-0" />
    <div className="hidden md:block absolute right-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none z-0" />

    <div className="container relative z-[50] px-4 h-full flex flex-col justify-center items-center pointer-events-auto select-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="flex flex-col items-center text-center relative z-[50] w-full max-w-4xl mx-auto"
      >
        {/* Logo */}
        <motion.div 
          className="flex items-center justify-center mb-6 md:mb-10"
          initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        >
          <img
            src={fpcLogo}
            alt="Film & Photography Club"
            className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-80"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xs md:text-sm tracking-[0.4em] md:tracking-[0.6em] uppercase text-foreground/50 mb-4 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
        >
          Film & Photography Club Presents
        </motion.p>

        {/* Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-9xl font-display font-light tracking-[0.1em] leading-none mb-3 text-foreground/90 flex flex-col sm:flex-row items-center gap-3 sm:gap-6"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
        >
          <span className="opacity-80">THE</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60 font-medium" style={{ filter: "drop-shadow(0 0 30px theme(colors.primary.DEFAULT / 0.3))" }}>
            VIEWFINDER
          </span>
        </motion.h1>

        {/* Edition Number */}
        <motion.div
          className="flex items-center gap-6 mb-10 md:mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 2 }}
        >
          <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-primary/40" />
          <span className="text-4xl md:text-6xl font-display font-light text-primary/80" style={{ filter: "drop-shadow(0 0 15px theme(colors.primary.DEFAULT / 0.5))" }}>8</span>
          <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-primary/40" />
        </motion.div>

        {/* The vibe of beauty and waiting */}
        <motion.div
          className="relative text-center space-y-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1.5, ease: "easeOut" }}
        >
          <motion.p 
            className="text-base md:text-xl text-foreground/70 font-light leading-relaxed max-w-2xl px-4 italic"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            "A chapter closes softly in the darkroom. Thank you for bringing your vision to life and making Season 8 truly unforgettable."
          </motion.p>
          
          <div className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-primary/40" />

          <div className="pt-2 flex flex-col items-center">
            <motion.p 
              className="text-[0.65rem] md:text-xs text-primary uppercase tracking-[0.5em] mb-4 font-light opacity-80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 2 }}
            >
              Anticipate the next frame
            </motion.p>
            
            <motion.p 
              className="text-2xl md:text-3xl font-display font-light text-foreground/90 uppercase tracking-[0.3em] flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.8, duration: 2 }}
            >
               SEASON 
               <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-primary/50 text-5xl md:text-6xl font-bold" style={{ filter: "drop-shadow(0 0 20px theme(colors.primary.DEFAULT / 0.6))" }}>9</span>
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
