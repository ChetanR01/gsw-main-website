import React from 'react';
import Plough from '../Components/Products/Ploug';
import Rotavator from '../Components/Products/Rotavator';
import useScrollReveal from '../hooks/useScrollReveal';
import BottomTractorImage from "../gsw images/BottomImage.jpg";

function Products() {
  useScrollReveal();

  return (
    <div className="pt-[72px] lg:pt-[80px]">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-red-600 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Our Products
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Premium <span className="text-red-500">Equipment</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our complete range of agricultural implements built with precision and durability
          </p>
        </div>
      </section>

      <Plough />
      <Rotavator />

      {/* CTA Section */}
      <section className="relative overflow-hidden reveal">
        <div
          className="relative h-[500px] flex items-center justify-center"
          style={{
            backgroundImage: `url(${BottomTractorImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" />
          <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Discover More About Our Products
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
              Ready to take your farming to the next level? Our advanced equipment provides efficiency and durability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:gurumaulisteelworks01@gmail.com"
                className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-800 transition-all duration-300 hover:shadow-xl active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Enquire Now
              </a>
              <a
                href="tel:+919545208208"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
