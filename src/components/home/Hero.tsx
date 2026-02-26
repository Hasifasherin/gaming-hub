"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const images = [
    "/assets/slider1.jpg",
    "/assets/slider2.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

     

      {/* Background Images Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gradient Overlay for Professional Look */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-2xl px-6 flex flex-col items-center animate-fadeIn">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg animate-slideDown">
          ENTER THE GAME
        </h2>

        <p className="text-gray-300 mb-8 text-lg md:text-xl animate-slideUp">
          Discover next generation gaming experience.
        </p>

        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-blue-500 shadow-lg shadow-blue-500/50 transition-all duration-300 animate-bounceHover">
          Explore Now
        </button>
      </div>

    </section>
  );
}