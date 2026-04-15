import React from 'react';

function DataDeletion() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Data Deletion Policy</h1>
      <p className="text-gray-500 mb-8">Last updated: April 16, 2026</p>

      <div className="space-y-8 text-gray-600 text-lg leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">1. Overview</h2>
          <p>
            At Gurumauli Steel Works, we respect your right to control your personal data.
            This Data Deletion Policy outlines how you can request the deletion of your personal
            information from our systems, including any data collected through our website or
            through Meta (Facebook/Instagram) integrations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">2. What Data Can Be Deleted</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Personal contact information (name, email, phone number).</li>
            <li>Inquiry and message history submitted through our website.</li>
            <li>Data collected via Facebook Login or Instagram integrations.</li>
            <li>Any other personally identifiable information stored in our systems.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">3. How to Request Data Deletion</h2>
          <p className="mb-3">You can request deletion of your data by any of the following methods:</p>
          <div className="bg-gray-50 p-6 rounded-lg space-y-4">
            <div>
              <p className="font-semibold text-gray-800">Email Request</p>
              <p>Send an email to <a href="mailto:gurumaulisteelworks01@gmail.com" className="text-red-600 hover:underline">gurumaulisteelworks01@gmail.com</a> with the subject line "Data Deletion Request". Please include your full name and any relevant account details to help us locate your data.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Phone Request</p>
              <p>Call us at <a href="tel:+919545208208" className="text-red-600 hover:underline">+91 954 520 8208</a> to request data deletion.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">4. Processing Your Request</h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>We will acknowledge your request within <strong>2 business days</strong>.</li>
            <li>Your data will be permanently deleted within <strong>30 days</strong> of the request.</li>
            <li>You will receive a confirmation email once the deletion is complete.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">5. Data We May Retain</h2>
          <p>
            In some cases, we may be required to retain certain data to comply with legal obligations,
            resolve disputes, or enforce our agreements. Any retained data will be securely stored and
            only used for the specific purpose for which it was retained.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">6. Facebook/Instagram Data</h2>
          <p>
            If you have interacted with us through Facebook or Instagram, you can also manage your
            data through your Facebook settings. To remove data permissions granted to our app:
          </p>
          <ol className="list-decimal pl-8 space-y-2 mt-3">
            <li>Go to your Facebook Settings &amp; Privacy &gt; Settings.</li>
            <li>Click on "Apps and Websites".</li>
            <li>Find Gurumauli Steel Works and click "Remove".</li>
            <li>You may also contact us directly for complete data deletion.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">7. Contact Us</h2>
          <p>
            For any questions regarding this Data Deletion Policy, please contact us:
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

export default DataDeletion;
