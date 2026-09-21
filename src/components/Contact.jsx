import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    consultant: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.service || !form.message) {
      toast.error("Please fill all required fields");
      return;
    }

    toast.success("Your consultation request has been submitted!");

    setForm({
      name: "",
      email: "",
      service: "",
      consultant: "",
      message: "",
    });
  };

  return (
    <div className="bg-white text-slate-900">
      {/* ================= HERO ================= */}
      <section
        id="contact"
        className="relative overflow-hidden bg-white px-6 py-24 text-slate-900"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-yellow-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm font-medium tracking-wide text-yellow-600">
            DIRECT ENGAGEMENT
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Schedule & Audit Review
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Connect with our senior principal advisers across our domestic
            offices or international advisory desk.
          </p>
        </div>
      </section>

      {/* ================= MAIN CONTACT ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
          {/* ================= CONTACT INFORMATION ================= */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 text-slate-900 shadow-xl md:p-9">
              <span className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
                Direct Engagement
              </span>

              <h2 className="mt-3 text-3xl font-bold">Office Locations</h2>

              <p className="mt-4 leading-7 text-slate-500">
                Connect with our senior advisers through our domestic offices
                or international advisory desk.
              </p>

              {/* Office Locations */}
              <div className="mt-9 space-y-4">
                {/* Head Office */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-xl">
                      📍
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        Head Office
                      </p>

                      <p className="mt-2 leading-6 text-slate-700">
                        UKG-11,5 Bhikaji Cama Place, Somdutt Chamber, New
                        Delhi - 110066
                      </p>
                    </div>
                  </div>
                </div>

                {/* International Desk */}
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:bg-slate-100">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-yellow-500/10 text-xl">
                      🌐
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        International Advisory Desk
                      </p>

                      <p className="mt-2 font-medium text-slate-700">
                        Newcastle upon Tyne, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Phone & Email */}
              <div className="mt-8 border-t border-slate-200 pt-8">
                <h3 className="text-lg font-bold text-slate-900">
                  Direct Phone & Email
                </h3>

                {/* Phone */}
                <div className="mt-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-lg">
                    ☎
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Phone
                    </p>

                    <div className="mt-1 space-y-1">
                      <a
                        href="tel:+919013203030"
                        className="block font-medium text-slate-700 transition hover:text-yellow-600"
                      >
                        +91 90132 03030
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mt-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-500/10 text-lg">
                    ✉
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <div className="mt-1 space-y-1">
                      <a
                        href="mailto:dbservices0816@gmail.com"
                        className="block break-all font-medium text-slate-700 transition hover:text-yellow-600"
                      >
                        dbservices0816@gmail.com
                      </a>

                      <a
                        href="mailto:office@icmaconsulting.com"
                        className="block break-all font-medium text-slate-700 transition hover:text-yellow-600"
                      >
                        office@icmaconsulting.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time SLA */}
              <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-5">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />

                  <span className="text-sm font-medium text-yellow-700">
                    Response Time SLA
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  All audit and corporate valuation inquiries are responded to
                  directly by a Senior Consultant within 24 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* ================= FORM ================= */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 md:p-10">
              {/* Form Header */}
              <div className="mb-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-yellow-600">
                  Inquiry & Strategic Audit Form
                </span>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  Schedule a Strategic Audit
                </h2>

                <p className="mt-3 text-slate-500">
                  Share your requirements and our senior advisory team will
                  get back to you directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name + Email */}
                <div className="grid gap-5 md:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10"
                    />
                  </div>

                  {/* Corporate Email */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Corporate Email <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10"
                    />
                  </div>
                </div>

                {/* Service + Consultant */}
                <div className="grid gap-5 md:grid-cols-2">
                  {/* Service */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Service Required{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10"
                    >
                      <option value="">-- Select Primary Service --</option>
                      <option>Project Cost Audit & Overrun Control</option>
                      <option>IBBI Registered Asset Valuation</option>
                      <option>Insolvency & IBC Process Advisory</option>
                      <option>Fractional CFO Leadership</option>
                      <option>Strategic Procurement Audit</option>
                    </select>
                  </div>

                  {/* Preferred Consultant */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Preferred Consultant
                    </label>

                    <select
                      name="consultant"
                      value={form.consultant}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10"
                    >
                      <option value="">Any Principal Adviser</option>
                      <option>
                        Dinesh C. Bajaj (Ex-Chief Adviser Cost)
                      </option>
                      <option>Parmanand Goyal (Ex-ED IOCL)</option>
                      <option>Jagdish Lal Raheja (Ex-Group CFO)</option>
                    </select>
                  </div>
                </div>

                {/* Project Overview */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Project Overview / Scope Message{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Please describe your project, business requirements, audit scope, or valuation needs..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-yellow-500 focus:bg-white focus:ring-4 focus:ring-yellow-500/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-xl"
                >
                  Send Consultation Request

                  <span className="text-lg text-yellow-500 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="text-center text-xs text-slate-400">
                  Your information is kept confidential and secure.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="relative overflow-hidden bg-yellow-500 px-6 py-20 text-center text-slate-950">
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-slate-900/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-slate-700">
            Direct Senior Advisory Access
          </span>

          <h3 className="mt-4 text-3xl font-bold md:text-4xl">
            Discuss Your Strategic Requirements
          </h3>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-700">
            Connect directly with our senior consultants for cost audits,
            valuation, procurement reviews, insolvency advisory and strategic
            financial solutions.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-xl bg-slate-950 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
          >
            Schedule Consultation
            <span className="ml-2 text-yellow-500">→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;