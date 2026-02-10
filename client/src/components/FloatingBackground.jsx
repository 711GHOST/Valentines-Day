import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function FloatingBackground() {
  // 🌫 Layer 1: Tiny blurred emojis
  const layer1 = useMemo(() => {
    const symbols = ["✨", "🥰", "💜"];
    return Array.from({ length: 20 }).map((_, i) => ({
      id: `l1-${i}`,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100,
      size: Math.random() * 12 + 12,
      duration: Math.random() * 30 + 40,
      delay: Math.random() * 20,
    }));
  }, []);

  // 💖 Layer 2: Medium hearts
  const layer2 = useMemo(() => {
    const symbols = ["💖", "💌"];
    return Array.from({ length: 15 }).map((_, i) => ({
      id: `l2-${i}`,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100,
      size: Math.random() * 18 + 18,
      duration: Math.random() * 20 + 25,
      delay: Math.random() * 15,
    }));
  }, []);

  // 🌹 Layer 3: Occasional big roses
  const layer3 = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: `l3-${i}`,
      symbol: "🌹",
      left: Math.random() * 100,
      size: Math.random() * 30 + 40,
      duration: Math.random() * 40 + 50,
      delay: Math.random() * 30,
    }));
  }, []);

  const renderLayer = (items, blur = false) =>
    items.map((item) => (
      <motion.div
        key={item.id}
        initial={{ y: "110vh", opacity: 0 }}
        animate={{
          y: "-10vh",
          opacity: [0, 0.7, 0.7, 0],
          x: [0, 30, -30, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: item.duration,
          repeat: Infinity,
          delay: item.delay,
          ease: "linear",
        }}
        style={{
          left: `${item.left}%`,
          fontSize: `${item.size}px`,
          position: "absolute",
          filter: blur ? "blur(4px)" : "none",
        }}
      >
        {item.symbol}
      </motion.div>
    ));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {/* Layer 1 - Soft blurred background depth */}
      {renderLayer(layer1, true)}

      {/* Layer 2 - Medium romantic float */}
      {renderLayer(layer2)}

      {/* Layer 3 - Dramatic roses */}
      {renderLayer(layer3)}

    </div>
  );
}
