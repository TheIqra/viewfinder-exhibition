import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const rules = [
  "Maximum 9 photos per participant (3 per section).",
  "Rename: ID_Category-Number_Photo-Number (e.g., 19201120_Cat-1_photo-1).",
  "Both color and black-and-white accepted.",
  "No borders, watermarks, signatures, logos, or wedding photos.",
  "Over-processed photos will not be accepted.",
  "Manipulation allowed only for conceptual photos.",
  "High-resolution .jpg format (max 30MP). No RAW or TIFF.",
  "Must be original — no copyright infringement.",
  "No inappropriate, indecent, or offensive content.",
  "Previously exhibited photos are not allowed.",
];

const RulesSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="grain-overlay absolute inset-0" />
    <div className="dot-pattern absolute inset-0 opacity-20" />
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container relative z-10 px-4">
      <motion.div {...fadeIn} className="text-center mb-16">
        <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3 font-retro">Guidelines</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Submission <span className="text-gradient">Rules</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
          Please read all guidelines carefully before submitting your work.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4">
        {rules.map((rule, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            whileHover={{ x: 4 }}
            className="group flex items-start gap-4 p-5 rounded-sm bg-card border border-border border-l-[3px] border-l-primary/40 hover:border-l-primary hover:shadow-[4px_4px_0px_hsl(var(--primary)/0.15)] transition-all duration-300 retro-shadow"
          >
            <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
            </div>
            <p className="text-sm text-foreground leading-relaxed">{rule}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RulesSection;
