const About = () => {
  return (
    <div className="bg-white text-gray-800">

      {/* 🔥 HERO */}
      <section className="relative py-32 px-6 text-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2400&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold font-serif mb-6 leading-tight tracking-tight">
            About DB Consultancy
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Cost is not just a number — it is a{" "}
            <span className="text-blue-300 font-medium">
              strategic asset that drives growth
            </span>.
          </p>
        </div>
      </section>

      {/* 🔥 FOUNDING PRINCIPLE */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Founding Principle
          </h2>

          <p className="text-lg md:text-lg text-gray-600 leading-relaxed">
            DB Consultancy is led by a Fellow Member of the Institute of Cost
            Accountants of India, holding an MTech in IT and an MSc in Finance
            from the University of Strathclyde. The firm blends{" "}
            <span className="font-medium text-gray-800">
              deep technical expertise
            </span>{" "}
            with{" "}
            <span className="font-medium text-gray-800">
              strategic financial insight
            </span>{" "}
            to deliver measurable business impact.
          </p>

        </div>
      </section>

      {/* 🔥 EXPERIENCE CARDS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16">
            Leadership Experience
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Public Sector Leadership",
                body: "Served as Adviser (Cost) in the Ministry of Defence and Chief Adviser in the Ministry of Finance, managing large-scale fiscal frameworks.",
              },
              {
                title: "Multinational Exposure",
                body: "Led finance roles at global firms like Cargill and Aircel, implementing international cost strategies and best practices.",
              },
              {
                title: "Regulatory Expertise",
                body: "Specialized in IBBI, MCA, and GST compliance with structured advisory and governance frameworks.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group bg-white p-8 rounded-2xl shadow-md border hover:shadow-2xl hover:-translate-y-2 transition duration-300 text-left"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-4 group-hover:text-blue-900 transition">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* 🔥 PHILOSOPHY */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">
            Our Philosophy
          </h2>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We integrate traditional cost accountancy with{" "}
            <span className="text-gray-800 font-medium">
              modern IT systems
            </span>{" "}
            and{" "}
            <span className="text-gray-800 font-medium">
              data intelligence
            </span>{" "}
            to deliver actionable insights. Our approach ensures decisions are
            not just compliant, but aligned with long-term strategic growth.
          </p>

        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-24 px-6 rounded-3xl mx-6 mb-20 shadow-xl">

        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Request a Cost Audit or Valuation Assessment
        </h3>

        <p className="text-blue-200 mb-8 text-lg max-w-xl mx-auto">
          Serving clients globally with strong presence in New Delhi, Noida, and Gurugram.


        </p>

        <button
          onClick={() => (window.location.href = "/contact")}
          className="bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:scale-105 transition shadow-lg"
        >
          Contact Us


          
        </button>

      </section>

    </div>
  );
};

export default About;