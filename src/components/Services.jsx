
import React, { useState } from "react";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const services = [
    {
      category: "cat1",
      categoryName: "Category I",
      title: "Project Cost Estimation",
      description:
        "Techno-economic feasibility studies, detailed capital budgeting models, and executive management reporting frameworks for complex infrastructure.",
      focus: "Focus: Feasibility & Planning",
    },
    {
      category: "cat1",
      categoryName: "Category I",
      title: "Overrun Control & Mitigation",
      description:
        "Real-time financial and timeline tracking mechanisms designed to isolate variance root causes and eliminate cost escalations before deployment.",
      focus: "Focus: Risk & Time Control",
    },
    {
      category: "cat1",
      categoryName: "Category I",
      title: "System Design & Cost Accounting",
      description:
        "Architecting custom process-cost accounting frameworks for complex manufacturing and process industries to capture accurate cost drivers.",
      focus: "Focus: Enterprise Systems",
    },
    {
      category: "cat2",
      categoryName: "Category II",
      title: "Profitability Optimization",
      description:
        "Driving corporate margin expansion through systematic cost reduction audits, waste elimination, and detailed operational variance analysis.",
      focus: "Focus: Margin Expansion",
    },
    {
      category: "cat2",
      categoryName: "Category II",
      title: "Strategic Procurement Audit",
      description:
        "Non-competitive product pricing verification, direct vendor audit, and comprehensive Make-or-Buy capital asset support.",
      focus: "Focus: Vendor & Pricing Audit",
    },
    {
      category: "cat2",
      categoryName: "Category II",
      title: "Pricing Strategy & Norms",
      description:
        "Price control product/service cost analysis, regulatory tariff submissions, and long-term dynamic pricing model development.",
      focus: "Focus: Regulatory Pricing",
    },
    {
      category: "cat3",
      categoryName: "Category III",
      title: "M&A Advisory & Due Diligence",
      description:
        "M&A financial cost-benefit assessment, post-merger integration reviews, target synergy evaluation, and financial due diligence.",
      focus: "Focus: Deal Synergy",
    },
    {
      category: "cat3",
      categoryName: "Category III",
      title: "IBBI Certified Valuations",
      description:
        "IBBI Registered Valuations for Securities & Financial Assets (SFA), going concern appraisal, liquidation value, and statutory compliance.",
      focus: "Focus: Statutory Valuation",
    },
    {
      category: "cat3",
      categoryName: "Category III",
      title: "Fractional CFO & Insolvency Advisory",
      description:
        "Strategic financial leadership for high-growth enterprises, specialized bulk assignments, and IBC resolution professional advisory.",
      focus: "Focus: Executive Governance",
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <section
      id="services"
      className="border-b border-slate-200 bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08E59]">
            Expert Advisory Verticals
          </span>

          <h2 className="mt-2 text-3xl font-extrabold text-[#0F2C59] sm:text-4xl">
            Our Core Service Matrix
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Explore our specialized cost accounting, regulatory valuation,
            and project governance services. Use the filters below to browse
            our capability catalog across corporate life cycles.
          </p>

        </div>

        {/* ================= FILTER BUTTONS ================= */}
        <div className="mb-10 flex justify-center">
          <div className="flex w-full max-w-4xl flex-wrap justify-center gap-2 rounded-xl border border-slate-200 bg-slate-100 p-2">

            {/* All */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`rounded-lg px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                activeCategory === "all"
                  ? "bg-[#0F2C59] text-white shadow"
                  : "text-slate-600 hover:text-[#0F2C59]"
              }`}
            >
              All Services
            </button>

            {/* Category I */}
            <button
              onClick={() => setActiveCategory("cat1")}
              className={`rounded-lg px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                activeCategory === "cat1"
                  ? "bg-[#0F2C59] text-white shadow"
                  : "text-slate-600 hover:text-[#0F2C59]"
              }`}
            >
              Cat I: Project Control
            </button>

            {/* Category II */}
            <button
              onClick={() => setActiveCategory("cat2")}
              className={`rounded-lg px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                activeCategory === "cat2"
                  ? "bg-[#0F2C59] text-white shadow"
                  : "text-slate-600 hover:text-[#0F2C59]"
              }`}
            >
              Cat II: Operational Cost
            </button>

            {/* Category III */}
            <button
              onClick={() => setActiveCategory("cat3")}
              className={`rounded-lg px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                activeCategory === "cat3"
                  ? "bg-[#0F2C59] text-white shadow"
                  : "text-slate-600 hover:text-[#0F2C59]"
              }`}
            >
              Cat III: Strategy & Valuation
            </button>

          </div>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="group rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A880] hover:shadow-lg"
            >

              {/* Category Badge */}
              <div
                className={`mb-4 inline-block rounded px-3 py-1 text-xs font-bold ${
                  service.category === "cat1"
                    ? "bg-[#0F2C59]/10 text-[#0F2C59]"
                    : service.category === "cat2"
                    ? "bg-[#C5A880]/20 text-[#B08E59]"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {service.categoryName}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-[#0F2C59] transition-colors group-hover:text-[#B08E59]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="min-h-[96px] text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>

              {/* Focus */}
              <div className="mt-6 border-t border-slate-200 pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#B08E59]">
                  {service.focus}
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-14 text-center">

          <p className="mb-4 text-sm text-slate-600">
            Need a customized advisory solution for your organization?
          </p>

          <a
            href="/contact"
            className="inline-flex items-center rounded bg-[#C5A880] px-6 py-3 text-sm font-bold text-[#0F2C59] shadow transition-all duration-200 hover:bg-[#B08E59]"
          >
            Schedule Strategic Consultation
            <span className="ml-2">→</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Services;

