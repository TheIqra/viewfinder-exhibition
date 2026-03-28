import { motion } from "framer-motion";

const shapes = [
  { type: "circle", size: 60, x: "5%", y: "10%", delay: 0 },
  { type: "triangle", size: 40, x: "90%", y: "15%", delay: 0.5 },
  { type: "square", size: 35, x: "15%", y: "80%", delay: 1 },
  { type: "diamond", size: 45, x: "85%", y: "70%", delay: 1.5 },
  { type: "circle", size: 25, x: "50%", y: "5%", delay: 0.8 },
  { type: "halfCircle", size: 50, x: "75%", y: "45%", delay: 0.3 },
  { type: "cross", size: 30, x: "10%", y: "45%", delay: 1.2 },
  { type: "dots", size: 40, x: "92%", y: "90%", delay: 0.7 },
];

const ShapeRenderer = ({ type, size }: { type: string; size: number }) => {
  const fill = "hsl(350, 72%, 45%)";
  const fillLight = "hsl(350, 72%, 85%)";

  switch (type) {
    case "circle":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill={fill} opacity="0.15" />
        </svg>
      );
    case "triangle":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill={fill} opacity="0.12" />
        </svg>
      );
    case "square":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill={fill} opacity="0.1" rx="4" />
        </svg>
      );
    case "diamond":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <polygon points="50,5 95,50 50,95 5,50" fill={fillLight} opacity="0.2" />
        </svg>
      );
    case "halfCircle":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <path d="M 10 50 A 40 40 0 0 1 90 50" fill={fill} opacity="0.1" />
        </svg>
      );
    case "cross":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          <rect x="40" y="10" width="20" height="80" fill={fill} opacity="0.1" rx="4" />
          <rect x="10" y="40" width="80" height="20" fill={fill} opacity="0.1" rx="4" />
        </svg>
      );
    case "dots":
      return (
        <svg width={size} height={size} viewBox="0 0 100 100">
          {[0, 1, 2].map((r) =>
            [0, 1, 2].map((c) => (
              <circle key={`${r}-${c}`} cx={20 + c * 30} cy={20 + r * 30} r="6" fill={fill} opacity="0.12" />
            ))
          )}
        </svg>
      );
    default:
      return null;
  }
};

const MagicShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {shapes.map((s, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{ left: s.x, top: s.y }}
        animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <ShapeRenderer type={s.type} size={s.size} />
      </motion.div>
    ))}
  </div>
);

export default MagicShapes;
