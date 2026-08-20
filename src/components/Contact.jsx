import React, { useState } from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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

    if (!form.name || !form.email || !form.service) {
      toast.error("Please fill required fields");
      return;
    }

    toast.success("Your request has been submitted!");

    setForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <div className="bg-slate-50 text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">
        {/* Background decoration */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-medium tracking-wide text-blue-300">
            GET IN TOUCH
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let’s Start a Conversation
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Whether you need a Cost Audit, Business Valuation, CFO Advisory,
            or Strategic Consultation, our experts are ready to help.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">

          {/* ================= FORM CARD ================= */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/50 md:p-10">

              <div className="mb-8">
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Send an Inquiry
                </span>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  How Can We Help?
                </h2>

                <p className="mt-3 text-slate-500">
                  Fill in the details below and our team will get back to you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name + Email */}
                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                </div>

                {/* Phone + Service */}
                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      Service <span className="text-red-500">*</span>
                    </label>

                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    >
                      <option value="">Select a service</option>
                      <option>Fractional CFO</option>
                      <option>Asset Valuation</option>
                      <option>Project Audit</option>
                      <option>Cost Optimization</option>
                      <option>M&A Advisory</option>
                    </select>
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
                >
                  Submit Request
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="text-center text-xs text-slate-400">
                  Your information is kept confidential and secure.
                </p>

              </form>
            </div>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div className="lg:col-span-2">
            <div className="h-full rounded-3xl bg-slate-950 p-7 text-white shadow-xl md:p-9">

              <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
                Contact Information
              </span>

              <h2 className="mt-3 text-3xl font-bold">
                We’re Here to Help
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Serving clients across India and globally with professional
                financial, cost management and strategic advisory solutions.
              </p>

              {/* Contact Cards */}
              <div className="mt-9 space-y-4">

                {/* Email */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-xl">
                    ✉
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Email
                    </p>
                    <p className="mt-1 break-all font-medium text-slate-200">
                      dbservices0816@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-xl">
                    ☎
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Phone
                    </p>
                    <p className="mt-1 font-medium text-slate-200">
                      +91 90132 03030
                    </p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-xl">
                    📍
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Office
                    </p>
                    <p className="mt-1 font-medium text-slate-200">
                      New Delhi, India
                    </p>
                  </div>
                </div>

              </div>

              {/* Availability */}
              <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></span>

                  <span className="text-sm font-medium text-blue-200">
                    Available for consultations
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Connect with our team to discuss your business requirements.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="border-y border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">

          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Our Expertise
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            Professional Solutions for Your Business
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Cost Audit",
                text: "Improve cost transparency and financial efficiency.",
              },
              {
                title: "Valuation",
                text: "Reliable valuation insights for better decisions.",
              },
              {
                title: "CFO Advisory",
                text: "Strategic financial guidance for business growth.",
              },
              {
                title: "M&A Advisory",
                text: "Navigate complex transactions with confidence.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  ✓
                </div>

                <h3 className="font-bold text-slate-900">
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

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-blue-700 px-6 py-20 text-center text-white">

        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-indigo-900/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Let’s Work Together
          </span>

          <h3 className="mt-4 text-3xl font-bold md:text-4xl">
            Let’s Build Financial Clarity Together
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-blue-100 leading-7">
            Connect with our experts for tailored advisory solutions designed
            around your business goals.
          </p>

          <button
            onClick={() =>
              document
                .querySelector("form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
          >
            Schedule Consultation →
          </button>

        </div>
      </section>

    </div>
  );
};

export default Contact;