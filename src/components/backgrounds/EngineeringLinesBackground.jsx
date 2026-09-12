import { motion } from "framer-motion";

const EngineeringLinesBackground = ({
  className = "",
}) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        fill="none"
      >
        {/* Main Engineering Paths */}

        <path
          d="
            M-80 180
            H280
            V380
            H620
            V180
            H980
            V470
            H1260
            V260
            H1680
          "
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1.2"
        />

        <path
          d="
            M-60 650
            H240
            V520
            H520
            V720
            H820
            V560
            H1100
            V720
            H1660
          "
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />


        {/* Nodes */}

        <circle
          cx="280"
          cy="380"
          r="4"
          fill="rgba(255,255,255,0.18)"
        />

        <circle
          cx="620"
          cy="180"
          r="4"
          fill="rgba(255,255,255,0.18)"
        />

        <circle
          cx="980"
          cy="470"
          r="4"
          fill="rgba(255,255,255,0.18)"
        />

        <circle
          cx="1260"
          cy="260"
          r="4"
          fill="rgba(255,255,255,0.18)"
        />


        {/* Orange Signal */}

        <motion.circle
          r="5"
          fill="#F28C28"
          initial={{
            offsetDistance: "0%",
          }}
          animate={{
            offsetDistance: "100%",
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            offsetPath:
              "path('M-80 180 H280 V380 H620 V180 H980 V470 H1260 V260 H1680')",
          }}
        />
      </svg>
    </div>
  );
};

export default EngineeringLinesBackground;