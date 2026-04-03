import { motion } from "framer-motion";
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Camera03Icon,
  Image03Icon,
  SmartPhone01Icon,
  SparklesIcon,
  Idea01Icon,
  Award01Icon
} from "@hugeicons/core-free-icons";
import { Clapperboard, HelpCircle, Search, Gamepad2, Gift, MessageCircleQuestion } from "lucide-react";

const EventSegments = () => {
  return (
    <section id="event-segments" className="relative py-24 md:py-32 bg-background overflow-hidden border-t-2 border-border/50">
      {/* Subtle halftone background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "32px 32px" }}
      />
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="inline-block px-4 py-1 border-2 border-primary/20 rounded-full text-xs font-mono tracking-widest uppercase text-primary mb-6 retro-shadow bg-card">
              What to Expect
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight leading-[0.9] text-foreground">
              Event <br />
              <span className="text-gradient italic font-serif font-light tracking-normal lowercase">segments.</span>
            </h2>
          </div>
          <div className="max-w-md text-muted-foreground font-retro text-sm leading-relaxed border-l-2 border-primary/30 pl-4">
            Discover the diverse range of activities we have lined up. From capturing perfect moments to deciphering movie plots.
          </div>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

          {/* 1. Photo Exhibition (Large Hero Card) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="lg:col-span-7 bg-foreground text-background p-8 md:p-12 rounded-2xl border border-border shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.15)] relative overflow-hidden group transition-all duration-300"
          >
            {/* Background Icon */}
            <div className="absolute -right-16 -top-16 text-background/5 scale-[2.5] rotate-12 transition-transform duration-1000 group-hover:rotate-45 group-hover:scale-[3]">
              <HugeiconsIcon icon={Camera03Icon} size={300} strokeWidth={0.5} />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-foreground animate-pulse">
                  <HugeiconsIcon icon={Camera03Icon} size={24} />
                </div>
                <span className="font-mono text-sm uppercase tracking-widest text-primary/90 font-bold">Main Attraction</span>
              </div>

              <h3 className="text-4xl md:text-5xl lg:text-7xl font-display font-black mb-12 uppercase leading-[0.9] tracking-tight">
                Photo<br />Exhibition
              </h3>

              <div className="space-y-4">
                {[
                  { title: "Mobile Photography", icon: SmartPhone01Icon, desc: "For the spontaneous clickers." },
                  { title: "DSLR Photography", icon: Image03Icon, desc: "For the masters of light & lenses." },
                  { title: "UAP Diary", icon: SparklesIcon, desc: "Campus life, frozen in time." }
                ].map((item, idx) => (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    key={idx}
                    className="flex items-center gap-5 p-4 rounded-xl bg-background/5 border border-background/10 backdrop-blur-sm group/item hover:bg-primary/20 hover:border-primary/50 transition-colors"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-full bg-background/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-background transition-colors">
                      <HugeiconsIcon icon={item.icon} size={22} strokeWidth={2} />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-display font-bold tracking-tight">{item.title}</h4>
                      <p className="font-retro text-xs md:text-sm text-background/60 mt-1 uppercase tracking-wider">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column for Secondary Segments */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">

            {/* 2. Other Segments */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="flex-1 bg-card p-6 md:p-8 rounded-2xl border-2 border-border retro-shadow relative overflow-hidden group"
            >
              <div className="absolute right-0 bottom-0 text-foreground/5 scale-[2] translate-y-1/3 translate-x-1/4 transition-transform duration-700 group-hover:scale-[2.5]">
                <HugeiconsIcon icon={Award01Icon} size={200} strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-display font-black uppercase mb-8 flex items-center gap-3">
                  <HugeiconsIcon icon={Award01Icon} className="text-primary" size={32} strokeWidth={2} />
                  More Segments
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Color Hunt", icon: <HugeiconsIcon icon={Idea01Icon} size={20} strokeWidth={2} /> },
                    { title: "Pop Quiz 1", icon: <HelpCircle size={20} strokeWidth={2} /> },
                    { title: "Photo Hunt", icon: <Search size={20} strokeWidth={2} /> },
                    { title: "Dumb Charades", icon: <Gamepad2 size={20} strokeWidth={2} /> },
                    { title: "Pop Quiz 2", icon: <MessageCircleQuestion size={20} strokeWidth={2} /> },
                    { title: "Prize Giving", icon: <Gift size={20} strokeWidth={2} /> },
                  ].map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (idx * 0.05) }}
                      className="flex items-center gap-3 bg-background/50 border border-border/50 p-4 rounded-xl group/sub hover:bg-primary/10 hover:border-primary/30 transition-colors z-10 relative"
                    >
                      <div className="w-10 h-10 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/sub:bg-primary group-hover/sub:text-background transition-colors">
                        {item.icon}
                      </div>
                      <span className="font-display font-semibold text-base leading-tight">{item.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 3. Online Event */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-primary text-primary-foreground p-8 rounded-2xl border-2 border-foreground shadow-[6px_6px_0px_0px_#000] hover:shadow-[10px_10px_0px_0px_#000] relative overflow-hidden group transition-all"
            >
              {/* Halftone texture over the primary color */}
              <div
                className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "10px 10px" }}
              />

              <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                <div className="flex justify-between items-start">
                  <h3 className="text-4xl md:text-5xl font-display font-black uppercase leading-none">Online<br />Event</h3>
                  <div className="p-4 bg-background text-foreground border-2 border-foreground rounded-full rotate-12 group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out shadow-[4px_4px_0px_0px_#000]">
                    <Clapperboard size={32} />
                  </div>
                </div>

                <div className="bg-background/10 backdrop-blur-sm border border-primary-foreground/30 p-6 rounded-xl text-primary-foreground transform group-hover:scale-[1.02] transition-transform">
                  <h4 className="text-3xl font-serif italic mb-1 flex items-center gap-3">
                    Critiquest
                  </h4>
                  <p className="font-mono text-sm uppercase tracking-widest opacity-90 border-t border-primary-foreground/20 pt-2 mt-2">
                    Movie Review
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSegments;
