import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import sunflower from "../assets/Sunflowers.jpg";
import mountains from "../assets/Mountains.jpg";
import newyork from "../assets/NewYork.jpg";
import pizza from "../assets/ItalianPizza.jpg";
import frenchfries from "../assets/FrenchFries.jpg";

const images = [
  { src: sunflower, text: "Sunflowers: A symbol of adoration and loyalty." },
  { src: mountains, text: "Majestic mountains under the galaxy sky." },
  { src: newyork, text: "New York City glowing at sunset." },
  { src: pizza, text: "Classic Italian pizza with fresh basil." },
  { src: frenchfries, text: "Golden crispy fries with rich dip." },
];

export default function Slider() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const nextSlide = useCallback(() => {
    setIndex(([prev]) => [(prev + 1) % images.length, 1]);
  }, []);

  const prevSlide = () => {
    setIndex(([prev]) => [
      (prev - 1 + images.length) % images.length,
      -1,
    ]);
  };

  const goToSlide = (i) => {
    setIndex([i, i > index ? 1 : -1]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full overflow-hidden rounded-3xl shadow-2xl my-12">
      {/* Maintain 16:9 Ratio */}
      <div className="relative w-full aspect-[16/9]">

        <AnimatePresence custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Image with subtle zoom */}
            <motion.div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${images[index].src})` }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6 }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8 md:p-16">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-white text-2xl md:text-4xl font-semibold max-w-2xl"
              >
                {images[index].text}
              </motion.h2>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition"
        >
          <ChevronLeft size={30} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition"
        >
          <ChevronRight size={30} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}