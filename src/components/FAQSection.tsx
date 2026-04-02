import { motion } from "framer-motion";
import { HugeiconsIcon } from '@hugeicons/react';
import { InformationDiamondIcon } from '@hugeicons/core-free-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const faqs = [
  {
    q: "Who can participate in The ViewFinder 8?",
    a: "Students from all departments of UAP, as well as ex-students and faculty members of the CSE Department.",
  },
  {
    q: "How many photos can I submit?",
    a: "Each participant can submit a maximum of 9 photos — 3 per section (Single Photos, Mobiography, UAP Diary).",
  },
  {
    q: "Do I need to pay for submitting photos?",
    a: "No! Submission is completely FREE. You only pay the registration fee (BDT 300/- per photo) if your photograph is selected for the exhibition.",
  },
  {
    q: "What format should my photos be in?",
    a: "Photos must be in high-resolution .jpg format (max 30 megapixels). RAW and TIFF images are not accepted. Photos must include camera-recorded metadata.",
  },
  {
    q: "Can I submit previously exhibited photos?",
    a: "No. Previously submitted photos to any other exhibition are not allowed, and previously exhibited photos are strongly discouraged.",
  },
  {
    q: "Are edited/manipulated photos allowed?",
    a: "Manipulation is allowed only for conceptual photos. Over-processed photos will not be accepted. No borders, watermarks, signatures, logos, or wedding photos.",
  },
  {
    q: "What do selected participants receive?",
    a: "Selected participants will receive a certificate, T-shirt, refreshments, and their framed photos. Top performers receive Champion and Runner-Up crests.",
  },
  {
    q: "Can FPC use my submitted photos?",
    a: "Yes. Submitted photos may be used by FPC for promotional purposes. FPC also reserves the right to alter any selected images.",
  },
  {
    q: "What happens if someone tampers with the process?",
    a: "FPC reserves the right to disqualify any individual who tampers with the process and to cancel, terminate, or modify the exhibition if necessary.",
  },
];

const FAQSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="grain-overlay absolute inset-0" />
    <div className="dot-pattern absolute inset-0 opacity-20" />
    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="container relative z-10 px-4">
      <motion.div {...fadeIn} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-primary flex items-center justify-center">
            <HugeiconsIcon icon={InformationDiamondIcon} size={16} color="currentColor" strokeWidth={2} />
          </span>
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium font-retro">
            Questions?
          </p>
        </div>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="border-2 border-border rounded-lg px-6 bg-card retro-shadow data-[state=open]:border-primary/40 transition-colors"
              >
                <AccordionTrigger className="text-left text-sm font-display font-semibold text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                  <span className="flex items-start gap-3">
                    <span className="font-retro text-primary/60 text-xs mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
