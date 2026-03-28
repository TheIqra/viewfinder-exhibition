import { motion } from "framer-motion";
import { Award, Shirt, Frame, Coffee, Trophy, Lightbulb } from "lucide-react";

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

const RegistrationSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="grain-overlay absolute inset-0" />
    <div className="container relative z-10 px-4">
      <motion.div {...fadeIn} className="text-center mb-16">
        <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3 font-retro">Join Us</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Registration <span className="text-gradient">Details</span>
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Fee card */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="relative p-8 md:p-12 rounded-sm bg-card border-2 border-border overflow-hidden mb-10 retro-shadow"
        >
          <div className="absolute inset-0 dot-pattern opacity-20" />
          <div className="relative z-10 text-center">
            <p className="text-muted-foreground text-sm mb-2 uppercase tracking-wider font-retro">Registration Fee</p>
            <p className="text-5xl md:text-6xl font-display font-black text-gradient mb-2">BDT 300/-</p>
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
        <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="text-center mb-10">
          <h3 className="text-xl font-display font-bold text-foreground mb-6">Selected Participants Receive</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                className="p-5 rounded-sm bg-secondary border-2 border-border retro-shadow"
                whileHover={{ y: -4, rotate: -2, scale: 1.03 }}
              >
                <p.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground font-retro">{p.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div {...fadeIn} transition={{ delay: 0.5 }} className="p-8 rounded-sm bg-primary/5 border-2 border-primary/10 text-center retro-shadow">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-display font-bold text-foreground">Awards</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto text-sm text-muted-foreground">
            <div className="p-4 rounded-sm bg-card border-2 border-border">
              <p className="font-semibold text-foreground mb-1">Section 1 & 2</p>
              <p>Top 3 — Champion & Runner-Up Crests</p>
            </div>
            <div className="p-4 rounded-sm bg-card border-2 border-border">
              <p className="font-semibold text-foreground mb-1">Section 3</p>
              <p>Top 2 — Champion & Runner-Up Crests</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default RegistrationSection;
