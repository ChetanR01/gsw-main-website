import React from 'react';
import AboutUs from '../Components/AboutUs';
import useScrollReveal from '../hooks/useScrollReveal';

function About() {
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
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Our <span className="text-red-500">Story</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A legacy of innovation and excellence in agricultural equipment manufacturing
          </p>
        </div>
      </section>

      <AboutUs />

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Mission & <span className="gradient-text">Vision</span>
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal-left group bg-gradient-to-br from-red-50 to-white p-10 rounded-2xl border border-red-100 hover:shadow-xl hover:border-red-200 transition-all duration-500">
              <div className="w-14 h-14 bg-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide innovative, durable, and cost-effective agricultural solutions
                that empower farmers across India, enhancing efficiency, sustainability,
                and productivity in every field.
              </p>
            </div>

            <div className="reveal-right group bg-gradient-to-br from-amber-50 to-white p-10 rounded-2xl border border-amber-100 hover:shadow-xl hover:border-amber-200 transition-all duration-500">
              <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We envision a future where agricultural practices are transformed by
                cutting-edge technology, making farming smarter, more sustainable,
                and accessible to all across India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
              What Drives Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <div className="section-divider mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                title: "Innovation",
                desc: "Embracing new technologies for agricultural growth",
                color: "from-blue-500 to-blue-700",
              },
              {
                icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Sustainability",
                desc: "Eco-friendly farming practices for future generations",
                color: "from-green-500 to-green-700",
              },
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Integrity",
                desc: "Highest standards of honesty and transparency",
                color: "from-purple-500 to-purple-700",
              },
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                title: "Customer Focus",
                desc: "Exceptional service and products for all our clients",
                color: "from-red-500 to-red-700",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="reveal group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className={`w-14 h-14 mx-auto mb-6 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
            Have Questions?
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Get in touch with us and our team will be happy to assist you
          </p>
          <a
            href="mailto:gurumaulisteelworks01@gmail.com"
            className="inline-flex items-center gap-2 bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-800 transition-all duration-300 hover:shadow-xl hover:shadow-red-700/25 active:scale-95"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Us an Email
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
