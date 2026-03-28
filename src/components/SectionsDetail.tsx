import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const sections = [
  {
    num: "01",
    title: "Single Photos",
    subtitle: "DSLR / SLR",
    theme: "Open Theme",
    desc: "Photos must be taken with a DSLR or SLR camera.",
    icon: "📷",
  },
  {
    num: "02",
    title: "Mobiography",
    subtitle: "Smartphone / Tablet",
    theme: "Open Theme",
    desc: "Photos must be taken with a smartphone, tablet, or pad.",
    icon: "📱",
  },
  {
    num: "03",
    title: "UAP Diary",
    subtitle: "Any Device",
    theme: "Open Theme",
    desc: "Photos must be related to UAP campus life.",
    icon: "🏫",
  },
];

const SectionsDetail = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="container relative z-10 px-4">
      <motion.div {...fadeIn} className="text-center mb-16">
        <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Categories</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Photography <span className="text-gradient">Sections</span>
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {sections.map((s, i) => (
          <motion.div
            key={i}
            {...fadeIn}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all overflow-hidden"
            whileHover={{ y: -6 }}
          >
            <div className="absolute top-4 right-4 text-6xl font-display font-black text-primary/5 group-hover:text-primary/10 transition-colors">
              {s.num}
            </div>
            <span className="text-4xl mb-4 block">{s.icon}</span>
            <h3 className="text-xl font-display font-bold text-foreground mb-1">{s.title}</h3>
            <p className="text-sm text-primary font-medium mb-3">{s.subtitle}</p>
            <div className="inline-block px-3 py-1 rounded-full bg-crimson-light text-primary text-xs font-medium mb-3">
              {s.theme}
            </div>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SectionsDetail;
