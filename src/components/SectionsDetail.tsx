import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar02Icon, SmartPhone01Icon, Film02Icon } from "@hugeicons/core-free-icons";

const sections = [
  {
    title: "Day One",
    subtitle: "On-Campus Action",
    theme: "April 19, 2026",
    items: [
      "Photo Exhibition",
      "Color Hunt",
      "Pop Quiz 1",
      "Photo Hunt"
    ],
    icon: Calendar02Icon,
  },
  {
    title: "Day Two",
    subtitle: "Closing Ceremony",
    theme: "April 20, 2026",
    items: [
      "Photo Exhibition",
      "Dumb Charades",
      "Pop Quiz 2",
      "Prize Giving"
    ],
    icon: Film02Icon,
  },
  {
    title: "Virtual",
    subtitle: "Online Event",
    theme: "Pre-Event",
    items: [
      "Critiquest (Movie Review)"
    ],
    icon: SmartPhone01Icon,
  },
];

const SectionsDetail = () => (
  <section id="schedule" className="relative py-24 md:py-32 bg-background border-t-2 border-border/50 overflow-hidden">
    {/* Subtle halftone/grain background */}
    <div
      className="absolute inset-0 opacity-[0.02] pointer-events-none"
      style={{ backgroundImage: "radial-gradient(#000 2px, transparent 2px)", backgroundSize: "32px 32px" }}
    />
    <div className="grain-overlay absolute inset-0 pointer-events-none" />

    <div className="container relative z-10 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <p className="inline-block px-4 py-1 border-2 border-primary/20 rounded-full text-xs font-mono tracking-widest uppercase text-primary mb-6 bg-card retro-shadow">
            Festival Schedule
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-black text-foreground leading-[1] uppercase tracking-tight">
            Event <span className="text-gradient font-serif italic lowercase font-light">Timeline.</span>
          </h2>
        </div>
        <div className="max-w-sm text-muted-foreground font-retro text-sm leading-relaxed border-l-2 border-primary/30 pl-4 hidden md:block">
          A completely detailed breakdown of our event activities, mapped out cleanly for your convenience.
        </div>
      </motion.div>

      {/* The Timeline List */}
      <div className="flex flex-col">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative flex flex-col md:flex-row border-t-2 border-border/50 py-10 md:py-16 hover:bg-card/40 transition-colors duration-500"
          >
            {/* Left side (Date & Number) */}
            <div className="md:w-5/12 flex-shrink-0 flex flex-col justify-between pr-8 md:pr-16 md:border-r-2 border-border/20 mb-8 md:mb-0">
              <div className="flex items-start gap-4 md:gap-6">
                <span className="font-serif italic text-6xl md:text-7xl lg:text-8xl text-primary/80 font-light leading-none -mt-2 group-hover:text-primary transition-colors">
                  0{i + 1}.
                </span>
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="font-mono text-sm text-foreground/60 uppercase tracking-widest">
                    {s.theme}
                  </p>
                </div>
              </div>

              <div className="hidden md:block mt-12 text-primary/10 group-hover:text-primary/40 transition-colors duration-500 transform group-hover:scale-110 group-hover:rotate-12 w-fit">
                <HugeiconsIcon icon={s.icon} size={100} strokeWidth={1} />
              </div>
            </div>

            {/* Right side (Items) */}
            <div className="md:w-7/12 md:pl-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-0.5 w-8 bg-primary/40" />
                <h4 className="font-retro text-sm uppercase tracking-widest text-primary">
                  {s.subtitle}
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {s.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + (idx * 0.1) }}
                    className="flex items-center gap-5 group/item"
                  >
                    <div className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center bg-background group-hover/item:bg-primary group-hover/item:border-primary transition-colors shrink-0 retro-shadow">
                      <span className="font-mono text-xs font-bold text-foreground/50 group-hover/item:text-primary-foreground transition-colors">
                        {idx + 1}
                      </span>
                    </div>
                    <span className="text-xl md:text-2xl font-display font-bold leading-tight text-foreground/90 group-hover/item:text-primary transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile background icon watermark */}
            <div className="absolute right-4 bottom-4 md:hidden text-primary/5 pointer-events-none transform -rotate-12">
              <HugeiconsIcon icon={s.icon} size={120} strokeWidth={1} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectionsDetail;
