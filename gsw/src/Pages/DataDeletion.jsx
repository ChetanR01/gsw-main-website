import React from 'react';

function DataDeletion() {
  return (
    <div className="pt-[72px] lg:pt-[80px]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-red-600 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl sm:text-5xl font-black mb-4">Data Deletion Policy</h1>
          <p className="text-gray-400">Last updated: April 16, 2026</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10 text-gray-600 text-[16px] leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Overview</h2>
            <p>
              At Gurumauli Steel Works, we respect your right to control your personal data.
              This Data Deletion Policy outlines how you can request the deletion of your personal
              information from our systems, including any data collected through our website or
              through Meta (Facebook/Instagram) integrations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What Data Can Be Deleted</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>Personal contact information (name, email, phone number).</li>
              <li>Inquiry and message history submitted through our website.</li>
              <li>Data collected via Facebook Login or Instagram integrations.</li>
              <li>Any other personally identifiable information stored in our systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How to Request Data Deletion</h2>
            <p className="mb-4">You can request deletion of your data by any of the following methods:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="font-bold text-gray-900 mb-2">Email Request</p>
                <p className="text-sm">Send an email to <a href="mailto:gurumaulisteelworks01@gmail.com" className="text-red-600 hover:underline">gurumaulisteelworks01@gmail.com</a> with subject "Data Deletion Request".</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="font-bold text-gray-900 mb-2">Phone Request</p>
                <p className="text-sm">Call us at <a href="tel:+919545208208" className="text-red-600 hover:underline">+91 954 520 8208</a> to request data deletion.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Processing Your Request</h2>
            <ul className="list-disc pl-8 space-y-2">
              <li>We will acknowledge your request within <strong>2 business days</strong>.</li>
              <li>Your data will be permanently deleted within <strong>30 days</strong> of the request.</li>
              <li>You will receive a confirmation email once the deletion is complete.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data We May Retain</h2>
            <p>
              In some cases, we may be required to retain certain data to comply with legal obligations,
              resolve disputes, or enforce our agreements. Any retained data will be securely stored and
              only used for the specific purpose for which it was retained.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Facebook/Instagram Data</h2>
            <p className="mb-3">
              If you have interacted with us through Facebook or Instagram, you can also manage your
              data through your Facebook settings:
            </p>
            <ol className="list-decimal pl-8 space-y-2">
              <li>Go to your Facebook Settings &amp; Privacy &gt; Settings.</li>
              <li>Click on "Apps and Websites".</li>
              <li>Find Gurumauli Steel Works and click "Remove".</li>
              <li>You may also contact us directly for complete data deletion.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="mb-4">For any questions regarding this Data Deletion Policy, please contact us:</p>
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

export default DataDeletion;
