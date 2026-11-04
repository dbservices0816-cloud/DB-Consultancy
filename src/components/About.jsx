import React from "react";
import { Link } from "react-router-dom";
import {
  Award,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "35+", label: "Years of Experience" },
    { value: "FCMA", label: "Professional Expertise" },
    { value: "360°", label: "Strategic Advisory" },
  ];

  const experienceCards = [
    {
      icon: ShieldCheck,
      number: "01",
      title: "Public Sector Leadership",
      body: "Served as Adviser (Cost) in the Ministry of Defence and Chief Adviser in the Ministry of Finance, managing large-scale fiscal frameworks.",
    },
    {
      icon: BriefcaseBusiness,
      number: "02",
      title: "Multinational Exposure",
      body: "Led finance roles at global firms like Cargill and Aircel, implementing international cost strategies and best practices.",
    },
    {
      icon: Building2,
      number: "03",
      title: "Regulatory Expertise",
      body: "Specialized in IBBI, MCA, and GST compliance with structured advisory and governance frameworks.",
    },
  ];

  const values = [
    "Integrity",
    "Precision",
    "Confidentiality",
    "Business Impact",
  ];

  return (
    <main className="overflow-hidden bg-[#0F2C59] text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden border-b border-slate-700">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=60&w=1600&auto=format&fit=crop&fm=webp')",
            }}
          />
          <div className="absolute inset-0 bg-[#0F2C59]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59] via-[#0F2C59]/90 to-[#0F2C59]/65" />
        </div>

        {/* Gold Glow */}
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#C5A880]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#C5A880]/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[580px] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mx-auto mb-6 inline-flex w-fit items-center justify-center gap-2 rounded-full border border-[#C5A880]/40 bg-[#112240] px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-[#C5A880]">
  <Building2 size={15} />
  About DB Consultancy
</div>

           <h6 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-2xl md:text-4xl lg:text-4xl">
  Turning Cost Into
  <span className="block text-[#C5A880]">
    Strategic Advantage
  </span>
