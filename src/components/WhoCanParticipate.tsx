import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserMultipleIcon, Mortarboard01Icon, StudentIcon } from "@hugeicons/core-free-icons";

const participants = [
  { icon: Mortarboard01Icon, title: "All Students", tag: "Undergraduate", desc: "Open to students from every department across UAP." },
  { icon: StudentIcon, title: "CSE Alumni", tag: "Graduate", desc: "Ex-students of the CSE Department." },
  { icon: UserMultipleIcon, title: "CSE Faculty", tag: "Staff & Faculty", desc: "Faculty members of the CSE Department." },
];

const WhoCanParticipate = () => (
  <section className="relative py-24 overflow-hidden bg-background">
    <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
    <div className="container relative z-10 px-4">
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side: Typography & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            <span className="text-sm tracking-[0.2em] font-mono text-primary uppercase">Call For Entries</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.1] text-foreground">
            Who Can <br className="hidden md:block" />
            <span className="text-gradient italic font-serif font-light">Participate?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 font-retro leading-relaxed">
            The Viewfinder 8 Exhibition is completely open to the UAP community. Whether you're currently studying, already graduated, or teaching — if you have a story to tell through your lens, we want to see it.
          </p>
        </motion.div>

        {/* Right Side: Vintage Photo Lab Submission Envelope */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 3 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-1 w-full max-w-lg mx-auto group"
        >
          {/* The Envelope Card */}
          <div className="relative bg-[#f4ebd0] border border-[#daba8b] shadow-2xl p-6 sm:p-10 rounded-sm overflow-hidden retro-shadow transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-2 cursor-default">
            
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }} />

            {/* Vintage Kodak/Airmail Style Border Line */}
            <div className="absolute top-0 left-0 right-0 h-[6px] flex">
              {Array.from({length: 20}).map((_, i) => (
                <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-[#c23b22]' : 'bg-[#eaddc5]'}`} />
              ))}
            </div>

            {/* Envelope Flap Fold Line */}
            <div className="absolute top-6 left-0 right-0 h-px border-t-2 border-dashed border-black/10" />

            {/* Header */}
            <div className="mt-6 border-b-2 border-black/10 pb-5 mb-8 text-center relative z-10">
              <div className="absolute -top-10 -right-6 md:-right-10 w-20 h-20 border-[3px] border-[#c23b22]/40 rounded-full flex flex-col items-center justify-center transform rotate-12 bg-[#f4ebd0]">
                 <span className="text-[#c23b22]/60 font-display font-bold text-lg uppercase tracking-widest leading-none">Yes</span>
                 <span className="text-[#c23b22]/50 font-mono text-[8px] uppercase tracking-widest mt-1">Approved</span>
              </div>
              <h3 className="font-mono font-bold text-xl sm:text-2xl text-zinc-900 uppercase tracking-widest">
                Photographic Submission
              </h3>
              <p className="font-retro text-[11px] tracking-[0.2em] text-zinc-600 mt-2 uppercase">Official Entry Eligibility Form</p>
            </div>

            {/* Participant Types */}
            <div className="space-y-6 relative z-10">
              {participants.map((p, i) => (
                <div key={i} className="flex items-start gap-4 sm:gap-6">
                  {/* Stamped Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 border-[3px] border-zinc-800 rounded-full flex items-center justify-center text-zinc-800 shadow-[3px_3px_0px_rgba(0,0,0,0.8)] bg-[#f4ebd0] transform transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 100}ms` }}>
                       <HugeiconsIcon icon={p.icon} size={22} strokeWidth={2.5} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                      <h4 className="font-display font-black text-zinc-900 text-lg sm:text-xl uppercase tracking-wider">{p.title}</h4>
                      <span className="inline-block bg-zinc-200/80 text-zinc-600 text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm border border-zinc-300/50">
                        {p.tag}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-700 leading-snug font-serif italic">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Form Details */}
            <div className="mt-10 pt-5 border-t-2 border-black/10 flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-zinc-500 uppercase tracking-widest relative z-10">
              <span className="bg-white/50 px-2 py-1 border border-black/5 rounded">Ref: FPC/VF8-2026</span>
              <span className="bg-white/50 px-2 py-1 border border-black/5 rounded flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500/70" />
                Auth: Open
              </span>
            </div>

          </div>
        </motion.div>
        
      </div>
    </div>
  </section>
);

export default WhoCanParticipate;
