import React from "react";

const CorporateMitra = () => {
return ( <section
   id="corporatemitra"
   className="border-b border-slate-200 bg-white py-20"
 > <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">


    {/* Section Intro */}
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <span className="text-xs font-bold uppercase tracking-widest text-yellow-600">
        Integrated Digital Engine
      </span>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900 md:text-4xl">
        CorporateMitraPortal.com Integration
      </h2>

      <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
        Seamlessly transition from strategic financial consulting to
        automated operational filings with our dedicated corporate
        compliance engine.
      </p>
    </div>

    {/* Main Content */}
    <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">

      {/* Secretarial & Corporate Filings */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-lg font-bold text-yellow-500">
          01
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          Secretarial & Corporate Filings
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          MCA filings, corporate secretarial compliances, board
          resolutions, and annual ROC returns.
        </p>
      </div>

      {/* International Trade & Export */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900 text-lg font-bold text-yellow-500">
          02
        </div>

        <h3 className="text-xl font-bold text-slate-900">
          International Trade & Export
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Export documentation, cross-border tax compliance packages,
          and international trade filings.
        </p>
      </div>

      {/* CorporateMitra Engine */}
      <div className="flex flex-col justify-between rounded-xl bg-slate-900 p-6 shadow-lg">

        <div>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-lg font-extrabold text-slate-900 shadow">
            CM
          </div>

          <h3 className="text-2xl font-bold text-white">
            CorporateMitra Engine
          </h3>

          <p className="mt-2 text-sm font-medium text-yellow-500">
            Automated Compliance Hub
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            Access our dedicated digital platform for streamlined
            corporate compliance and operational filing services.
          </p>
        </div>

        {/* External Portal Link */}
        <a
          href="https://www.corporatemitraportal.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-yellow-500 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-yellow-400"
        >
          Access Compliance Portal
          <span className="ml-2">→</span>
        </a>

      </div>

    </div>

  </div>
</section>


);
};

export default CorporateMitra;
