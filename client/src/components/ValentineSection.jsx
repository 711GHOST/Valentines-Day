import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ValentineSection({ onAccept }) {
  const messages = [
    "Are you sureeee? 🥺",
    "Think again… I make great tea you know ☕",
    "But I already told everyone you're mine 😭",
    "What if I bring Snacks?",
    "Okay but like… please? 🥹",
    "You really wanna hurt my romantic soul like this?",
    "Last chance before I dramatically faint 💀",
  ];

  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState([]);

  const handleNo = () => {
    if (noCount < messages.length) {
      setNoCount(noCount + 1);
    }

    // Random dodge position
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;

    setNoPosition({ x: randomX, y: randomY });
  };

  const handleYes = () => {
    setAccepted(true);
    if (onAccept) onAccept();

    // Generate floating hearts
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 20,
      duration: Math.random() * 2 + 2,
    }));

    setHearts(newHearts);
  };

  const yesScale = Math.min(1 + noCount * 0.12, 2);
  const noGone = noCount >= messages.length;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E8DFF5] via-[#F4EDE4] to-[#DCC6E0] px-4 py-10 overflow-hidden">

      {/* Floating Hearts */}
      <AnimatePresence>
        {accepted &&
          hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -600, opacity: 0 }}
              transition={{ duration: heart.duration }}
              className="absolute text-pink-500"
              style={{
                left: `${heart.left}%`,
                fontSize: `${heart.size}px`,
              }}
            >
              💖
            </motion.div>
          ))}
      </AnimatePresence>

      <div className="text-center w-full max-w-lg mx-auto z-10">

        {!accepted ? (
          <>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#5E355E] mb-6 leading-snug">
              Will you be my Valentine? 💜
            </h2>

            <AnimatePresence mode="wait">
              <motion.p
                key={noCount}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-base sm:text-lg text-[#7A6C74] mb-8 min-h-[50px]"
              >
                {noCount > 0 && !noGone && messages[noCount - 1]}

                {noGone &&
                  "Okay okay… I see how it is. I’ll just stand here holding this giant YES button until you press it 😌💜"}
              </motion.p>
            </AnimatePresence>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

              {/* YES BUTTON */}
              <motion.button
                onClick={handleYes}
                animate={{ scale: yesScale }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-[#C9B6E3] text-white font-semibold shadow-lg text-base sm:text-lg"
              >
                Yes 💖
              </motion.button>

              {/* NO BUTTON */}
              {!noGone && (
                <motion.button
                  onMouseEnter={handleNo}
                  onClick={handleNo}
                  animate={{ x: noPosition.x, y: noPosition.y }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#F6EFE6] text-[#5E355E] border border-[#C9B6E3] text-base sm:text-lg"
                >
                  No 😅
                </motion.button>
              )}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h2 className="text-4xl sm:text-5xl font-serif text-[#5E355E] mb-4">
              YAYYYYY 💜
            </h2>
            <p className="text-lg sm:text-xl text-[#7A6C74]">
              Best decision you've ever made.  
              Now our love story officially continues ✨
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
