import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  FileSearch,
  Handshake,
  Landmark,
  Scale,
  TrendingUp,
  Users,
} from "lucide-react";

/* =========================================================
   SERVICE CARD
========================================================= */

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <div className="group relative h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100/60 sm:p-8">

      {/* Hover Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/50 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Number */}
      <span className="absolute right-7 top-6 text-5xl font-black text-slate-100 transition duration-500 group-hover:text-blue-50">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/25">
        <Icon size={25} strokeWidth={1.8} />
      </div>

      {/* Title */}
      <h3 className="relative mt-7 pr-8 text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-blue-700 sm:text-2xl">
        {service.title}
      </h3>

      {/* Small Line */}
      <div className="mt-4 h-1 w-10 rounded-full bg-yellow-400 transition-all duration-500 group-hover:w-16" />

      {/* Services List */}
      <ul className="relative mt-6 space-y-3.5">
        {service.items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm leading-6 text-slate-600"
          >
            <CheckCircle2
              size={17}
              className="mt-1 shrink-0 text-blue-600"
            />

            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Bottom Link */}
      <Link
        to="/contact"
        className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition-colors duration-300 group-hover:text-blue-600"
      >
        Discuss This Service

        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* Premium Bottom Border */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-yellow-400 transition-all duration-500 group-hover:w-full" />
    </div>
  );
};

/* =========================================================
   SERVICES PAGE
========================================================= */

const Services = () => {
  const services = [
    {
      title: "Project Management",
      icon: BriefcaseBusiness,
      items: [
        "Review and estimation of project cost",
        "Project Management reporting framework",
        "Time and cost overrun control & review",
        "Cost analysis support in project execution",
      ],
    },
    {
      title: "Cost & Pricing",
      icon: Calculator,
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
      icon: Handshake,
      items: [
        "Cost-effective procurement strategies",
        "Procurement of non-competitive products",
        "Make-or-Buy decision advisory",
      ],
    },
    {
      title: "Reporting & Pricing Support",
      icon: BarChart3,
      items: [
        "Price-controlled product & service cost analysis",
        "Strategic planning and pricing support",
        "Industry advisory for reputed organizations",
      ],
    },
    {
      title: "Mergers & Acquisitions",
      icon: TrendingUp,
      items: [
        "Establishing M&A frameworks",
        "Assessment of merger & acquisition benefits",
        "Cost-benefit analysis for M&A decisions",
      ],
    },
    {
      title: "Valuation Services",
      icon: Scale,
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
      icon: Landmark,
      items: [
        "Asset takeover & business restructuring support",
        "Support to buyers and sellers in insolvency process",
        "Advisory services to banks and stakeholders",
      ],
    },
    {
      title: "Fractional CFO Services",
      icon: Users,
      items: [
        "Fractional CFO support for startups & enterprises",
        "Interim CFO for vacancies or transitions",
        "Management accounting & financial leadership",
        "Support for special projects and bulk assignments",
      ],
    },
  ];

  return (
    <main className="bg-[#f7f8fa] text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[590px] overflow-hidden bg-[#07111f]">

        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=70&w=1800&auto=format&fit=crop&fm=webp')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#07111f]/80" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/70 to-transparent" />
        </div>

        {/* Decorative Glow */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-32 right-20 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl items-center px-6 py-24 lg:px-8">

          <div className="max-w-4xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[2px] text-yellow-300">
              <BarChart3 size={14} />
              Strategic Business Solutions
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Our
              <span className="text-blue-400"> Services</span>
            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-yellow-400" />

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Delivering structured, data-driven solutions across project
              management, cost optimization, valuation and strategic advisory
              to help businesses make better decisions.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-yellow-500/20 transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Discuss Your Requirement
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/consultants"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Meet Our Experts
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO STRIP
      ===================================================== */}

      <section className="relative z-20 -mt-8 px-5 sm:px-6">

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-300/30 md:grid-cols-3">

          {[
            {
              title: "Strategic",
              text: "Business-focused advisory",
            },
            {
              title: "Data Driven",
              text: "Insights backed by analysis",
            },
            {
              title: "End-to-End",
              text: "Solutions from strategy to execution",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`px-6 py-7 text-center ${
                index !== 2
                  ? "border-b border-slate-200 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <h3 className="text-lg font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="px-6 py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[3px] text-blue-600">
              What We Do
            </span>

            <h2 className="mt-4 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
              Our Services Expertise
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-yellow-400" />

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              Comprehensive financial, cost and strategic advisory services
              designed to create measurable business value.
            </p>

          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY OUR SERVICES
      ===================================================== */}

      <section className="bg-[#07111f] px-6 py-20 text-white sm:py-24">

        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <div>

              <span className="text-xs font-bold uppercase tracking-[3px] text-yellow-400">
                Why DB Consultancy
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
                Expertise That
                <span className="block text-blue-400">
                  Creates Business Value
                </span>
              </h2>

              <div className="mt-6 h-1 w-16 rounded-full bg-yellow-400" />

              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Our multidisciplinary approach brings together cost
                accountancy, finance, technology and strategic thinking to
                help organizations solve complex business challenges.
              </p>

            </div>

            {/* Right */}
            <div className="grid gap-4 sm:grid-cols-2">

              {[
                "Cost Optimization",
                "Financial Advisory",
                "Strategic Planning",
                "Regulatory Support",
                "Business Valuation",
                "CFO Advisory",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-blue-400/40 hover:bg-white/10"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-blue-400"
                  />

                  <span className="text-sm font-semibold text-slate-200">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-5 py-16 sm:px-6 sm:py-20">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] bg-gradient-to-br from-blue-700 to-[#07111f] px-6 py-14 text-center text-white shadow-2xl sm:px-10 sm:py-16">

          {/* Glow */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-yellow-400/10 blur-3xl" />

          <div className="relative z-10">

            <span className="text-xs font-bold uppercase tracking-[3px] text-yellow-300">
              Let's Work Together
            </span>

            <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-black sm:text-4xl">
              Need Expert
              <span className="text-yellow-400">
                {" "}Financial Guidance?
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              Let's discuss how DB Consultancy can support your business
              objectives with practical, strategic and measurable solutions.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-blue-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:text-slate-950"
            >
              Contact Our Experts
              <ArrowRight size={18} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Services;