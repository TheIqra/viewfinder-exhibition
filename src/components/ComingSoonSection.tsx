import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-04-13T23:59:59");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const Digit = ({ value, label }: { value: number; label: string }) => (
  <motion.div
    className="flex flex-col items-center gap-2"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="relative">
      {/* Outer shutter ring */}
      <motion.div
        className="absolute inset-[-6px] md:inset-[-8px] rounded-sm border border-primary/20"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Card */}
      <div className="relative w-16 h-20 sm:w-20 sm:h-24 md:w-28 md:h-32 bg-card border-2 border-border rounded-sm overflow-hidden retro-shadow flex items-center justify-center">
        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg,#000 0px,#000 1px,transparent 1px,transparent 4px)",
          }}
        />
        {/* Top/bottom split line */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-border/60" />
        {/* Number */}
        <motion.span
          key={value}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="font-display font-black text-3xl sm:text-4xl md:text-6xl text-foreground tabular-nums select-none"
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </div>
    </div>
    <span className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.3em] uppercase text-muted-foreground font-retro">
      {label}
    </span>
  </motion.div>
);

const ComingSoonSection = () => {
  const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

  return (
    <section id="registration" className="relative py-32 overflow-hidden">
      {/* Radial gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Animated concentric pulse rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[1, 2, 3].map((n) => (
          <motion.div
            key={n}
            className="absolute rounded-full border border-primary/10"
            style={{ width: n * 220, height: n * 220, top: -(n * 110), left: -(n * 110) }}
            animate={{ scale: [1, 1.06, 1], opacity: [0.12, 0.3, 0.12] }}
            transition={{ duration: 3 + n * 0.8, repeat: Infinity, ease: "easeInOut", delay: n * 0.4 }}
          />
        ))}
      </div>

      {/* Horizontal rule accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Film perforations on sides */}
      <div className="hidden lg:flex absolute left-6 top-0 bottom-0 flex-col justify-center gap-6 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-4 h-6 rounded-sm border border-foreground/10 bg-foreground/5" />
        ))}
      </div>
      <div className="hidden lg:flex absolute right-6 top-0 bottom-0 flex-col justify-center gap-6 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="w-4 h-6 rounded-sm border border-foreground/10 bg-foreground/5" />
        ))}
      </div>

      <div className="container relative z-10 px-4 text-center">
        {/* Top eyebrow */}
        <motion.div
          className="inline-flex items-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-12 bg-primary/40" />
          <span className="text-xs tracking-[0.4em] uppercase text-primary font-retro">Submission</span>
          <div className="h-px w-12 bg-primary/40" />
        </motion.div>

        {/* Main heading */}
        <motion.h2
          className="text-5xl md:text-8xl font-display font-black text-foreground mb-3 leading-none tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ animation: "flicker 5s ease-in-out infinite" }}
        >
          Don't Miss <span className="text-gradient">Your Shot</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-base md:text-lg max-w-sm mx-auto mb-14 font-retro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Submissions close Apr 13 — register now and showcase your best work.
        </motion.p>

        {/* Countdown */}
        <motion.div
          className="flex items-start justify-center gap-2 sm:gap-4 md:gap-8 mb-14"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Digit value={days} label="Days" />
          <span className="font-display font-black text-2xl sm:text-4xl md:text-6xl text-primary/40 mt-5 sm:mt-6 select-none">:</span>
          <Digit value={hours} label="Hours" />
          <span className="font-display font-black text-2xl sm:text-4xl md:text-6xl text-primary/40 mt-5 sm:mt-6 select-none">:</span>
          <Digit value={minutes} label="Minutes" />
          <span className="font-display font-black text-2xl sm:text-4xl md:text-6xl text-primary/40 mt-5 sm:mt-6 select-none">:</span>
          <Digit value={seconds} label="Seconds" />
        </motion.div>

        {/* EXIF-style metadata bar */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12 font-mono text-xs text-foreground/40 tracking-widest"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <span>DEADLINE: 13 APR 2026</span>
          <span className="w-px h-4 bg-foreground/20" />
          <span>VENUE: UAP PLAZA</span>
          <span className="w-px h-4 bg-foreground/20" />
          <span>EXHIBITION: 19-20 APR</span>
          <span className="w-px h-4 bg-foreground/20" />
          <span>FEE: BDT 200/-</span>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="#registration"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-sm bg-primary text-primary-foreground font-display font-bold text-base overflow-hidden retro-shadow"
            whileHover={{ x: 2, y: 2, boxShadow: "none" }}
            animate={{
              boxShadow: [
                "4px 4px 0px hsl(350 72% 30%)",
                "6px 6px 20px hsl(350 72% 45% / 0.5)",
                "4px 4px 0px hsl(350 72% 30%)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {/* shimmer sweep */}
            <span className="absolute inset-0 -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700 bg-white/10" />
            <motion.div
              className="w-2.5 h-2.5 rounded-full bg-primary-foreground/80"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            />
            Claim Your Frame — Submit Now
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoonSection;
