import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-bold tracking-wide">DB</h2>
              <p className="mt-1 text-lg font-semibold text-white">
                DB CONSULTANCY
              </p>
            </div>

            <p className="max-w-sm text-sm leading-6 text-slate-400">
              Strategic Cost Management, IBBI Valuation & Project Control
              Advisory.
            </p>
          </div>

          {/* Practice Verticals */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Practice Verticals
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>Project Cost Control</li>
              <li>Operational Profitability</li>
              <li>IBBI Registered Valuations (SFA)</li>
              <li>Insolvency & Restructuring</li>
            </ul>
          </div>

          {/* Key Credentials */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Key Credentials
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>Ex-Chief Adviser (Cost) GoI</li>
              <li>FCMA & CIPFA (UK)</li>
              <li>IBBI Registered Valuers</li>
              <li>MTech IT & MSc Finance</li>
            </ul>
          </div>

          {/* Digital Platform */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
              Digital Platform
            </h3>

            <p className="text-sm leading-6 text-slate-400">
              Integrated with CorporateMitra compliance ecosystem.
            </p>

            <a
  href="https://corporatemitraportal.com"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-5 inline-flex items-center text-sm font-semibold text-white transition hover:text-slate-300"
>
  CorporateMitraPortal.com
  <span className="ml-2">→</span>
</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 DB Consultancy. All rights reserved.</p>

            <p>Built for Executive Clarity & Corporate Governance.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;