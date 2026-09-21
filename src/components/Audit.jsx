import React, { useState } from "react";

const Audit = () => {
const [outlay, setOutlay] = useState(150);

const [sector, setSector] = useState(
"Infrastructure & Construction (High Overrun Risk)"
);

const [objective, setObjective] = useState(
"Mitigate Project Time & Cost Overruns"
);

const riskRates = {
"Infrastructure & Construction (High Overrun Risk)": 0.18,
"Power, Energy & Utilities": 0.15,
"Manufacturing & Process Plants": 0.14,
"Defence Sales / Heavy Capital": 0.2,
};

const recoveryRates = {
"Infrastructure & Construction (High Overrun Risk)": 0.7,
"Power, Energy & Utilities": 0.7,
"Manufacturing & Process Plants": 0.68,
"Defence Sales / Heavy Capital": 0.72,
};

const riskRate = riskRates[sector] || 0.18;
const recoveryRate = recoveryRates[sector] || 0.7;

const baselineRisk = outlay * riskRate;
const retainedSavings = baselineRisk * recoveryRate;

return ( <section
   id="audit"
   className="border-b border-slate-200 bg-slate-900 py-20"
 > <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


    {/* Header */}
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-yellow-500">
        Interactive Cost Audit Tool
      </span>

      <h2 className="mt-2 text-3xl font-extrabold text-white md:text-4xl">
        Estimate Your Project Risk & Potential Savings
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
        Input your project parameters below to simulate potential cost
        overrun risks and estimate audit savings achievable under DB
        Consultancy management controls.
      </p>
    </div>

    {/* Main Tool */}
    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-white shadow-2xl">

      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left - Inputs */}
        <div className="p-6 sm:p-8 lg:p-10">

          {/* Project Outlay */}
          <div className="mb-10">
            <div className="mb-4 flex items-center justify-between">
              <label className="text-sm font-bold text-slate-900">
                Project / Enterprise Outlay (₹ Crore)
              </label>

              <span className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-yellow-500">
                ₹{outlay} Cr
              </span>
            </div>

            <input
              type="range"
              min="10"
              max="1000"
              step="10"
              value={outlay}
              onChange={(e) => setOutlay(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-yellow-500"
            />

            <div className="mt-3 flex justify-between text-xs font-semibold text-slate-500">
              <span>₹10 Cr</span>
              <span>₹150 Cr</span>
              <span>₹1,000 Cr</span>
            </div>
          </div>

          {/* Sector */}
          <div className="mb-8">
            <label className="mb-3 block text-sm font-bold text-slate-900">
              Sector Category
            </label>

            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
            >
              <option>
                Infrastructure & Construction (High Overrun Risk)
              </option>

              <option>
                Power, Energy & Utilities
              </option>

              <option>
                Manufacturing & Process Plants
              </option>

              <option>
                Defence Sales / Heavy Capital
              </option>
            </select>
          </div>

          {/* Audit Objective */}
          <div>
            <label className="mb-3 block text-sm font-bold text-slate-900">
              Primary Audit Objective
            </label>

            <select
              value={objective}
              onChange={(e) => setObjective(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-100"
            >
              <option>
                Mitigate Project Time & Cost Overruns
              </option>

              <option>
                Vendor & Strategic Procurement Audit
              </option>

              <option>
                M&A / IBBI Registered Asset Valuation
              </option>
            </select>
          </div>

        </div>

        {/* Right - Outcome */}
        <div className="bg-slate-50 p-6 sm:p-8 lg:p-10">

          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-yellow-600">
              Estimated Outcome Model
            </span>

            <h3 className="mt-2 text-2xl font-bold text-slate-900">
              Estimated Financial Impact
            </h3>
          </div>

          {/* Baseline Risk */}
          <div className="mb-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Baseline Risk Exposure
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Without Controls
                </p>
              </div>

              <p className="text-2xl font-extrabold text-slate-900">
                ₹{baselineRisk.toFixed(2)} Cr
              </p>
            </div>
          </div>

          {/* Savings */}
          <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                  Est. Retained Savings
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Via DB Controls
                </p>
              </div>

              <p className="text-2xl font-extrabold text-yellow-600">
                ₹{retainedSavings.toFixed(2)} Cr
              </p>
            </div>
          </div>

          {/* Visual Progress */}
          <div className="mt-8">
            <div className="mb-2 flex justify-between text-xs font-semibold">
              <span className="text-slate-600">
                Estimated Recovery
              </span>

              <span className="text-yellow-600">
                {(recoveryRate * 100).toFixed(0)}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-yellow-500 transition-all duration-500"
                style={{
                  width: `${recoveryRate * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Note */}
          <p className="mt-6 text-xs leading-6 text-slate-500">
            * Note: Model based on historical DB Consultancy project
            benchmark parameters (65%-75% variance recovery rate).
          </p>

          {/* CTA */}
          <a
            href="/contact"
            className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Request Detailed Audit Strategy
            <span className="ml-2 text-yellow-500">→</span>
          </a>

        </div>
      </div>
    </div>

  </div>
</section>


);
};

export default Audit;
