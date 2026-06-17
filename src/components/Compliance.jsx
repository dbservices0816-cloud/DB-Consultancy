import React from "react";

const Compliance = () => {
  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-white to-blue-50">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">
          Compliance & Digital Portals
        </h1>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          Simplifying regulatory compliance and business processes through
          integrated digital solutions.
        </p>
      </section>

      {/* Portal Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-serif mb-6">
          CorporateMitra Portal
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Our upcoming digital platform is designed to streamline compliance,
          documentation, and regulatory filings for businesses across India.
        </p>

        {/* CTA Button (Future Link) */}
        <a
          href="https://corporatemitraportal.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-700 text-white px-8 py-3 rounded-xl hover:bg-blue-900 transition">
            Visit Portal
          </button>
        </a>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-serif text-center mb-12">
            Compliance Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* MCA / GST */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="font-semibold mb-3">
                MCA, GST & Labour Law Compliance
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                End-to-end support for statutory compliance including MCA filings,
                GST returns, and labour law advisory. Ensuring your business stays
                compliant with evolving regulatory frameworks.
              </p>
            </div>

            {/* Export Documentation */}
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition">
              <h3 className="font-semibold mb-3">
                Export Documentation
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Streamlining regulatory documentation and filings required for
                international trade. Helping businesses navigate export compliance
                efficiently and accurately.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white text-center py-16 px-6">
        <h3 className="text-2xl font-serif mb-4">
          Need Compliance Support?
        </h3>

        <p className="text-blue-200 mb-6">
          Let our experts simplify your regulatory requirements.
        </p>

        <button className="bg-white text-blue-900 px-8 py-3 rounded-xl hover:bg-gray-200 transition">
          Get Assistance
        </button>
      </section>

    </div>
  );
};

export default Compliance;