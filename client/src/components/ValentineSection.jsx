import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ValentineSection() {
  const messages = [
    "Are you sureeee? 🥺",
    "Think again… I make great coffee you know ☕",
    "But I already told everyone you're mine 😭",
    "What if I bring chocolates? 🍫",
    "Okay but like… please? 🥹",
    "This button is tired of being rejected 😔",
    "You really wanna hurt my romantic soul like this?",
    "Last chance before I dramatically faint 💀",
  ];

  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const handleNo = () => {
    if (noCount < messages.length - 1) {
      setNoCount(noCount + 1);
    }
  };

  const handleYes = () => {
    setAccepted(true);
  };

  const yesScale = 1 + noCount * 0.2; // YES grows every time NO is pressed (subs)

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E8DFF5] via-[#F4EDE4] to-[#DCC6E0] px-6">
      <div className="text-center">

        {!accepted ? (
          <>
            <h2 className="text-4xl md:text-5xl font-serif text-[#5E355E] mb-8">
              Will you be my Valentine? 💜
            </h2>

            <p className="text-lg text-[#7A6C74] mb-8 min-h-[30px] transition-all duration-300">
              {noCount > 0 && messages[noCount - 1]}
            </p>

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

              {/* NO BUTTON */}
              <motion.button
                onClick={handleNo}
                whileTap={{ scale: 0.9 }}
                animate={{ x: noCount % 2 === 0 ? -5 : 5 }}
                transition={{ duration: 0.2 }}
                className="px-6 py-3 rounded-full bg-[#F6EFE6] text-[#5E355E] border border-[#C9B6E3]"
              >
                No 😅
              </motion.button>

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
              Now we're officially the cutest couple alive.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
