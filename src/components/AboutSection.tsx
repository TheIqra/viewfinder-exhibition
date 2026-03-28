import { motion } from "framer-motion";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const AboutSection = () => (
  <section id="details" className="relative py-24 overflow-hidden">
    <div className="dot-pattern absolute inset-0 opacity-30" />
    <div className="container relative z-10 px-4">
      <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">About the Event</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          Showcase Your <span className="text-gradient">Vision</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Film & Photography Club (FPC) invites all photography lovers to showcase their talent. 
          Students from all departments, ex-students & faculty members from CSE are cordially invited.
        </p>
      </motion.div>

      {/* Photo grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group overflow-hidden rounded-2xl aspect-[4/5]"
        >
          <img src={promo1} alt="Photography by Jannatul Ferdous Shormi" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-primary-foreground text-sm font-medium">Jannatul Ferdous Shormi</p>
            <p className="text-primary-foreground/70 text-xs">Previous Exhibition Entry</p>
          </div>
        </motion.div>
        <motion.div
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative group overflow-hidden rounded-2xl aspect-[4/5]"
        >
          <img src={promo2} alt="Photography by Mahir Rahman" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-primary-foreground text-sm font-medium">Mahir Rahman</p>
            <p className="text-primary-foreground/70 text-xs">Previous Exhibition Entry</p>
          </div>
        </motion.div>
      </div>

      {/* Who can participate */}
      <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.5 }} className="mt-20 max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
          Who Can <span className="text-gradient">Participate</span>?
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: "🎓", title: "All Students", desc: "Students from all departments of UAP" },
            { icon: "👨‍🏫", title: "CSE Faculty & Alumni", desc: "Ex-students & faculty of CSE Department" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              whileHover={{ y: -4 }}
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h4 className="font-display font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