</h6>

            <div className="mt-7 h-1 w-20 rounded-full bg-[#C5A880]" />

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg sm:leading-8">
              Cost is not just a number — it is a strategic asset that drives
              profitability, efficiency and sustainable business growth.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded bg-[#C5A880] px-7 py-3.5 text-sm font-bold text-[#0F2C59] shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-[#B08E59]"
              >
                Talk to Our Experts
                <TrendingUp size={17} />
              </Link>

              <Link
                to="/consultants"
                className="inline-flex items-center justify-center gap-2 rounded border border-slate-600 bg-[#112240]/70 px-7 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-200 hover:border-[#C5A880] hover:bg-[#112240] hover:text-[#C5A880]"
              >
                Meet Our Consultants
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="relative z-10 px-5 pt-8 sm:px-6">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-lg border border-slate-700 bg-[#112240] sm:grid-cols-3">
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`px-6 py-8 text-center transition-colors hover:bg-[#173052] ${
                index !== stats.length - 1
                  ? "border-b border-slate-700 sm:border-b-0 sm:border-r"
                  : ""
              }`}
            >
              <div className="text-3xl font-bold text-[#C5A880] sm:text-4xl">
                {item.value}
              </div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUR FOUNDATION ================= */}
      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-2">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#C5A880]">
              Our Foundation
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Built on
              <span className="text-[#C5A880]"> Experience.</span>
              <br />
              Driven by
              <span className="text-[#C5A880]"> Insight.</span>
            </h2>

            <div className="mt-6 h-1 w-16 rounded-full bg-[#C5A880]" />

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
              Combining professional expertise, financial insight and
              technology to help businesses make informed strategic decisions.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-lg border border-slate-700 bg-[#112240]/90 p-7 shadow-lg shadow-black/10 transition-all duration-300 hover:border-[#C5A880]/60 sm:p-9">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-[#C5A880]/15 text-[#C5A880]">
                <Award size={25} />
              </div>

              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                DB Consultancy is led by a Fellow Member of the Institute of
                Cost Accountants of India, holding an MTech in IT and an MSc in
                Finance from the University of Strathclyde.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                The firm combines{" "}
                <span className="font-semibold text-white">
                  deep technical expertise
                </span>{" "}
                with{" "}
                <span className="font-semibold text-[#C5A880]">
                  strategic financial insight
                </span>{" "}
                to deliver measurable business impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE SECTION ================= */}
      <section className="border-y border-slate-800 bg-[#0B2245] px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#C5A880]">
              Proven Track Record
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Leadership Experience
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
              A combination of government leadership, multinational exposure
              and regulatory expertise enables us to approach complex business
              challenges with confidence.
            </p>

            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#C5A880]" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {experienceCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-lg border border-slate-700 bg-[#112240] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A880] hover:bg-[#142B4A] hover:shadow-xl hover:shadow-black/20"
                >
                  <div className="absolute right-5 top-4 text-5xl font-black text-slate-700/60 transition-colors group-hover:text-[#C5A880]/10">
                    {item.number}
                  </div>

                  <div className="relative flex h-12 w-12 items-center justify-center rounded bg-[#C5A880]/15 text-[#C5A880] transition-colors group-hover:bg-[#C5A880] group-hover:text-[#0F2C59]">
                    <Icon size={22} />
                  </div>

                  <h3 className="relative mt-7 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-3 h-0.5 w-10 rounded-full bg-[#C5A880] transition-all duration-300 group-hover:w-16" />

                  <p className="relative mt-5 text-sm leading-7 text-slate-400">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= OUR PHILOSOPHY ================= */}
      <section className="relative overflow-hidden bg-[#0F2C59] px-5 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#C5A880]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#C5A880]">
                Our Philosophy
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Finance Meets
                <span className="block text-[#C5A880]">
                  Technology &amp; Intelligence
                </span>
              </h2>

              <div className="mt-6 h-1 w-16 rounded-full bg-[#C5A880]" />

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-300">
                Bringing financial expertise and modern technology together to
                support smarter, more efficient and sustainable business
                decisions.
              </p>
            </div>

            <div className="rounded-lg border border-slate-700 bg-[#112240]/90 p-7 transition-all duration-300 hover:border-[#C5A880]/50 sm:p-9">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-[#C5A880]/15 text-[#C5A880]">
                <Lightbulb size={25} />
              </div>

              <p className="text-base leading-8 text-slate-300 sm:text-lg">
                We integrate traditional cost accountancy with{" "}
                <span className="font-semibold text-white">
                  modern IT systems
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#C5A880]">
                  data intelligence
                </span>{" "}
                to deliver actionable insights.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-400">
                Our approach ensures decisions are not only compliant, but
                aligned with long-term strategic growth and measurable business
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUES SECTION ================= */}
      <section className="border-t border-slate-800 bg-[#0B2245] px-5 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#C5A880]">
              What We Stand For
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Principles That Guide Us
            </h2>

            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#C5A880]" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 rounded-lg border border-slate-700 bg-[#112240] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#C5A880] hover:bg-[#142B4A]"
              >
                <CheckCircle2
                  size={21}
                  className="shrink-0 text-[#C5A880]"
                />

                <span className="font-semibold text-slate-200">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl border border-slate-700 bg-[#112240] px-6 py-14 text-center shadow-xl shadow-black/10 sm:px-10 sm:py-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#C5A880]/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#C5A880]">
              Start a Conversation
            </span>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl">
              Ready to Turn Cost Into
              <span className="text-[#C5A880]">
                {" "}Business Advantage?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Request a Cost Audit, Valuation Assessment or Strategic
              Consultation tailored to your business needs.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded bg-[#C5A880] px-8 py-4 text-sm font-bold text-[#0F2C59] shadow-lg transition-all duration-200 hover:-translate-y-1 hover:bg-[#B08E59]"
            >
              Contact Our Experts
              <TrendingUp size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;