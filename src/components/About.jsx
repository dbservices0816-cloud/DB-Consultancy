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
  return (
    <main className="bg-[#f7f8fa] text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[620px] overflow-hidden bg-[#07111f]">

        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?q=60&w=1600&auto=format&fit=crop&fm=webp')",
            }}
          />

          <div className="absolute inset-0 bg-[#07111f]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/70 to-transparent" />
        </div>

        {/* Decorative Glow */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -bottom-40 right-20 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24 lg:px-8">

          <div className="max-w-4xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-yellow-300">
              <Building2 size={14} />
              About DB Consultancy
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Turning Cost Into
              <span className="block text-yellow-400">
                Strategic Advantage
              </span>
            </h1>

            <div className="mt-7 h-1 w-20 rounded-full bg-yellow-400" />

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Cost is not just a number — it is a strategic asset that
              drives profitability, efficiency and sustainable business
              growth.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-yellow-500/20 transition hover:-translate-y-1 hover:bg-yellow-300"
              >
                Talk to Our Experts
                <TrendingUp size={17} />
              </Link>

              <Link
                to="/consultants"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Meet Our Consultants
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}
      <section className="relative z-20 -mt-8 px-5 sm:px-6">

        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-300/30 sm:grid-cols-3">

          {[
            {
              value: "35+",
              label: "Years of Experience",
            },
            {
              value: "FCMA",
              label: "Professional Expertise",
            },
            {
              value: "360°",
              label: "Strategic Advisory",
            },
          ].map((item, index) => (
            <div
              key={item.label}
              className={`px-6 py-8 text-center ${
                index !== 2 ? "border-b sm:border-b-0 sm:border-r border-slate-200" : ""
              }`}
            >
              <div className="text-3xl font-black text-blue-600 sm:text-4xl">
                {item.value}
              </div>

              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          FOUNDING PRINCIPLE
      ===================================================== */}
      <section className="px-6 py-20 sm:py-24 lg:py-28">

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-5">

          {/* Left */}
          <div className="lg:col-span-2">

            <span className="text-xs font-bold uppercase tracking-[3px] text-blue-600">
              Our Foundation
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Built on
              <span className="text-blue-600"> Experience.</span>
              <br />
              Driven by
              <span className="text-yellow-500"> Insight.</span>
            </h2>

            <div className="mt-6 h-1 w-16 rounded-full bg-yellow-400" />

          </div>

          {/* Right */}
          <div className="lg:col-span-3">

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg shadow-slate-200/50 sm:p-9">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Award size={24} />
              </div>

              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                DB Consultancy is led by a Fellow Member of the Institute of
                Cost Accountants of India, holding an MTech in IT and an MSc
                in Finance from the University of Strathclyde.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                The firm combines
                <span className="font-semibold text-slate-900">
                  {" "}deep technical expertise
                </span>
                {" "}with
                <span className="font-semibold text-slate-900">
                  {" "}strategic financial insight
                </span>
                {" "}to deliver measurable business impact.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}
      <section className="bg-white px-6 py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">

            <span className="text-xs font-bold uppercase tracking-[3px] text-blue-600">
              Proven Track Record
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl md:text-5xl">
              Leadership Experience
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500 sm:text-base">
              A combination of government leadership, multinational exposure
              and regulatory expertise enables us to approach complex
              business challenges with confidence.
            </p>

          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-7 md:grid-cols-3">

            {[
              {
                icon: ShieldCheck,
                number: "01",
                title: "Public Sector Leadership",
                body:
                  "Served as Adviser (Cost) in the Ministry of Defence and Chief Adviser in the Ministry of Finance, managing large-scale fiscal frameworks.",
              },
              {
                icon: BriefcaseBusiness,
                number: "02",
                title: "Multinational Exposure",
                body:
                  "Led finance roles at global firms like Cargill and Aircel, implementing international cost strategies and best practices.",
              },
              {
                icon: Building2,
                number: "03",
                title: "Regulatory Expertise",
                body:
                  "Specialized in IBBI, MCA, and GST compliance with structured advisory and governance frameworks.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/70"
                >

                  {/* Number */}
                  <div className="absolute right-6 top-5 text-5xl font-black text-slate-200 transition group-hover:text-blue-50">
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition duration-300 group-hover:bg-yellow-400 group-hover:text-slate-950">
                    <Icon size={21} />
                  </div>

                  <h3 className="relative mt-7 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <div className="mt-3 h-0.5 w-10 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-16" />

                  <p className="relative mt-5 text-sm leading-7 text-slate-500">
                    {item.body}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#07111f] px-6 py-20 text-white sm:py-24 lg:py-28">

        {/* Background Glow */}
        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Left */}
            <div>

              <span className="text-xs font-bold uppercase tracking-[3px] text-yellow-400">
                Our Philosophy
              </span>

              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Finance Meets
                <span className="block text-blue-400">
                  Technology & Intelligence
                </span>
              </h2>

              <div className="mt-6 h-1 w-16 rounded-full bg-yellow-400" />

            </div>

            {/* Right */}
            <div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm sm:p-9">

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/10 text-yellow-400">
                  <Lightbulb size={24} />
                </div>

                <p className="text-base leading-8 text-slate-300 sm:text-lg">
                  We integrate traditional cost accountancy with
                  <span className="font-semibold text-white">
                    {" "}modern IT systems
                  </span>
                  {" "}and
                  <span className="font-semibold text-white">
                    {" "}data intelligence
                  </span>
                  {" "}to deliver actionable insights.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-400">
                  Our approach ensures decisions are not only compliant, but
                  aligned with long-term strategic growth and measurable
                  business outcomes.
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="bg-slate-50 px-6 py-20 sm:py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mb-12 text-center">

            <span className="text-xs font-bold uppercase tracking-[3px] text-blue-600">
              What We Stand For
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
              Principles That Guide Us
            </h2>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Integrity",
              "Precision",
              "Confidentiality",
              "Business Impact",
            ].map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-blue-600"
                />

                <span className="font-semibold text-slate-800">
                  {value}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[30px] bg-gradient-to-br from-[#07111f] to-[#0d2340] px-6 py-14 text-center text-white shadow-2xl sm:px-10 sm:py-16">

          {/* Decorative */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="relative z-10">

            <span className="text-xs font-bold uppercase tracking-[3px] text-yellow-400">
              Start a Conversation
            </span>

            <h3 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
              Ready to Turn Cost Into
              <span className="text-yellow-400">
                {" "}Business Advantage?
              </span>
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Request a Cost Audit, Valuation Assessment or Strategic
              Consultation tailored to your business needs.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-yellow-500/20 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
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