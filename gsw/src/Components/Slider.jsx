import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import img2 from "../gsw images/plough-banner.jpeg";
import img3 from "../gsw images/Fighter.png";

const slides = [
  {
    image: img2,
    heading: "Premium Reversible Ploughs",
    subtitle: "Engineered for Performance",
    description:
      "Built with heavy-duty materials and precision engineering, our ploughs deliver superior tillage performance across all soil types.",
    cta: "Explore Ploughs",
  },
  {
    image: img3,
    heading: "GSW Fighter Rotavator",
    subtitle: "Power Meets Precision",
    description:
      "Revolutionize your farming with the GSW Fighter Rotavator — multi-speed gearbox, L-type blades, and gear-driven transmission.",
    cta: "View Rotavator",
  },
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const goToSlide = useCallback((index) => {
    setIsAnimating(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(true);
    }, 100);
  }, []);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  }, [currentIndex, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const slide = slides[currentIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden mt-[72px] lg:mt-[80px]">
      {/* Background Images */}
      {slides.map((s, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.image}
            alt={s.heading}
            className="w-full h-full object-cover scale-105"
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 transition-all duration-700 ${
                isAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {slide.subtitle}
            </div>

            {/* Heading */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 transition-all duration-700 delay-100 ${
                isAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {slide.heading}
            </h1>

            {/* Description */}
            <p
              className={`text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-lg transition-all duration-700 delay-200 ${
                isAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {slide.description}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                isAnimating
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-800 transition-all duration-300 hover:shadow-xl hover:shadow-red-700/30 active:scale-95"
              >
                {slide.cta}
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="tel:+919545208208"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentIndex === index
                ? "w-10 bg-red-500"
                : "w-4 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-2 text-white/60">
        <span className="text-xs tracking-widest uppercase rotate-90 origin-center translate-y-8">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent mt-12" />
      </div>
    </div>
  );
}

export default HeroSlider;
