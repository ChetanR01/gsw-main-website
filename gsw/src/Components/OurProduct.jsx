import React from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import p9 from "../gsw images/p9.webp";
import p8 from "../gsw images/p8.webp";
import p5 from "../gsw images/p5.webp";
import p6 from "../gsw images/p6.webp";
import p7 from "../gsw images/p7.webp";
import p4 from "../gsw images/p4.webp";

const products = [
  { id: 1, image: p9, name: "GSW Hi Tech Reversible Plough", tag: "Best Seller" },
  { id: 2, image: p8, name: "Two Bottom GSW Hydraulic Reversible Plough", tag: "Popular" },
  { id: 3, image: p5, name: "GSW Hi Tech Auto Reversible Plough", tag: "New" },
  { id: 4, image: p6, name: "GSW Hi Tech Highlighted Reversible Plough" },
  { id: 5, image: p7, name: "GSW Hi Tech Kubota Special Reversible Plough" },
  { id: 6, image: p4, name: "GSW Fighter Rotavator", tag: "Premium" },
];

function OurProduct() {
  useScrollReveal();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Built for <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Discover our range of premium agricultural equipment designed to boost your farming productivity
          </p>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="reveal group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-red-100 transition-all duration-500 hover:-translate-y-2"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.tag}
                  </span>
                )}
                {/* Quick View Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    to="/products"
                    className="bg-white text-gray-900 font-semibold px-6 py-2.5 rounded-xl shadow-lg hover:bg-red-700 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300 mb-3 line-clamp-2">
                  {product.name}
                </h3>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-red-600 font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-14 reveal">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl active:scale-95"
          >
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurProduct;
