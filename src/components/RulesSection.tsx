import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import GeometricPattern from "./GeometricPattern";

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
  "Must include camera-recorded metadata.",
  "Must be original — no copyright infringement.",
  "No inappropriate, indecent, or offensive content.",
  "Previously exhibited photos are not allowed.",
];

const RulesSection = () => (
  <section className="relative py-24 bg-secondary/50 overflow-hidden">
    <GeometricPattern variant="dense" />
    <div className="grain-overlay absolute inset-0" />
    <div className="container relative z-10 px-4">
      <motion.div {...fadeIn} className="text-center mb-16">
        <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3 font-retro">Guidelines</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Submission <span className="text-gradient">Rules</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-3">
        {rules.map((rule, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex items-start gap-4 p-4 rounded-sm bg-card border-2 border-border hover:border-primary/20 transition-colors"
          >
            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground leading-relaxed">{rule}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default RulesSection;
