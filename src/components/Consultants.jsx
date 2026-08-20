import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

import jagdish from "../assets/jagdish-raheja.jpeg";
import parmanand from "../assets/parmanand-goyal.jpeg";
import dinesh from "../assets/dinesh-bajaj.jpeg";

const consultantsData = [
  {
    id: 1,
    name: "Dinesh C. Bajaj",
    designation: "Founder & Principal Consultant",
    image: dinesh,
    background:
      "Former Chief Adviser (Cost) to the Government of India and President of the Institute of Cost Accountants of India.",
    expertise:
      "Regulatory pricing, tariff determination (AERA/CERC), and strategic contract negotiations.",
    qualifications:
      "FCMA, MSc Finance (Strathclyde, UK), MTech (IT), Qualified Independent Director.",
    featured: true,
  },

  {
    id: 2,
    name: "Parmanand Goyal",
    designation: "Strategic Advisor – Oil & Gas",
    image: parmanand,
    background:
      "Former Executive Director (Finance) at Indian Oil Corporation Limited with 30+ years experience.",
    expertise:
      "Insolvency processes, treasury management, project execution, and risk management.",
    qualifications:
      "Advocate, FCMA, Insolvency Professional (IP), Registered Valuer (SFA).",
  },

  {
    id: 3,
    name: "Jagdish Lal Raheja",
    designation: "Lead Consultant – Corporate Finance",
    image: jagdish,
    background:
      "Former Group CFO at SAL Automotive Ltd. and former Circle Finance Head at Aircel.",
    expertise:
      "US GAAP/IGAAP reporting, budgeting, strategic finance, and business transformation.",
    qualifications:
      "RV (SFA), CIMA (UK), FCMA, B.Com.",
  },
];

const Consultants = () => {
  return (
    <main className="bg-[#f7f8fa] text-slate-900">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#07111f] px-6 py-20 text-white sm:py-24 lg:py-28">

        {/* Background Glow */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[2px] text-yellow-300">
            <Award size={14} />
            Leadership & Expertise
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Meet Our
            <span className="block text-yellow-400">
              Consulting Experts
            </span>
          </h1>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-yellow-400" />

          <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Experienced industry leaders delivering strategic advisory,
            corporate finance, cost management, valuation and business
            transformation solutions.
          </p>

        </div>
      </section>

      {/* =====================================================
          CONSULTANTS
      ===================================================== */}
      <section className="relative px-5 py-16 sm:px-6 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-bold uppercase tracking-[3px] text-blue-600 sm:text-sm">
                Our Leadership
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Experienced Minds.
                <span className="text-blue-600"> Strategic Results.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-slate-500">
              Our consultants bring decades of experience across government,
              finance, infrastructure, energy and corporate sectors.
            </p>

          </div>

          {/* Cards */}
          <div className="grid gap-7 lg:grid-cols-3">

            {consultantsData.map((consultant) => (
              <article
                key={consultant.id}
                className={`group relative overflow-hidden rounded-[28px] border bg-white transition-all duration-500 hover:-translate-y-2 ${
                  consultant.featured
                    ? "border-yellow-400/60 shadow-xl shadow-yellow-500/10 lg:-translate-y-4"
                    : "border-slate-200 shadow-lg shadow-slate-200/60"
                }`}
              >

                {/* Featured Label */}
                {consultant.featured && (
                  <div className="absolute left-5 top-5 z-20 flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg">
                    <Award size={14} />
                    Founder
                  </div>
                )}

                {/* Image */}
                <div className="relative h-[380px] overflow-hidden sm:h-[430px]">

                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    loading={consultant.id === 1 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent" />

                  {/* Image Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-yellow-400 sm:text-xs">
                      {consultant.designation}
                    </p>

                    <h3 className="text-2xl font-bold text-white sm:text-3xl">
                      {consultant.name}
                    </h3>

                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">

                  {/* Background */}
                  <div className="border-b border-slate-100 pb-6">

                    <div className="mb-3 flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <BriefcaseBusiness size={17} />
                      </div>

                      <h4 className="font-bold text-slate-900">
                        Background
                      </h4>

                    </div>

                    <p className="text-sm leading-6 text-slate-500">
                      {consultant.background}
                    </p>

                  </div>

                  {/* Expertise */}
                  <div className="border-b border-slate-100 py-6">

                    <div className="mb-3 flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-yellow-50 text-yellow-600">
                        <ShieldCheck size={17} />
                      </div>

                      <h4 className="font-bold text-slate-900">
                        Expertise
                      </h4>

                    </div>

                    <p className="text-sm leading-6 text-slate-500">
                      {consultant.expertise}
                    </p>

                  </div>

                  {/* Qualifications */}
                  <div className="py-6">

                    <div className="mb-3 flex items-center gap-3">

                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <GraduationCap size={18} />
                      </div>

                      <h4 className="font-bold text-slate-900">
                        Qualifications
                      </h4>

                    </div>

                    <p className="text-sm leading-6 text-slate-500">
                      {consultant.qualifications}
                    </p>

                  </div>

                  {/* Button */}
                  <Link
                    to="/contact"
                    className="group/button flex w-full items-center justify-center gap-2 rounded-xl bg-[#07111f] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600"
                  >
                    Connect With Consultant

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </Link>

                </div>

                {/* Hover Border */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-transparent transition-all duration-500 group-hover:border-blue-500/30" />

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          TRUST SECTION
      ===================================================== */}
      <section className="border-y border-slate-200 bg-white px-6 py-16 sm:py-20">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-6 md:grid-cols-3">

            {[
              {
                number: "35+",
                title: "Years of Experience",
                text: "Deep government and private-sector leadership experience.",
              },
              {
                number: "3",
                title: "Senior Consultants",
                text: "Specialists across finance, costing, valuation and strategy.",
              },
              {
                number: "360°",
                title: "Advisory Approach",
                text: "Integrated solutions designed around your business goals.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 text-center transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >

                <div className="text-4xl font-black text-blue-600">
                  {item.number}
                </div>

                <h3 className="mt-3 font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="px-5 py-16 sm:px-6 sm:py-20">

        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-[#07111f] px-6 py-14 text-center text-white shadow-2xl sm:px-10 sm:py-16">

          {/* Glow */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-yellow-500/10 blur-3xl" />

          <div className="relative z-10">

            <p className="text-xs font-bold uppercase tracking-[3px] text-yellow-400">
              Work With Our Experts
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl">
              Ready to Make Better
              <span className="text-yellow-400"> Business Decisions?</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              Connect with our consultants and explore tailored advisory
              solutions for your organization.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-yellow-500/20 transition duration-300 hover:-translate-y-1 hover:bg-yellow-300"
            >
              Schedule a Consultation
              <ArrowRight size={17} />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
};

export default Consultants;