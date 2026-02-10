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
  const [isDarkImage, setIsDarkImage] = useState(false);

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

  // 🔥 Brightness Detection
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = images[index].src;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      const imageData = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;

      let brightness = 0;
      for (let i = 0; i < imageData.length; i += 4) {
        const r = imageData[i];
        const g = imageData[i + 1];
        const b = imageData[i + 2];
        brightness += (r + g + b) / 3;
      }

      brightness /= imageData.length / 4;

      setIsDarkImage(brightness < 128);
    };
  }, [index]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative w-full overflow-hidden rounded-3xl shadow-2xl my-12">
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
            {/* Image */}
            <motion.div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${images[index].src})` }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6 }}
            />

            {/* Dynamic Gradient Overlay */}
            <div
              className={`absolute inset-0 flex items-end p-6 sm:p-10 md:p-16 transition-all duration-500 ${
                isDarkImage
                  ? "bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                  : "bg-gradient-to-t from-white/60 via-white/30 to-transparent"
              }`}
            >
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-xl sm:text-2xl md:text-4xl font-semibold max-w-2xl transition-colors duration-500 ${
                  isDarkImage ? "text-white" : "text-black"
                }`}
              >
                {images[index].text}
              </motion.h2>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Left Arrow (Hidden on Mobile) */}
        <button
          onClick={prevSlide}
          className="hidden sm:block absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition"
        >
          <ChevronLeft size={20} className="sm:w-[30px] sm:h-[30px]" />
        </button>

        {/* Right Arrow (Hidden on Mobile) */}
        <button
          onClick={nextSlide}
          className="hidden sm:block absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transition"
        >
          <ChevronRight size={20} className="sm:w-[30px] sm:h-[30px]" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
                i === index
                  ? isDarkImage
                    ? "bg-white scale-125"
                    : "bg-black scale-125"
                  : isDarkImage
                  ? "bg-white/50 hover:bg-white"
                  : "bg-black/50 hover:bg-black"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
