import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8DFF5] via-[#F4EDE4] to-[#DCC6E0]" />

      {/* Floating Soft Blobs */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-20 w-72 h-72 bg-[#C9B6E3]/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-[#F6EFE6]/60 rounded-full blur-3xl"
      />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl rounded-3xl p-12 md:p-16 text-center max-w-4xl"
      >

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-serif text-[#5E355E] leading-tight mb-6">
          <motion.span
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="inline-block relative"
          >
            Missy
            <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#C9B6E3] rounded-full" />
          </motion.span>
          , loving you feels like home.
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-[#7A6C74] max-w-2xl mx-auto mb-8 leading-relaxed">
          Soft light, quiet mornings, and the comfort of your hand in mine -
          every day with you is gentle poetry wrapped in lavender skies.
        </p>

        {/* Elegant CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-full bg-[#C9B6E3] text-white font-medium shadow-lg hover:shadow-xl transition"
        >
          Always & Forever 💜
        </motion.button>
      </motion.div>
    </section>
  );
}
