import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import contact1 from '../gsw images/Contact1.jpg';

const Contact = () => {
  useScrollReveal();

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
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Contact <span className="text-red-500">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for inquiries, quotes, or support.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 -mt-20 relative z-10">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "Phone",
                value: "+91 954 520 8208",
                href: "tel:+919545208208",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Email",
                value: "gurumaulisteelworks01@gmail.com",
                href: "mailto:gurumaulisteelworks01@gmail.com",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Address",
                value: "Hirdao Road, Lonar 443302, Dist. Buldhana (MH)",
                href: "https://www.google.com/maps/place/Gurumauli+steel+works",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.title === 'Address' ? '_blank' : undefined}
                rel={item.title === 'Address' ? 'noopener noreferrer' : undefined}
                className="reveal group bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:border-red-200 hover:shadow-2xl transition-all duration-500 text-center hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:bg-red-700 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Image */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image + Map */}
            <div className="space-y-8 reveal-left">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src={contact1} alt="Contact Us" className="w-full h-[350px] object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.8!2d76.5241933!3d19.9856893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd083fd48b95d7d%3A0x528783659ce96fcf!2sGurumauli%20steel%20works!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GSW Location"
                  className="w-full"
                />
              </div>
            </div>

            {/* Form */}
            <div className="reveal-right">
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-2xl font-black text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-500 mb-8">Fill out the form and our team will get back to you shortly</p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Product Interest</label>
                    <select className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-300 text-gray-800">
                      <option value="">Select a product</option>
                      <option>Reversible Plough</option>
                      <option>Hydraulic Reversible Plough</option>
                      <option>Auto Reversible Plough</option>
                      <option>Kubota Special Plough</option>
                      <option>GSW Fighter Rotavator</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                    <textarea
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all duration-300 text-gray-800 placeholder:text-gray-400 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-red-700 text-white py-4 rounded-xl text-lg font-bold hover:bg-red-800 transition-all duration-300 hover:shadow-xl hover:shadow-red-700/25 active:scale-[0.98]"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
