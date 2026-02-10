import React, { useState } from "react";
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

  const handleNo = () => {
    if (noCount < messages.length) {
      setNoCount(noCount + 1);
    }
  };

  const handleYes = () => {
    setAccepted(true);
    if (onAccept) onAccept();
  };

  const yesScale = 1 + noCount * 0.15;
  const noGone = noCount >= messages.length;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#E8DFF5] via-[#F4EDE4] to-[#DCC6E0] px-4 md:px-6">
      <div className="text-center max-w-sm md:max-w-xl">

        {!accepted ? (
          <>
            <h2 className="text-3xl md:text-5xl font-serif text-[#5E355E] mb-6 md:mb-8">
              Will you be my Valentine? 💜
            </h2>

            <AnimatePresence mode="wait">
              <motion.p
                key={noCount}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-base md:text-lg text-[#7A6C74] mb-6 md:mb-8 min-h-[40px]"
              >
                {noCount > 0 && !noGone && messages[noCount - 1]}

                {noGone &&
                  "Okay okay… I see how it is. I’ll just stand here holding this giant YES button until you press it 😌💜"}
              </motion.p>
            </AnimatePresence>

            <div className="flex justify-center gap-6 items-center">

              {/* YES BUTTON */}
              <motion.button
                onClick={handleYes}
                animate={{ scale: yesScale }}
                transition={{ type: "spring", stiffness: 200 }}
                className="px-8 py-3 rounded-full bg-[#C9B6E3] text-white font-semibold shadow-lg"
              >
                Yes 💖
              </motion.button>

              {/* NO BUTTON disappears after last click */}
              {!noGone && (
                <motion.button
                  onClick={handleNo}
                  whileTap={{ scale: 0.9 }}
                  className="px-6 py-3 rounded-full bg-[#F6EFE6] text-[#5E355E] border border-[#C9B6E3]"
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
            <h2 className="text-5xl font-serif text-[#5E355E] mb-4">
              YAYYYYY 💜
            </h2>
            <p className="text-xl text-[#7A6C74]">
              Best decision you've ever made.  
              Now our love story officially continues ✨
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
