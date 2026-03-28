import { motion } from "framer-motion";
import { Scale, ShieldCheck } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const terms = [
  "Participants must ensure the submitted photo is their original work and does not infringe on any copyrights.",
  "Previously exhibited photos are strongly discouraged.",
  "FPC reserves the right to alter any selected images.",
  "Submissions must not contain any offensive or inappropriate content.",
  "FPC has the right to verify the authenticity of any photograph.",
  "Submitted photos may be used by FPC for promotional purposes.",
];

const TermsSection = () => (
  <section className="relative py-24 bg-secondary/50 overflow-hidden">
    <div className="grain-overlay absolute inset-0" />
    <div className="container relative z-10 px-4">
      <motion.div {...fadeIn} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <Scale className="w-4 h-4 text-primary" />
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium font-retro">Legal</p>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Terms & <span className="text-gradient">Conditions</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {terms.map((term, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-4 p-4"
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-sm bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center font-retro retro-shadow">
              {i + 1}
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed pt-1">{term}</p>
          </motion.div>
        ))}

        <motion.div
          {...fadeIn}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 rounded-sm bg-primary/5 border-2 border-primary/10 retro-shadow"
        >
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-5 h-5 text-primary" />
            <h4 className="font-display font-bold text-foreground text-sm">Right to Modify</h4>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            If unforeseen circumstances arise that affect the administration or fairness of the event, FPC reserves
            the right to disqualify any individual who tampers with the process and to cancel, terminate, or modify
            the exhibition if necessary.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default TermsSection;
