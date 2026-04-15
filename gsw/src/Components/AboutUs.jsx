import React, { useState, useEffect, useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import farmerImage from "../gsw images/About-us-picture-1024x683.webp";

function AnimatedCounter({ target, suffix = "+", label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center group">
      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform duration-300">
        <span className="text-white text-2xl font-bold">{label === "Products" ? "P" : label === "Capacity" ? "C" : label === "Customers" ? "H" : "A"}</span>
      </div>
      <h3 className="text-3xl sm:text-4xl font-black text-gray-900">
        {count.toLocaleString()}{suffix}
      </h3>
      <p className="text-sm text-gray-500 font-medium mt-1 uppercase tracking-wider">{label}</p>
    </div>
  );
}

const AboutUsComponent = () => {
  useScrollReveal();

  return (
    <div className="overflow-hidden">
      {/* About Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="reveal-left relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={farmerImage}
                  alt="Farmer with tractor"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-red-700 text-white p-6 rounded-2xl shadow-xl hidden lg:block">
                <p className="text-3xl font-black">10+</p>
                <p className="text-sm font-medium opacity-90">Years of<br />Excellence</p>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-red-200 rounded-2xl hidden lg:block" />
            </div>

            {/* Content */}
            <div className="reveal-right">
              <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
                A Legacy of
                <span className="gradient-text"> Excellence</span> in
                Agricultural Equipment
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Gurumauli Steel Works, under the brand name <strong>GSW</strong>, has
                emerged as one of India's leading manufacturers of premium farm equipment.
                Our diverse range includes two-bottom reversible ploughs, hydraulic reversible
                ploughs, automatic reversible ploughs, BBF planters, and rotavators.
              </p>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl mb-8">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">ISO 9001:2015 Certified</h4>
                  <p className="text-sm text-gray-500">Quality Management System</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://drive.google.com/file/d/1yB5rF0JGDQAVbV5gNB4rOqq3MDXNtmxR/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-800 transition-all duration-300 hover:shadow-lg hover:shadow-red-700/25 active:scale-95"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-red-600 hover:text-red-700 transition-all duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter target={4000} label="Products" />
            <AnimatedCounter target={3500} label="Capacity" />
            <AnimatedCounter target={5000} label="Customers" />
            <AnimatedCounter target={120} label="Awards" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsComponent;
