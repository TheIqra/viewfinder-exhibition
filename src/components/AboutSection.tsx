import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const photos = [
  { src: "/gallery/21201128_Cat-3_photo-1_Yeakin_Iqra - Nazmul Yeakin Iqra.jpg", name: "Nazmul Yeakin Iqra", label: "UAP Diary" },
  { src: "/gallery/22101074_Cat-1_photo-1 - Sajedul Islam Emon.jpg", name: "Sajedul Islam Emon", label: "DSLR Photography" },
  { src: "/gallery/22101203_Cat-2_photo-2 - Mohammad Nazmul Hossain Nadim.JPG", name: "Mohammad Nazmul Hossain Nadim", label: "Mobile Photography" },
  { src: "/gallery/22103004_Rider Horse_photo-2 - Jamil Hossain.jpg", name: "Jamil Hossain", label: "DSLR Photography" },
  { src: "/gallery/22201034_Cat-3_Photo-2 - Julias Uddin Khan.jpg", name: "Julias Uddin Khan", label: "UAP Diary" },
  { src: "/gallery/22201062_cat-3_photo-1 - Tasnim Zaman.jpg", name: "Tasnim Zaman", label: "UAP Diary" },
  { src: "/gallery/22201065_cat-1_photo-1- Afiatun Jannat.jpg", name: "Afiatun Jannat", label: "DSLR Photography" },
  { src: "/gallery/baivab_Cat-1_photo-1 - Baivab Das.jpg", name: "Baivab Das", label: "DSLR Photography" },
];

const AboutSection = () => (
  <section id="details" className="relative py-24 overflow-hidden">
    <div className="grain-overlay absolute inset-0" />
    <div className="dot-pattern absolute inset-0 opacity-20" />
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

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

      {/* Seamless Photo Carousel */}
      <div className="relative overflow-hidden py-8 mt-4 w-[calc(100%+2rem)] -mx-4 md:w-full md:mx-0">
        {/* Fade edges on desktop */}
        <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-4 md:gap-6 py-4">
          {[...photos, ...photos].map((photo, i) => (
            <motion.div
              key={i}
              className="relative group overflow-hidden film-border w-[85vw] sm:w-[300px] md:w-[320px] aspect-[4/5] flex-shrink-0 cursor-pointer retro-shadow"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={photo.src}
                alt={`Photography by ${photo.name}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 sepia-[0.15]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/5 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Unconventional Element: Viewfinder Crosshair on Hover */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-primary-foreground/30" />
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-primary-foreground/30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] border border-primary-foreground/50 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse" />
                </div>
                {/* Corner markers */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary-foreground/50" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary-foreground/50" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary-foreground/50" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary-foreground/50" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-primary-foreground/20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground text-sm font-retro tracking-wider mb-1 drop-shadow-md">{photo.name}</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary/80 animate-pulse"></span>
                  <p className="text-primary-foreground/70 text-xs font-mono uppercase tracking-widest">{photo.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
