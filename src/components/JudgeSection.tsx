import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { Globe02Icon, Camera01Icon, StarIcon, Award01Icon } from "@hugeicons/core-free-icons";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const JudgeSection = () => (
  <section id="judge" className="relative py-24 overflow-hidden bg-foreground text-primary-foreground">
    {/* Background textures */}
    <div className="grain-overlay absolute inset-0 opacity-60" />
    <div className="dot-pattern absolute inset-0 opacity-10 invert" />
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

    {/* Decorative film strip sides */}
    <div className="hidden md:block absolute left-0 top-0 bottom-0 film-strip opacity-10 pointer-events-none" />
    <div className="hidden md:block absolute right-0 top-0 bottom-0 film-strip opacity-10 pointer-events-none" />

    <div className="container relative z-10 px-4">
      {/* Section Header */}
      <motion.div {...fadeIn} className="text-center mb-16">
        <p className="text-sm tracking-[0.25em] uppercase text-primary font-medium mb-3 font-retro">
          Film &amp; Photography Club, CSE-UAP presents
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
          Meet the{" "}
          <span className="text-gradient" style={{ WebkitTextStroke: "0px" }}>
            Official Judge
          </span>
        </h2>
        <p className="text-primary-foreground/50 font-mono text-xs tracking-[0.3em] uppercase">
          ViewFinder Season 8 — Photo Exhibition
        </p>
      </motion.div>

      {/* Judge Card */}
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-5 gap-0 film-border overflow-hidden retro-shadow"
        >
          {/* Photo Column */}
          <div className="md:col-span-2 relative group overflow-hidden min-h-[380px] md:min-h-0">
            <img
              src="/judge.png"
              alt="Akhter Hasan — Official Judge"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 sepia-[0.1]"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />

            {/* Viewfinder overlay on hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-primary/30" />
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-primary/30" />
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-primary/60" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-primary/60" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-primary/60" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-primary/60" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-primary/50 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Name tag at bottom of photo */}
            <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-primary-foreground/20">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <p className="text-primary/80 text-xs font-mono uppercase tracking-widest">Official Judge</p>
              </div>
              <p className="text-primary-foreground text-xl font-display font-bold tracking-wide drop-shadow-lg">
                Akhter Hasan
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-3 bg-foreground/95 p-8 md:p-10 flex flex-col justify-between border-l border-primary-foreground/10">
            {/* Top decorative label */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center w-9 h-9 rounded-sm bg-primary/15 border border-primary/30">
                  <HugeiconsIcon icon={Award01Icon} size={18} color="var(--primary)" strokeWidth={2} />
                </span>
                <span className="text-primary font-retro text-sm tracking-widest uppercase">
                  Bangladeshi Photographer
                </span>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-primary-foreground/75 text-base leading-relaxed mb-8">
                <p>
                  Akhter Hasan is a Bangladeshi photographer renowned for his work in{" "}
                  <span className="text-primary font-medium">travel, landscape, and storytelling photography</span>.
                  Over the years, he has documented diverse cultures, dramatic natural scenery, and authentic human
                  moments through his lens.
                </p>
                <p>
                  His extensive collection from{" "}
                  <span className="text-primary font-medium">Iceland and Norway</span> is especially notable for
                  capturing the atmosphere and beauty of the Nordic landscape.
                </p>
                <p>
                  His work is defined by a strong sense of{" "}
                  <span className="text-primary font-medium">light, composition, and emotion</span>. He believes a
                  great photograph must do more than capture a scene — it should tell a story.
                </p>
              </div>

              {/* Judging Philosophy */}
              <div className="relative pl-5 border-l-2 border-primary/50 mb-8">
                <HugeiconsIcon
                  icon={Camera01Icon}
                  size={14}
                  color="var(--primary)"
                  strokeWidth={2}
                  className="absolute -left-[9px] top-0 bg-foreground"
                />
                <p className="text-primary-foreground/60 text-sm italic leading-relaxed">
                  "A great photograph should do more than simply capture a scene — it should tell a story."
                </p>
                <p className="text-primary/70 text-xs font-mono mt-2 tracking-widest uppercase">
                  Judging Criteria: Creativity · Technical Skill · Emotional Impact
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Travel", "Landscape", "Storytelling", "Nordic", "Iceland/Norway"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono tracking-wider uppercase border border-primary/25 text-primary/70 rounded-sm bg-primary/5 hover:bg-primary/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-primary-foreground/10">
              <a
                href="https://hasanmunshi8.wixsite.com/akhter/bio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-2.5 px-5 py-3 bg-primary text-primary-foreground font-display font-semibold text-sm rounded-sm retro-shadow hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
              >
                <HugeiconsIcon icon={Globe02Icon} size={16} color="currentColor" strokeWidth={2.5} />
                Portfolio / Bio
              </a>
              <a
                href="https://500px.com/p/akhterhasan?view=photos"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-2.5 px-5 py-3 bg-transparent border border-primary/40 text-primary font-display font-semibold text-sm rounded-sm hover:bg-primary/10 transition-all"
              >
                <HugeiconsIcon icon={StarIcon} size={16} color="currentColor" strokeWidth={2.5} />
                View on 500px
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-primary-foreground/30 text-xs font-mono tracking-widest uppercase mt-6"
        >
          Honored to serve as judge · ViewFinder Season 8
        </motion.p>
      </div>
    </div>
  </section>
);

export default JudgeSection;
