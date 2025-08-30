"use client";

import { motion } from "framer-motion";
import { SPACE_THEME } from "@/config/theme";

interface SpaceStationProps {
  size?: number;
  orbitRadius?: number;
  orbitDuration?: number;
  delay?: number;
  isLeft?: boolean;
}

export const SpaceStation = ({ 
  size = 20, 
  orbitRadius = 100,
  orbitDuration = 10,
  delay = 0,
  isLeft = false,
}: SpaceStationProps) => {
  return (
    <div
      style={{
        width: orbitRadius * 2,
        height: orbitRadius * 2,
        position: "absolute",
        left: isLeft ? `-${orbitRadius}px` : "auto",
        right: isLeft ? "auto" : `-${orbitRadius}px`,
      }}
    >
      <motion.div
        style={{
          width: size,
          height: size,
          position: "absolute",
          top: "50%",
          left: "50%",
          marginLeft: -size / 2,
          marginTop: -size / 2,
        }}
        initial={{ rotate: isLeft ? -90 : 90 }}
        animate={{
          rotate: isLeft ? 270 : -270,
        }}
        transition={{
          duration: orbitDuration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "100%",
            filter: `drop-shadow(${SPACE_THEME.effects.glow} ${SPACE_THEME.colors.cosmicBlue})`,
          }}
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke={SPACE_THEME.colors.cosmicBlue}
            strokeWidth="2"
          />
          <path
            d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
            stroke={SPACE_THEME.colors.nebulaPurple}
            strokeWidth="2"
          />
          <path
            d="M12 7V2M12 22V17M2 12H7M22 12H17"
            stroke={SPACE_THEME.colors.cosmicBlue}
            strokeWidth="2"
          />
        </svg>
      </motion.div>
    </div>
  );
};
