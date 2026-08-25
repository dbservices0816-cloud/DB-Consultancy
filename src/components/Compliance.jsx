import React from "react";

const Compliance = () => {
  const services = [
    {
      number: "01",
      title: "MCA, GST & Labour Law Compliance",
      description:
        "End-to-end support for statutory compliance, including MCA filings, GST returns and labour law advisory. Helping businesses remain compliant with evolving regulatory requirements.",
      tags: ["MCA Filings", "GST", "Labour Laws"],
    },
    {
      number: "02",
      title: "Export Documentation",
      description:
        "Streamlining regulatory documentation and filings required for international trade, helping businesses navigate export compliance efficiently and accurately.",
      tags: ["Export", "Documentation", "Trade Compliance"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f8fa] text-[#17191c]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#111315]">
        {/* Decorative lights */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">
            {/* Left */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,.8)]" />
                Regulatory & Compliance
              </div>

              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Compliance,
                <span className="text-blue-400"> Simplified.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
                Simplifying regulatory compliance and business processes
                through integrated digital solutions and expert support.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-gray-900 transition hover:bg-blue-400"
                >
                  Explore Services
                  <span>↓</span>
                </a>

                <a
                  href="https://corporatemitraportal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
                >
                  Visit CorporateMitra
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Right - Compliance visual */}
            <div className="relative hidden lg:block">
              <div className="relative mx-auto max-w-sm">
                {/* Main card */}
                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                        Compliance
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        Dashboard
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                      <span className="text-sm text-gray-400">
                        MCA Compliance
                      </span>
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                        Active
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                      <span className="text-sm text-gray-400">
                        GST Compliance
                      </span>
                      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                        Active
                      </span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-4">
                      <span className="text-sm text-gray-400">
                        Documentation
                      </span>
                      <span className="rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-400">
                        Managed
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-10 rounded-2xl border border-white/10 bg-[#1b1e21] px-5 py-4 shadow-2xl">
                  <p className="text-xs text-gray-500">Digital-first</p>
                  <p className="mt-1 font-semibold text-white">
                    Compliance Solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORPORATEMITRA ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_15px_50px_rgba(0,0,0,.05)]">
          {/* Accent */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-blue-700" />

          <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-14">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
                  Digital Platform
                </span>

                <span className="rounded-full bg-amber-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
                  CorporateMitra
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
                One platform for your
                <span className="text-blue-600"> compliance journey.</span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-8 text-gray-500 sm:text-base">
                Our digital platform is designed to streamline compliance,
                documentation and regulatory filings for businesses across
                India — making complex processes simpler and more accessible.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Compliance", "Documentation", "Regulatory Filings"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-600"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <a
              href="https://corporatemitraportal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#17191c] px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-600"
            >
              Visit Portal
              <span className="text-lg">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="border-y border-gray-200 bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
              What We Offer
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Compliance Services
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              Practical support for businesses navigating statutory,
              regulatory and documentation requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-[#fafafa] p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_55px_rgba(0,0,0,.08)] sm:p-9"
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold tracking-widest text-blue-600">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-gray-500 shadow-sm ring-1 ring-gray-100 transition group-hover:bg-blue-600 group-hover:text-white">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
                      <path d="M8 7h8M8 11h8M8 15h5" />
                    </svg>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold tracking-tight sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                  {service.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2 border-t border-gray-200 pt-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-gray-500 ring-1 ring-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-[#111315] px-7 py-12 sm:px-10 lg:px-14 lg:py-16">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                Compliance Support
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Let us simplify your
                <span className="text-blue-400"> regulatory requirements.</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
                From statutory filings to regulatory documentation, get
                practical support designed around your business requirements.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-bold text-gray-900 transition hover:bg-blue-400"
            >
              Get Assistance
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Compliance;