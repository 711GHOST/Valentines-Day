import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen(){

  // 🌫 Layer 1 - Tiny blurred sparkles
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

  // 💖 Layer 2 - Medium hearts
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

  // 🌹 Layer 3 - Rare roses
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
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{background:'linear-gradient(160deg,#efe8f6, #f6efe6)'}}>

      {/* Floating Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {renderLayer(layer1, true)}
        {renderLayer(layer2)}
        {renderLayer(layer3)}
      </div>

      {/* Content */}
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className="text-center relative z-10 px-6"
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-serif"
          style={{color:'#6B3E6B'}}
          initial={{y:10}}
          animate={{y:0}}
          transition={{delay:0.2}}
        >
          For{" "}
          <motion.span whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
            Tanya
          </motion.span>{" "}
          - my{" "}
          <motion.span whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 300 }}>
            Missy
          </motion.span>
          , my calm, my forever.
        </motion.h1>

        <div className="mt-6 flex justify-center">
          <motion.div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-lavender/60"
            animate={{y:[0,-8,0]}}
            transition={{repeat:Infinity, duration:2}}
          />
        </div>
      </motion.div>
    </div>
  )
}
