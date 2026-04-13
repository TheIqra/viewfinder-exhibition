import { motion } from "framer-motion";
import { Award, Shirt, Frame, Coffee, Lightbulb, Search, Users, Banknote, ShieldAlert, ListChecks, ArrowRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const perks = [
  { icon: Award, label: "Certificate" },
  { icon: Shirt, label: "T-shirt" },
  { icon: Frame, label: "Framed Photo" },
  { icon: Coffee, label: "Refreshments" },
];

const steps = [
  "Analyze the provided portion of the photograph",
  "Identify and locate the exact place where it was taken",
  "Reach the location within the given time frame",
  "Capture a photograph from the same angle & perspective",
  "Recreate the missing portion so it aligns seamlessly",
];

const rules = [
  "All teams must complete within the specified time limit",
  "No unfair means or direct external assistance",
  "Submitted photograph must be original and unedited",
  "Digital manipulation or alteration → disqualification",
  "Follow all safety and event guidelines during the hunt",
  "The judges' decision is final and binding",
];

const RegistrationSection = () => (
  <section id="registration" className="relative py-24 overflow-hidden">
    <div className="grain-overlay absolute inset-0" />
    <div className="dot-pattern absolute inset-0 opacity-20" />
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container relative z-10 px-4">
      <motion.div {...fadeIn} className="text-center mb-16">
        <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3 font-retro">Join Us</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Registration <span className="text-gradient">Details</span>
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-16">
        {/* ── Photo Exhibition Registration ─────────────────────────── */}
        <div>
          <motion.p
            {...fadeIn}
            className="inline-block px-4 py-1 border-2 border-primary/20 rounded-full text-xs font-mono tracking-widest uppercase text-primary mb-8 bg-card retro-shadow"
          >
            📸 Photo Exhibition
          </motion.p>

          {/* Fee card */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="relative p-8 md:p-12 rounded-sm bg-card border-2 border-border overflow-hidden mb-10 retro-shadow"
          >
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="relative z-10 text-center">
              <p className="text-muted-foreground text-sm mb-2 uppercase tracking-wider font-retro">Registration Fee</p>
              <p className="text-5xl md:text-6xl font-display font-black text-gradient mb-2">BDT 200/-</p>
              <p className="text-muted-foreground text-sm">Per Selected Photograph</p>
              <div className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-primary/10 border-2 border-primary/20">
                <Lightbulb className="w-4 h-4 text-primary flex-shrink-0" />
                <p className="text-primary text-sm font-semibold">
                  Pay only when your photo is selected — submission is FREE!
                </p>
              </div>
            </div>
          </motion.div>

          {/* Perks */}
          <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="text-center">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">Selected Participants Receive</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {perks.map((p, i) => (
                <motion.div
                  key={i}
                  className="p-5 rounded-sm bg-secondary border-2 border-border retro-shadow text-center"
                  whileHover={{ y: -4, rotate: -2, scale: 1.03 }}
                >
                  <p.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium text-foreground font-retro">{p.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground px-2">Also</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* ── Photo Hunt Registration ───────────────────────────────── */}
        <div>
          <motion.p
            {...fadeIn}
            className="inline-block px-4 py-1 border-2 border-primary/20 rounded-full text-xs font-mono tracking-widest uppercase text-primary mb-8 bg-card retro-shadow"
          >
            🎞️ Photo Hunt
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border-2 border-border overflow-hidden retro-shadow"
          >
            {/* Header band */}
            <div className="bg-foreground text-primary-foreground px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <Search size={20} color="var(--primary)" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-black uppercase tracking-tight">Photo Hunt 📸🎞️</h3>
                  <p className="text-primary-foreground/50 text-xs font-mono uppercase tracking-widest mt-0.5">
                    ViewFinder Season 8 · Competition
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted border border-border text-muted-foreground text-xs font-mono uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                Registration Closed
              </span>
            </div>

            <div className="bg-card p-6 md:p-10 grid md:grid-cols-2 gap-8">
              {/* Left: Format + Fee */}
              <div className="space-y-6">
                {/* Competition Format */}
                <div>
                  <h4 className="font-display font-bold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Users size={18} color="var(--primary)" strokeWidth={2} />
                    Competition Format
                  </h4>
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 px-4 py-3 rounded-sm bg-secondary border border-border">
                      <span className="text-primary font-mono text-xs uppercase tracking-wider font-bold">Teams</span>
                      <span className="text-foreground text-sm">2 members per team</span>
                    </div>
                    <div className="flex items-start gap-3 px-4 py-3 rounded-sm bg-secondary border border-border">
                      <span className="text-primary font-mono text-xs uppercase tracking-wider font-bold shrink-0 mt-0.5">Format</span>
                      <span className="text-foreground text-sm leading-relaxed">
                        Each team receives a <strong>torn photograph</strong> — the remaining part links to a real location. Find it. Recreate it.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Fee & Payment */}
                <div>
                  <h4 className="font-display font-bold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                    <Banknote size={18} color="var(--primary)" strokeWidth={2} />
                    Fee &amp; Payment
                  </h4>
                  <div className="relative p-5 rounded-sm bg-foreground text-primary-foreground overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-[0.08] pointer-events-none"
                      style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "10px 10px" }}
                    />
                    <div className="relative z-10">
                      <p className="text-3xl font-display font-black text-gradient mb-1">BDT 100/-</p>
                      <p className="text-primary-foreground/60 text-xs font-mono uppercase tracking-wider mb-4">Per Team</p>
                      <div className="border-t border-primary-foreground/20 pt-4 space-y-1">
                        <p className="text-xs text-primary-foreground/50 uppercase tracking-widest font-mono">Pay via bKash</p>
                        <p className="text-lg font-display font-bold text-primary tracking-wider">01319345357</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Steps */}
                <div>
                  <h4 className="font-display font-bold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                    <ListChecks size={18} color="var(--primary)" strokeWidth={2} />
                    Teams Are Required To
                  </h4>
                  <ol className="space-y-2.5">
                    {steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] font-bold flex items-center justify-center font-mono">
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Right: Awards + Rules + CTA */}
              <div className="space-y-6">
                {/* Awards */}
                <div className="p-5 rounded-sm bg-primary/10 border-2 border-primary/30">
                  <h4 className="font-display font-bold text-foreground uppercase tracking-wide mb-3">🏆 Awards</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The <strong className="text-foreground">fastest and most accurate team</strong> will be declared the winner.
                  </p>
                </div>

                {/* Rules */}
                <div>
                  <h4 className="font-display font-bold text-foreground uppercase tracking-wide mb-4 flex items-center gap-2">
                    <ShieldAlert size={18} color="var(--primary)" strokeWidth={2} />
                    Rules &amp; Guidelines
                  </h4>
                  <ul className="space-y-2.5">
                    {rules.map((rule, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        <span className="text-muted-foreground text-sm leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                    ⚠️ Registration for Photo Hunt is now closed
                  </p>
                  <div
                    className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-secondary text-muted-foreground font-display font-bold text-lg rounded-sm border-2 border-border cursor-not-allowed opacity-80"
                  >
                    <Search size={20} strokeWidth={2.5} />
                    Registration Closed
                  </div>
                  <p className="text-center text-xs text-muted-foreground mt-3 font-retro italic">
                    Get ready for the challenge — see you at the event! 📸
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default RegistrationSection;
