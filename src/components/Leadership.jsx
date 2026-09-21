import React from "react";

import DINESH from "../assets/dinesh-bajaj.jpeg";
import Parmanand from "../assets/parmanand-goyal.jpeg";
import Jagdish from "../assets/jagdish-raheja.jpeg";

const Leadership = () => {
  const consultants = [
    {
      image: DINESH,
      name: "Dinesh C. Bajaj",
      role: "Founder & Principal Consultant",
      qualifications: [
        "FCMA",
        "CPFA (UK)",
        "MSc Finance (Strathclyde)",
        "MTech (IT)",
        "AI Skilled"
      ],
      points: [
        "Former Chief Adviser (Cost), Ministry of Finance (Secretary / HAG+ Level)",
        "Pharmaceuticals & Healthcare , Higher Education , Project Construction ,Infrastructure & Development  (Retd)",
       
        "Former President, Institute of Cost Accountants of India (ICAI)",
         "Former Member, Airports Economic Regulatory Authority (AERA)",
        "Specialist in Regulatory Tariff Pricing & Defence Procurements",
      ],
    },

    {
      image: Parmanand,
      name: "Parmanand Goyal",
      role: "Strategic Advisor – Energy & IBC",
      qualifications: [
        "Advocate",
        "FCMA",
        "IP (Insolvency)",
        "Registered Valuer (SFA)",
      ],
      points: [
        "Former Executive Director (Finance), Indian Oil Corporation (IOCL)",
        "30+ Years in Downstream Petroleum, Natural Gas & Petrochemicals",
        "Qualified Insolvency Professional & IBBI Registered Valuer",
        "Expert in Treasury, Financial Due Diligence & Project Risk",
      ],
    },

    {
      image: Jagdish,
      name: "Jagdish Lal Raheja",
      role: "Lead Consultant – Corporate Finance & Valuation",
      qualifications: [
        "Registered Valuer (SFA)",
        "CIMA (UK)",
        "FCMA",
        "FICA",
      ],
      points: [
        "Former Group CFO, b4S Group & SAL Automotive Ltd. (BSE Listed)",
        "Former Circle Finance Head Aircel & Corporate Manager Cargill India",
        "IBBI Registered Valuer for Securities and Financial Assets",
        "Specialist in US GAAP / IGAAP Reporting & Corporate Strategy",
      ],
    },
  ];

  return (
    <section
      id="directory"
      className="border-b border-slate-200 bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Intro */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-yellow-600">
            Expert Leadership
          </span>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
            Senior Advisory Consultants
          </h2>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Led by former Senior Government Regulators, Listed Company CFOs,
            and Certified Asset Valuers.
          </p>
        </div>

        {/* Consultant Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {consultants.map((consultant) => (
            <div
              key={consultant.name}
              className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="p-6">

                {/* Profile Image */}
                <div className="mb-5 flex justify-center">
                  <div className="h-40 w-40 overflow-hidden rounded-none border-4 border-yellow-500 bg-slate-100 shadow-md">
                    <img
                      src={consultant.image}
                      alt={consultant.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-center text-xl font-bold text-slate-900">
                  {consultant.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-center text-xs font-semibold uppercase text-yellow-600">
                  {consultant.role}
                </p>

                {/* Qualifications */}
                <div className="mt-4 flex flex-wrap justify-center gap-1.5 text-[11px] font-medium text-slate-600">
                  {consultant.qualifications.map((qualification) => (
                    <span
                      key={qualification}
                      className="rounded bg-slate-100 px-2 py-1"
                    >
                      {qualification}
                    </span>
                  ))}
                </div>

                {/* Experience Points */}
                <ul className="mt-6 space-y-3">
                  {consultant.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 sm:text-sm"
                    >
                      <span className="mt-0.5 text-yellow-600">▪</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="border-t border-slate-200 p-6">
                <a
                  href="/contact"
                  className="inline-flex items-center text-sm font-bold text-slate-900 transition hover:text-yellow-600"
                >
                  Consult with {consultant.name}

                  <span className="ml-2 text-yellow-600">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Leadership;