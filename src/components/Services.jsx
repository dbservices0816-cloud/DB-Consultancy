import { useState, useRef } from "react";

/* 🔥 SINGLE CARD COMPONENT */
const ServiceCard = ({ service }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group relative bg-white border rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1 active:scale-[0.98]"
    >
      {/* 🔥 Tooltip */}
      <span
        className="absolute px-3 py-1 text-xs rounded bg-white/90 backdrop-blur-md border text-gray-900 font-semibold pointer-events-none"
        style={{
          top: position.y + 10,
          left: position.x + 10,
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.6)",
          transition: "all 0.2s ease-out",
        }}
      >
        {service.title}
      </span>

      {/* Content */}
      <div className="p-7 text-left">

        {/* 🔥 Title */}
        <h3 className="text-2xl font-bold text-blue-700 mb-5 leading-snug group-hover:text-blue-900 transition">
          {service.title}
        </h3>

        {/* 🔥 List */}
        <ul className="space-y-3 text-gray-800 text-[15px] leading-relaxed font-medium">
          {service.items.map((item, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <span className="text-blue-700 font-bold mt-[2px]">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

/* 🔥 MAIN PAGE */
const Services = () => {
  const services = [
    {
      title: "Project Management",
      items: [
        "Review and estimation of project cost",
        "Project Management reporting framework",
        "Time and cost overrun control & review",
        "Cost analysis support in project execution",
      ],
    },
    {
      title: "Cost & Pricing",
      items: [
        "Design & review of cost accounting systems",
        "Cost analysis for profitability improvement",
        "Product pricing strategy",
        "Cost reduction processes",
        "Cost audit & compliance review",
        "Cost-benefit analysis",
      ],
    },
    {
      title: "Procurement Advisory",
      items: [
        "Cost-effective procurement strategies",
        "Procurement of non-competitive products",
        "Make-or-Buy decision advisory",
      ],
    },
    {
      title: "Reporting & Pricing Support",
      items: [
        "Price-controlled product & service cost analysis",
        "Strategic planning and pricing support",
        "Industry advisory for reputed organizations",
      ],
    },
    {
      title: "Mergers & Acquisitions",
      items: [
        "Establishing M&A frameworks",
        "Assessment of merger & acquisition benefits",
        "Cost-benefit analysis for M&A decisions",
      ],
    },
    {
      title: "Valuation Services",
      items: [
        "Valuation of assets & liabilities",
        "Going concern valuation",
        "Liquidation value assessment",
        "Registered valuer services",
        "360° business review & growth planning",
      ],
    },
    {
      title: "Insolvency & Bankruptcy",
      items: [
        "Asset takeover & business restructuring support",
        "Support to buyers and sellers in insolvency process",
        "Advisory services to banks and stakeholders",
      ],
    },
    {
      title: "Fractional CFO Services",
      items: [
        "Fractional CFO support for startups & enterprises",
        "Interim CFO for vacancies or transitions",
        "Management accounting & financial leadership",
        "Support for special projects and bulk assignments",
      ],
    },
  ];

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=100&w=2400')",
            }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold font-serif mb-6">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed">
            Delivering structured, data-driven solutions across project management,
            cost optimization, valuation, and strategic advisory.
          </p>
        </div>
      </section>

      {/* 🔥 CARDS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-gray-900">
            Our Services Expertise
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center py-20 px-6">
        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Need expert financial guidance?
        </h3>

        <p className="text-blue-200 mb-8 text-lg max-w-xl mx-auto leading-relaxed">
          Let’s discuss how we can support your business objectives.
        </p>

        <button
          onClick={() => (window.location.href = "/contact")}
          className="bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
        >
          Contact Us
        </button>
      </div>

    </div>
  );
};

export default Services;