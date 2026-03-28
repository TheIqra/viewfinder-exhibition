import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import promo3 from "@/assets/promo-3.jpg";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const photos = [
  { src: promo1, name: "Jannatul Ferdous Shormi", label: "Previous Exhibition" },
  { src: promo2, name: "Mahir Rahman", label: "The Stallion" },
  { src: promo3, name: "Nazmul Yeakin Iqra", label: "Urban Motion" },
];

const AboutSection = () => (
  <section id="details" className="relative py-24 overflow-hidden">
    <div className="dot-pattern absolute inset-0 opacity-30" />
    <div className="grain-overlay absolute inset-0" />
    <div className="container relative z-10 px-4">
      <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3 font-retro">About the Event</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
          Showcase Your <span className="text-gradient">Vision</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The Film & Photography Club (FPC) invites all photography lovers to showcase their talent.
          Students from all departments, ex-students & faculty members from CSE are cordially invited.
        </p>
      </motion.div>

      {/* Photo grid - 3 images with retro frames */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.15 * i }}
            className="relative group overflow-hidden film-border aspect-[3/4]"
            whileHover={{ rotate: i === 1 ? -1 : 1, scale: 1.02 }}
          >
            <img
              src={photo.src}
              alt={`Photography by ${photo.name}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[0.15]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-foreground/10" />
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary-foreground/20">
              <p className="text-primary-foreground text-sm font-retro">{photo.name}</p>
              <p className="text-primary-foreground/60 text-xs font-retro">{photo.label}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Who can participate */}
      <motion.div {...fadeIn} transition={{ duration: 0.6, delay: 0.5 }} className="mt-20 max-w-2xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8">
          Who Can <span className="text-gradient">Participate</span>?
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: GraduationCap, title: "All Students", desc: "Students from all departments of UAP" },
            { icon: Users, title: "CSE Faculty & Alumni", desc: "Ex-students & faculty of CSE Department" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-sm bg-card border-2 border-border hover:border-primary/30 transition-all retro-shadow"
              whileHover={{ y: -4, x: -2 }}
            >
              <item.icon className="w-8 h-8 text-primary mb-3" />
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
