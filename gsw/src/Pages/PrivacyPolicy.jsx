import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: April 16, 2026</p>

      <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Introduction</h2>
          <p>
            Gurumauli Steel Works ("we", "our", or "us") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website and use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. Information We Collect</h2>
          <p className="mb-3">We may collect the following types of information:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, phone number, and mailing address when you contact us or submit an inquiry.</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
            <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. How We Use Your Information</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>To respond to your inquiries and provide customer support.</li>
            <li>To improve our website and services.</li>
            <li>To send promotional communications (only with your consent).</li>
            <li>To comply with legal obligations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share
            your information with trusted service providers who assist us in operating our website and
            conducting our business, provided they agree to keep your information confidential.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your
            personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites or services. We are not responsible
            for the privacy practices of these external sites. We encourage you to review their
            privacy policies before providing any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Your Rights</h2>
          <p className="mb-3">You have the right to:</p>
          <ul className="list-disc pl-8 space-y-2">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your personal data.</li>
            <li>Withdraw consent for data processing at any time.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-3 bg-gray-50 p-4 rounded-lg">
            <p><strong>Gurumauli Steel Works</strong></p>
            <p>Hirdao Road, Lonar 443302, Dist. Buldhana (MH), India</p>
            <p>Email: <a href="mailto:gurumaulisteelworks01@gmail.com" className="text-red-600 hover:underline">gurumaulisteelworks01@gmail.com</a></p>
            <p>Phone: <a href="tel:+919545208208" className="text-red-600 hover:underline">+91 954 520 8208</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
