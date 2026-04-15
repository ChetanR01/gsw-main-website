import React, { useState, useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import f1 from "../gsw images/1.jpg";
import f2 from "../gsw images/farmer-2.png";
import f3 from "../gsw images/farmer-3.png";
import f4 from "../gsw images/farmer-4.png";
import f5 from "../gsw images/farmer-5.png";

const testimonials = [
  {
    image: f1,
    name: "Ravi Kumar",
    location: "Maharashtra",
    review: "The GSW reversible plough has transformed my farming. Incredible build quality and performance. Best investment I've made for my farm.",
    rating: 5,
  },
  {
    image: f2,
    name: "Suresh Yadav",
    location: "Madhya Pradesh",
    review: "Amazing experience! The plough works smoothly in all soil types. Will definitely recommend GSW to other farmers.",
    rating: 5,
  },
  {
    image: f3,
    name: "Vikram Singh",
    location: "Rajasthan",
    review: "Quality products and excellent customer service. The rotavator saves me time and fuel. Very happy with my purchase.",
    rating: 5,
  },
  {
    image: f4,
    name: "Anil Sharma",
    location: "Gujarat",
    review: "Fantastic service, and the products are top-notch. The auto-reversible plough is a game changer. Highly recommend GSW.",
    rating: 5,
  },
  {
    image: f5,
    name: "Ajay Patel",
    location: "Karnataka",
    review: "Great experience! The product exceeded my expectations. Durable, efficient, and easy to maintain.",
    rating: 5,
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useScrollReveal();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-amber-400' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            What Our <span className="gradient-text">Customers</span> Say
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Trusted by thousands of farmers across India
          </p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Testimonial Cards */}
        <div className="relative reveal">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % testimonials.length;
              const t = testimonials[index];
              return (
                <div
                  key={`${index}-${currentIndex}`}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-500 animate-fade-in"
                >
                  {/* Quote Icon */}
                  <svg className="w-10 h-10 text-red-100 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10H0z" />
                  </svg>

                  {/* Stars */}
                  <div className="mb-4">{renderStars(t.rating)}</div>

                  {/* Review */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">"{t.review}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-red-100"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <p className="text-sm text-gray-400">{t.location}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-red-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
