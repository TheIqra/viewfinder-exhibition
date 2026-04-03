import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "8801319345357";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi! I have a query about The ViewFinder 8 — Photography Exhibition by FPC, CSE-UAP."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-end gap-3 group">
      {/* Tooltip bubble (CSS driven to prevent hover flickering) */}
      <div className="mb-1 bg-card border border-border rounded-lg px-4 py-3 shadow-lg max-w-[200px] text-right opacity-0 translate-x-4 scale-95 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 transition-all duration-300 ease-out origin-right">
        <p className="text-xs font-semibold text-foreground leading-snug">Got a question?</p>
        <p className="text-[10px] text-muted-foreground font-retro mt-1">Tap to chat on WhatsApp</p>
      </div>

      {/* Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.93 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-xl bg-[#25D366]"
      >
        {/* Pulse ring using smooth CSS ping instead of snap keyframes */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 pointer-events-none -z-10"
          style={{ animationDuration: "2s" }}
        />
        
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 relative z-10"
          fill="white"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.61 1.832 6.504L4 29l7.695-1.813A12.93 12.93 0 0 0 16 28c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917a10.896 10.896 0 0 1-5.514-1.498l-.394-.234-4.568 1.077 1.1-4.448-.257-.41A10.863 10.863 0 0 1 5.083 15C5.083 8.97 9.97 4.083 16 4.083S26.917 8.97 26.917 15 22.03 25.917 16 25.917zm5.98-8.149c-.327-.163-1.934-.953-2.233-1.063-.3-.109-.518-.163-.737.164-.218.327-.845 1.063-1.036 1.281-.191.218-.382.245-.71.082-.327-.164-1.38-.509-2.628-1.62-.972-.868-1.628-1.94-1.819-2.268-.191-.327-.02-.503.144-.666.147-.146.327-.382.49-.572.164-.191.218-.327.327-.545.109-.218.055-.41-.027-.572-.082-.163-.737-1.779-1.009-2.436-.267-.64-.537-.553-.737-.563l-.627-.011c-.218 0-.572.082-.872.41s-1.145 1.117-1.145 2.724 1.172 3.16 1.336 3.378c.163.218 2.306 3.523 5.59 4.942.782.336 1.391.537 1.867.687.785.25 1.5.215 2.065.13.63-.094 1.934-.79 2.208-1.553.272-.763.272-1.418.19-1.553-.08-.136-.298-.218-.627-.382z" />
        </svg>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
