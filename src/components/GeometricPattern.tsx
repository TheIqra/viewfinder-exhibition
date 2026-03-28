const GeometricPattern = ({ className = "", variant = "default" }: { className?: string; variant?: "default" | "dense" | "sparse" }) => {
  const fill = "hsl(350, 72%, 45%)";
  const opacities = variant === "dense" ? [0.15, 0.1, 0.08] : variant === "sparse" ? [0.06, 0.04, 0.03] : [0.1, 0.07, 0.05];

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`geo-${variant}`} x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="8" fill={fill} opacity={opacities[0]} />
            <rect x="50" y="5" width="15" height="15" fill={fill} opacity={opacities[1]} rx="2" />
            <polygon points="40,60 55,75 25,75" fill={fill} opacity={opacities[2]} />
            <circle cx="70" cy="55" r="5" fill={fill} opacity={opacities[1]} />
            <rect x="5" y="50" width="10" height="10" fill={fill} opacity={opacities[2]} transform="rotate(45 10 55)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#geo-${variant})`} />
      </svg>
    </div>
  );
};

export default GeometricPattern;
