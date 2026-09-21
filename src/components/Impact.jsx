import React, { useEffect, useRef } from "react";

const Impact = () => {
const sectorChartRef = useRef(null);
const savingsChartRef = useRef(null);

useEffect(() => {
const loadChart = async () => {
if (typeof window === "undefined") return;


  if (!window.Chart) {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.async = true;

    script.onload = () => {
      createCharts();
    };

    document.body.appendChild(script);
  } else {
    createCharts();
  }
};

const createCharts = () => {
  if (!window.Chart) return;

  if (sectorChartRef.current) {
    new window.Chart(sectorChartRef.current, {
      type: "doughnut",
      data: {
        labels: [
          "Infrastructure & Tariffs",
          "Power & Energy",
          "Defence Procurement",
          "Risk & Insurance",
        ],
        datasets: [
          {
            data: [35, 25, 20, 20],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 18,
              font: {
                size: 11,
              },
            },
          },
        },
      },
    });
  }

  if (savingsChartRef.current) {
    new window.Chart(savingsChartRef.current, {
      type: "bar",
      data: {
        labels: [
          "Infrastructure",
          "Power & Energy",
          "Defence",
          "Risk & Insurance",
        ],
        datasets: [
          {
            label: "Cost Reduction %",
            data: [15, 18, 22, 17],
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 30,
            ticks: {
              callback: function (value) {
                return value + "%";
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
};

loadChart();


}, []);

return (
<>
{/* PAGE 4: CASE STUDIES & PROVEN IMPACT */}


  <section
    id="impact"
    className="border-b border-slate-200 bg-white py-20"
  >
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      {/* Section Intro */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-yellow-600">
          Track Record & Case Studies
        </span>

        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Proven Policy & Commercial Impact
        </h2>

        <p className="mt-3 text-sm text-slate-600 sm:text-base">
          From national tariff standardization for major ports to
          multi-million-dollar defence procurement cost verifications,
          explore our demonstrated outcome metrics below.
        </p>
      </div>

      {/* Case Studies */}
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">

        {/* Case 1 */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="space-y-3">

            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
                INFRASTRUCTURE & TARIFFS
              </span>

              <span className="text-right text-xs font-bold uppercase text-yellow-600">
                Ministry of Shipping
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
             Infrastructure, Energy, Airport Tariff Framework
            </h3>

            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              Formulated and finalized the first standardized economic
              tariff determination model for major port trusts across
              India, balancing cost recovery with competitive maritime
              trade pricing.
            </p>

          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-xs font-semibold text-slate-900">
            <span>Impact Outcome</span>

            <span className="text-right text-yellow-600">
              Standardized Economic Tariff Framework
            </span>
          </div>
        </div>

        {/* Case 2 */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="space-y-3">

            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
                POWER & ENERGY
              </span>

              <span className="text-right text-xs font-bold uppercase text-yellow-600">
                CERC / NTPC
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Power Generation Regulatory Pricing Norms
            </h3>

            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              Executed complex cost and tariff benchmarking studies for
              major NTPC power plants, establishing revised regulatory
              norms for national thermal power generation pricing.
            </p>

          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-xs font-semibold text-slate-900">
            <span>Impact Outcome</span>

            <span className="text-right text-yellow-600">
              Revised Regulatory Tariff Norms
            </span>
          </div>
        </div>

        {/* Case 3 */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="space-y-3">

            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
                DEFENCE PROCUREMENT
              </span>

              <span className="text-right text-xs font-bold uppercase text-yellow-600">
                Ministry of Defence
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              High-Value Non-Competitive Contract Verification
            </h3>

            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              Served on Contract Negotiation Committees (CNCs) for
              non-competitive, multi-billion-dollar defence acquisitions,
              conducting cost audits and negotiating fair prices.
            </p>

          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-xs font-semibold text-slate-900">
            <span>Impact Outcome</span>

            <span className="text-right text-yellow-600">
              Multi-Billion $ Capital Cost Optimization
            </span>
          </div>
        </div>

        {/* Case 4 */}
        <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <div className="space-y-3">

            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-bold text-white">
                RISK & INSURANCE
              </span>

              <span className="text-right text-xs font-bold uppercase text-yellow-600">
                GIFT City Infrastructure
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              GIFT City Infrastructure Re-Insurance Structuring
            </h3>

            <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
              Structured direct global reinsurance placement for major
              infrastructure assets, eliminating intermediary broker
              markups and optimizing risk coverage.
            </p>

          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-xs font-semibold text-slate-900">
            <span>Impact Outcome</span>

            <span className="text-right text-yellow-600">
              ₹9 Crore Direct Savings Secured
            </span>
          </div>
        </div>

      </div>

      {/* Interactive Visual Analytics */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">

        <div className="mb-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            Strategic Impact Analytics
          </h3>

          <p className="text-xs text-slate-600 sm:text-sm">
            Quantitative summary of practice assignments by sector and
            cost savings magnitude
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">

          {/* Chart 1 */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

            <h4 className="mb-4 text-center text-sm font-bold text-slate-900">
              Practice Footprint by Sector
            </h4>

            <div className="relative h-[300px] w-full">
              <canvas ref={sectorChartRef}></canvas>
            </div>

            <p className="mt-3 text-center text-xs text-slate-500">
              Breakdown of advisory assignments across major public &
              enterprise sectors
            </p>

          </div>

          {/* Chart 2 */}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">

            <h4 className="mb-4 text-center text-sm font-bold text-slate-900">
              Representative Cost Overrun Reduction (%)
            </h4>

            <div className="relative h-[300px] w-full">
              <canvas ref={savingsChartRef}></canvas>
            </div>

            <p className="mt-3 text-center text-xs text-slate-500">
              Average percentage reduction in financial variance post DB
              Consultancy intervention
            </p>

          </div>

        </div>
      </div>

    </div>
  </section>

  {/* PAGE 5: EXPERT CONSULTANT DIRECTORY */}

 
</>


);
};

export default Impact;
