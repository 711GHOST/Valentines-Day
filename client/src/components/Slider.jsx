import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import sunflower from '../assets/Sunflowers.jpg';
import mountains from '../assets/Mountains.jpg';
import newyork from '../assets/NewYork.jpg';
import pizza from '../assets/ItalianPizza.jpg';
import frenchfries from '../assets/FrenchFries.jpg';

const images = [
  {
    src: sunflower,
    text: 'Sunflowers: A symbol of adoration and loyalty.',
  },
  {
    src: mountains,
    text: 'Majestic mountains: Where the earth meets the sky.',
  },
  {
    src: newyork,
    text: 'New York City: The city that never sleeps.',
  },
  {
    src: pizza,
    text: 'Italian Maple Pizza: A slice of happiness.',
  },
  {
    src: frenchfries,
    text: 'French Fries: Golden and crispy delights.',
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider-section my-12">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative h-64"
              style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-white text-lg font-semibold text-center px-4">
                  {image.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}