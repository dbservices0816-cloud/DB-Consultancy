
import React from "react";

const Home = () => {
  return (
    <main className="bg-[#0F2C59] text-white">

      {/* ================= HERO SECTION ================= */}
      <section
        id="hero"
        className="relative overflow-hidden border-b border-slate-800"
      >
        {/* Background Glow */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#C5A880]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#C5A880]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">

            {/* ================= LEFT CONTENT ================= */}
            <div className="space-y-6 lg:col-span-7">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A880]/40 bg-[#112240] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#C5A880]">
                <span>★</span>
                <span>Institutional Authority & Corporate Agility</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Strategic Cost Management &
                <span className="block text-[#C5A880]">
                  Project Excellence
                </span>
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Bridging 30+ Years of Government Fiscal Authority with
                Corporate Agility. We specialize in optimizing project costs,
                mitigating time overruns, and driving long-term corporate
                profitability.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-4 pt-2 sm:flex-row">

                <a
                  href="/contact"
                  className="rounded bg-[#C5A880] px-6 py-3.5 text-center font-bold text-[#0F2C59] shadow-lg transition-all duration-200 hover:bg-[#B08E59]"
                >
                  Schedule Strategic Consultation
                </a>

                <a
                  href="/services"
                  className="rounded border border-slate-600 bg-transparent px-6 py-3.5 text-center font-semibold text-slate-200 transition-all duration-200 hover:border-[#C5A880] hover:bg-[#112240] hover:text-[#C5A880]"
                >
                  Explore Core Verticals
                </a>

              </div>

              {/* ================= STATS ================= */}
              <div className="grid grid-cols-1 gap-6 border-t border-[#112240] pt-8 sm:grid-cols-3">

                {/* Stat 1 */}
                <div className="text-center sm:text-left">
                  <span className="block text-3xl font-bold text-[#C5A880] sm:text-4xl">
                    60+ Yrs
                  </span>

                  <span className="mt-1 block text-xs text-slate-400">
                    Combined Experience
                  </span>
                </div>

                {/* Stat 2 */}
                <div className="text-center sm:text-left">
                  <span className="block text-3xl font-bold text-[#C5A880] sm:text-4xl">
                    ₹9+ Cr
                  </span>

                  <span className="mt-1 block text-xs text-slate-400">
                    Direct Cost Saved / Assignment
                  </span>
                </div>

                {/* Stat 3 */}
                <div className="text-center sm:text-left">
                  <span className="block text-3xl font-bold text-[#C5A880] sm:text-4xl">
                    Govt Level
                  </span>

                  <span className="mt-1 block text-xs text-slate-400">
                    Ex-Chief Adviser Fiscal Authority
                  </span>
                </div>

              </div>
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="space-y-4 lg:col-span-5">

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C5A880]">
                  Core Practice Pillars
                </h3>

                <div className="mt-2 h-px w-16 bg-[#C5A880]" />
              </div>

              
              {/* Pillar 01 */}
<div className="group rounded-lg border border-slate-700 bg-[#112240]/80 p-5 transition-all duration-200 hover:border-[#C5A880] hover:bg-[#112240] hover:shadow-lg hover:shadow-[#C5A880]/10">
  <div className="flex items-start gap-4">
    <div className="flex h-9 w-9 flex-none items-center justify-center rounded bg-[#C5A880]/20 text-sm font-bold leading-none text-[#C5A880] transition-colors duration-200 group-hover:bg-[#C5A880]/30">
      01
    </div>
    <div className="flex-1">
      <h4 className="text-base font-bold leading-snug text-white">
        Project Management &amp; Control
      </h4>
      <p className="mt-1.5 text-xs leading-relaxed text-slate-300 sm:text-sm">
        - Cost estimation models,<p> - Real-time overrun control frameworks,</p>  <span> - Process accounting system reviews.</span>
      </p>
    </div>
  </div>
</div>

              {/* Pillar 02 */}
              <div className="rounded-lg border border-slate-700 bg-[#112240]/80 p-5 transition-all duration-200 hover:border-[#C5A880] hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#C5A880]/20 text-sm font-bold text-[#C5A880]">
                    02
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Operational Cost Analysis
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                      - Profitability optimization, <p> - Strategic procurement audit</p> <p> - Make-or-buy decisions, and</p><span> - Contract verification.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Pillar 03 */}
              <div className="rounded-lg border border-slate-700 bg-[#112240]/80 p-5 transition-all duration-200 hover:border-[#C5A880] hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#C5A880]/20 text-sm font-bold text-[#C5A880]">
                    03
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Corporate Strategy &amp; Valuation
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                     <p> - M&amp;A cost-benefit analysis,</p><p> - IBBI registered asset valuations,</p> <p> - IBC insolvency advisory, and </p><p> - Fractional CFO leadership. <p> - Mangement Accountant Support</p></p>
                    </p>
                  </div>
                </div>
              </div>



              {/* Bottom Accent */}
              <div className="pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="h-px flex-1 bg-slate-700" />
                  <span className="text-[#C5A880]">
                    Strategic Advisory
                  </span>
                  <span className="h-px flex-1 bg-slate-700" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Home;

