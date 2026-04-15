import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import HeaderTractor from "../../gsw images/update/GswRotavator4.png";
import HiTechImage from "../../gsw images/p9.webp";
import TwoBottam from "../../gsw images/p8.webp";
import HiTechAuto from "../../gsw images/p5.webp";
import HiTechHighted from "../../gsw images/p6.webp";
import HiTechKubota from "../../gsw images/p7.webp";

const products = [
  { img: HiTechImage, name: "GSW Hi Tech Reversible Plough" },
  { img: TwoBottam, name: "Two Bottom GSW Hydraulic Reversible Plough" },
  { img: HiTechAuto, name: "GSW Hi Tech Auto Reversible Plough" },
  { img: HiTechHighted, name: "GSW Hi Tech Highlighted Reversible Plough" },
  { img: HiTechKubota, name: "GSW Hi Tech Kubota Special Reversible Plough" },
];

const features = [
  "Two bottom plough has proved excellent performance in primary tillage operations",
  "Developed in heavy and extra models for the first time in India",
  "Heavy duty 90mm main shaft used for all models",
  "Easy to maintain with low cost of maintenance",
  "Less fuel consumption and less load to tractor",
  "Models available from 30 to 55 HP",
];

function Plough() {
  useScrollReveal();

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <div className="relative h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={HeaderTractor}
          alt="GSW Plough"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              <span className="inline-block bg-amber-500 text-black text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Premium Range
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                Our <span className="text-amber-400">Ploughs</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                Engineered for precision, built for durability. Our innovative ploughs make farming tasks effortless.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 reveal">
          <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Our Range
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Plough <span className="gradient-text">Collection</span>
          </h2>
          <div className="section-divider mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="reveal group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-red-100 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="h-72 overflow-hidden bg-gray-50 p-6">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 border-t border-gray-50">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors duration-300">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Key <span className="gradient-text">Features</span>
            </h2>
            <div className="section-divider mx-auto" />
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="reveal group flex items-start gap-4 bg-gray-50 p-6 rounded-xl hover:bg-red-50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plough;
