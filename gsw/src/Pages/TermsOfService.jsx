import React from 'react';
import { Link } from 'react-router-dom';

function TermsOfService() {
  return (
    <div className="pt-[72px] lg:pt-[80px]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-red-600 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: April 16, 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10 text-gray-600 text-[16px] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Gurumauli Steel Works website, you agree to be bound by these
              Terms of Service. If you do not agree with any part of these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p>
              Gurumauli Steel Works manufactures and supplies agricultural implements including reversible
              ploughs, rotavators, and other farming equipment. Our website provides information about our
              products and services, and allows you to contact us for inquiries and orders.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Website</h2>
            <p className="mb-3">By using our website, you agree to:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>Use the website only for lawful purposes.</li>
              <li>Not attempt to gain unauthorized access to any part of the website.</li>
              <li>Not use the website to transmit harmful, offensive, or illegal content.</li>
              <li>Not interfere with the proper functioning of the website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, graphics, and product information,
              is the property of Gurumauli Steel Works and is protected by applicable intellectual property
              laws. You may not reproduce, distribute, or use any content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Product Information</h2>
            <p>
              We strive to ensure that product descriptions and specifications on our website are accurate.
              However, we do not warrant that product descriptions or other content is error-free. Actual
              product specifications may vary. Please contact us for the most current product information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p>
              Gurumauli Steel Works shall not be liable for any direct, indirect, incidental, consequential,
              or punitive damages arising from your use of or inability to use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the
              content, accuracy, or practices of any third-party websites. Accessing third-party links
              is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy</h2>
            <p>
              Your use of our website is also governed by our Privacy Policy. Please review our{' '}
              <Link to="/privacy-policy" className="text-red-600 hover:underline font-semibold">Privacy Policy</Link>{' '}
              to understand how we collect, use, and protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective
              immediately upon posting on this page. Your continued use of the website after any changes
              constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of India.
              Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the
              courts in Buldhana, Maharashtra, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms of Service, please contact us:</p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900">Gurumauli Steel Works</p>
              <p>Hirdao Road, Lonar 443302, Dist. Buldhana (MH), India</p>
              <p>Email: <a href="mailto:gurumaulisteelworks01@gmail.com" className="text-red-600 hover:underline">gurumaulisteelworks01@gmail.com</a></p>
              <p>Phone: <a href="tel:+919545208208" className="text-red-600 hover:underline">+91 954 520 8208</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
