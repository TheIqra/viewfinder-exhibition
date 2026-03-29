import { motion } from "framer-motion";
import { Upload, Palette, MapPin } from "lucide-react";
import GeometricPattern from "./GeometricPattern";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const timeline = [
  { date: "10th April", label: "Submission Deadline", icon: Upload, accent: true },
  { date: "20-21 April", label: "Exhibition Dates", icon: Palette, accent: false },
  { date: "Void Space", label: "Venue — CSE Dept.", icon: MapPin, accent: false },
];

const ScheduleSection = () => (
  <section className="relative py-24 bg-secondary/50 overflow-hidden">
    <GeometricPattern variant="sparse" />
    <div className="grain-overlay absolute inset-0" />
    <div className="container relative z-10 px-4">
      <motion.div {...fadeIn} className="text-center mb-16">
        <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3 font-retro">Timeline</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Submission <span className="text-gradient">Schedule</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            {...fadeIn}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative p-8 rounded-sm text-center transition-all retro-shadow border-2 ${
              item.accent ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
            }`}
            whileHover={{ y: -6, rotate: -1 }}
          >
            <item.icon className={`w-10 h-10 mx-auto mb-4 ${item.accent ? "text-primary-foreground" : "text-primary"}`} />
            <p className={`text-2xl font-display font-bold mb-1 ${item.accent ? "" : "text-foreground"}`}>
              {item.date}
            </p>
            <p className={`text-sm font-retro ${item.accent ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ScheduleSection;
