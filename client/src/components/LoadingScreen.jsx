import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onEnter }) {

  // 🌫 Layer 1 – tiny blurred sparkles
  const layer1 = useMemo(() => {
    const symbols = ["✨", "💜"];
    return Array.from({ length: 12 }).map((_, i) => ({
      id: `l1-${i}`,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100,
      size: Math.random() * 10 + 10,
      duration: Math.random() * 25 + 30,
      delay: Math.random() * 15,
    }));
  }, []);

  // 💖 Layer 2 – medium hearts
  const layer2 = useMemo(() => {
    const symbols = ["💖", "💌"];
    return Array.from({ length: 8 }).map((_, i) => ({
      id: `l2-${i}`,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      left: Math.random() * 100,
      size: Math.random() * 16 + 16,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * 10,
    }));
  }, []);

  // 🌹 Layer 3 – rare roses
  const layer3 = useMemo(() => {
    return Array.from({ length: 3 }).map((_, i) => ({
      id: `l3-${i}`,
      symbol: "🌹",
      left: Math.random() * 100,
      size: Math.random() * 30 + 30,
      duration: Math.random() * 35 + 40,
      delay: Math.random() * 20,
    }));
  }, []);

  const renderLayer = (items, blur = false) =>
    items.map((item) => (
      <motion.div
        key={item.id}
        initial={{ y: "110vh", opacity: 0 }}
        animate={{
          y: "-10vh",
          opacity: [0, 0.6, 0.6, 0],
          x: [0, 20, -20, 0],
          rotate: [0, 8, -8, 0],
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
          filter: blur ? "blur(3px)" : "none",
        }}
      >
        {item.symbol}
      </motion.div>
    ));

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden px-6"
      style={{
        background: "linear-gradient(160deg,#efe8f6, #f6efe6)",
      }}
    >
      {/* Floating Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {renderLayer(layer1, true)}
        {renderLayer(layer2)}
        {renderLayer(layer3)}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10 max-w-xl"
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-serif leading-snug"
          style={{ color: "#6B3E6B" }}
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          For{" "}
          <motion.span
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Tanya
          </motion.span>{" "}
          — my{" "}
          <motion.span
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Missy
          </motion.span>
          , my calm, my forever.
        </motion.h1>

        {/* Interactive Enter Circle */}
        <div className="mt-10 flex justify-center">
          <motion.div
            onClick={onEnter}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#C9B6E3]/70 cursor-pointer flex items-center justify-center shadow-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm sm:text-base text-[#5E355E] font-medium">
              Enter 💜
            </span>

            {/* Pulse Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-[#C9B6E3]"
              animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
