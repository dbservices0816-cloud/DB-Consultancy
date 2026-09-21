
import React from "react";

const Heritage = () => {
  const milestones = [
    {
      year: "30+ Years",
      title: "Government Cost and Pricing Authority",
      description:
        "Extensive institutional experience in government fiscal advisory, cost management, and financial governance.",
    },
    {
      year: "Ministry of Finance",
      title: "Chief Adviser (Cost)",
      description:
        "Leadership experience as former Chief Adviser (Cost) to the Government of India, bringing public-sector fiscal discipline to complex assignments.",
    },
    {
      year: "Ministry of Defence",
      title: "Government Advisory",
      description:
        "Advisory experience within the Ministry of Defence with exposure to large-scale projects, financial systems, and institutional decision-making.",
    },
    {
      year: "60+ Yrs",
      title: "Combined Experience",
      description:
        "A multidisciplinary team combining cost accountancy, valuation, insolvency, legal, finance, and technology expertise.",
    },
  ];

  return (
    <section
      id="heritage"
      className="border-b border-slate-200 bg-[#F8FAFC] py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-14 max-w-3xl text-center">

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08E59]">
            Our Heritage
          </span>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0F2C59] sm:text-4xl lg:text-5xl">
            Institutional Experience.
            <span className="block text-[#B08E59]">
              Corporate Precision.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            DB Consultancy combines decades of public-sector fiscal
            experience with modern corporate advisory capabilities to support
            complex financial and operational decisions.
          </p>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="relative mx-auto max-w-5xl">

          {/* Center Line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-[#C5A880]/50 md:left-1/2 md:block" />

          <div className="space-y-8">

            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-12"
                >

                  {/* LEFT SIDE */}
                  <div
                    className={`${
                      isEven
                        ? "md:pr-12 md:text-right"
                        : "md:order-2 md:pl-12"
                    }`}
                  >
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#C5A880] hover:shadow-lg">

                      <span className="text-sm font-bold uppercase tracking-wider text-[#B08E59]">
                        {item.year}
                      </span>

                      <h3 className="mt-2 text-xl font-bold text-[#0F2C59]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                    </div>
                  </div>

                  {/* RIGHT / EMPTY SIDE */}
                  <div
                    className={`hidden md:block ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  />

                  {/* TIMELINE DOT */}
                  <div className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#F8FAFC] bg-[#C5A880] shadow md:block" />
                </div>
              );
            })}

          </div>
        </div>

        {/* ================= AUTHORITY CARD ================= */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-[#0F2C59]">

          <div className="grid grid-cols-1 lg:grid-cols-3">

            {/* Main Text */}
            <div className="p-8 lg:col-span-2 lg:p-10">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">
                Institutional Foundation
              </span>

              <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                From Public Sector Authority to Corporate Advisory
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Our heritage is built on disciplined cost management,
                financial governance, regulatory understanding, and
                institutional decision-making. These principles now support
                our corporate advisory approach.
              </p>

            </div>

            {/* Authority Badge */}
            <div className="flex items-center justify-center border-t border-[#C5A880]/20 bg-[#0A192F] p-8 lg:border-l lg:border-t-0">

              <div className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C5A880] bg-[#C5A880]/10 text-2xl text-[#C5A880]">
                  ★
                </div>

                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Regulatory Authority Level
                </p>

                <p className="mt-1 text-xl font-bold text-[#C5A880]">
                  Apex / Secretary Level
                </p>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Heritage;
