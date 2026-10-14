import React, { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

import HappyTop from '../gsw images/gallery/HappyTop.jpg';
import c1 from '../gsw images/gallery/c1.jpeg';
import c2 from '../gsw images/gallery/c2.jpeg';
import c3 from '../gsw images/gallery/c3.jpeg';
import c4 from '../gsw images/gallery/c4.jpeg';
import c5 from '../gsw images/gallery/c5.jpeg';
import c6 from '../gsw images/gallery/c6.jpeg';
import c7 from '../gsw images/gallery/c7.jpeg';
import c8 from '../gsw images/gallery/c8.jpeg';
import c9 from '../gsw images/gallery/c9.jpeg';
import c10 from '../gsw images/gallery/c10.jpeg';
import c11 from '../gsw images/gallery/c11.jpeg';

import product1 from "../gsw images/update/GswRotavator1.png";
import product2 from "../gsw images/update/GswRotavator2.png";
import product3 from "../gsw images/update/GswRotavator3.png";
import product4 from "../gsw images/update/GswRotavator4.png";
import product5 from "../gsw images/update/GswRotavator5.png";
import product6 from "../gsw images/update/04.png";
import product7 from "../gsw images/update/10.png";
import product8 from "../gsw images/update/13.png";

const productImages = [product1, product2, product3, product4, product5, product6, product7, product8];
const deliveryImages = [c11, c7, c9, c8, c10, c6, c1, c3, c4, c5, c2];

function Gallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  useScrollReveal();

  const allImages = [
    ...productImages.map((img) => ({ src: img, type: 'product' })),
    ...deliveryImages.map((img) => ({ src: img, type: 'delivery' })),
  ];

  const filteredImages = activeTab === 'all' ? allImages : allImages.filter((img) => img.type === activeTab);

  return (
    <div className="pt-[72px] lg:pt-[80px]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-red-600 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Gallery
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Our <span className="text-red-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Browse our products and happy customer delivery moments
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={HappyTop} alt="Happy Customer Delivery" className="w-full h-[400px] object-contain bg-gray-50" />
            </div>
            <div>
              <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Happy Customers
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                GSW Product <span className="gradient-text">Delivery</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At GSW, every delivery is a moment of pride. We take immense satisfaction in seeing the smiles
                on our customers' faces when they receive their equipment. Browse through our collection of
                these special moments.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-3xl font-black text-red-700">5000+</p>
                  <p className="text-sm text-gray-500">Happy Customers</p>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <p className="text-3xl font-black text-red-700">10+</p>
                  <p className="text-sm text-gray-500">States Covered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 mb-12 reveal">
            {[
              { key: 'all', label: 'All' },
              { key: 'product', label: 'Products' },
              { key: 'delivery', label: 'Deliveries' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.key
                    ? 'bg-red-700 text-white shadow-lg shadow-red-700/25'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-red-300 hover:text-red-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((img, index) => (
              <div
                key={index}
                onClick={() => setLightbox(img.src)}
                className="reveal group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={img.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-sm font-medium capitalize bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                    {img.type === 'product' ? 'Product' : 'Delivery'}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lightbox}
            alt="Full view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
