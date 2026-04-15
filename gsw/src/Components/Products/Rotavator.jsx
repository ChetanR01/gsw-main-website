import React from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import t1 from '../../gsw images/t1.webp';
import p2 from '../../gsw images/p4.webp';

const features = [
  "Multi Speed Gear Box",
  "Adjustable Lower Hitch Brackets",
  "L Type Blades",
  "Chain/Gear Driven Side Transmission in Oil Bath",
  "Adjustable Skids",
  "Rear Board Springs",
];

const models = [
  { model: "Fighter 4", length: 114, width: 959, height: 1135, hp: "40-55", kw: "30-41", hitch: "-", tinesLc: 30, tinesSpike: "34 & 46", transmission: "Gear Drive", depth: 152, safety: "Shear Bolt", weight: 406 },
  { model: "Fighter 5", length: 1760, width: 959, height: 1135, hp: "45-60", kw: "34-45", hitch: "-", tinesLc: 36, tinesSpike: "37 & 48", transmission: "Gear Drive", depth: 152, safety: "Shear Bolt", weight: 426 },
  { model: "Fighter 5.5", length: 1889, width: 959, height: 1135, hp: "50-65", kw: "37-48", hitch: "Cat - II", tinesLc: 39, tinesSpike: "52", transmission: "Gear Drive", depth: 152, safety: "Shear Bolt", weight: 426 },
  { model: "Fighter 6", length: 2026, width: 959, height: 1135, hp: "55-70", kw: "41-52", hitch: "Cat - II", tinesLc: 42, tinesSpike: "46 & 58", transmission: "Gear Drive", depth: 152, safety: "Shear Bolt", weight: 446 },
  { model: "Fighter 7", length: 2026, width: 959, height: 1135, hp: "65-80", kw: "49-60", hitch: "Cat - II", tinesLc: 48, tinesSpike: "70", transmission: "Gear Drive", depth: 152, safety: "Shear Bolt", weight: 465 },
];

function Rotavator() {
  useScrollReveal();

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden mb-20 reveal">
          <img src={t1} alt="GSW Fighter Rotavator" className="w-full h-[400px] lg:h-[500px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-8 lg:px-16">
              <span className="inline-block bg-amber-500 text-black text-sm font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
                Premium
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
                GSW Fighter <span className="text-amber-400">Rotavator</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-md">
                Revolutionizing farming with multi-speed gearbox and gear-driven transmission
              </p>
            </div>
          </div>
        </div>

        {/* Features + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="reveal-left">
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Specifications
            </span>
            <h3 className="text-3xl font-black text-gray-900 mb-8">
              Key <span className="gradient-text">Features</span>
            </h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 bg-gray-50 p-4 rounded-xl hover:bg-amber-50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal-right">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={p2} alt="GSW Fighter Rotavator" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Specs Table */}
        <div className="reveal">
          <div className="text-center mb-12">
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Compare Models
            </span>
            <h3 className="text-3xl font-black text-gray-900 mb-4">
              Model <span className="gradient-text">Specifications</span>
            </h3>
            <div className="section-divider mx-auto" />
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="px-4 py-4 text-left font-semibold">Model</th>
                  <th className="px-4 py-4 text-left font-semibold">Length (mm)</th>
                  <th className="px-4 py-4 text-left font-semibold">Width (mm)</th>
                  <th className="px-4 py-4 text-left font-semibold">Height (mm)</th>
                  <th className="px-4 py-4 text-left font-semibold">HP</th>
                  <th className="px-4 py-4 text-left font-semibold">KW</th>
                  <th className="px-4 py-4 text-left font-semibold">Hitch</th>
                  <th className="px-4 py-4 text-left font-semibold">Tines (L/C)</th>
                  <th className="px-4 py-4 text-left font-semibold">Tines (Spike)</th>
                  <th className="px-4 py-4 text-left font-semibold">Transmission</th>
                  <th className="px-4 py-4 text-left font-semibold">Depth (mm)</th>
                  <th className="px-4 py-4 text-left font-semibold">Safety</th>
                  <th className="px-4 py-4 text-left font-semibold">Weight (kg)</th>
                </tr>
              </thead>
              <tbody>
                {models.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-100 hover:bg-red-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-4 py-3.5 font-bold text-red-700">{row.model}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.length}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.width}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.height}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.hp}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.kw}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.hitch}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.tinesLc}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.tinesSpike}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.transmission}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.depth}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.safety}</td>
                    <td className="px-4 py-3.5 text-gray-600">{row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rotavator;
