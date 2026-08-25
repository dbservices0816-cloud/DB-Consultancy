import { useEffect, useState } from "react";
import DB from "../assets/DB.png";
import AVD from "../assets/AVD.png";

const Home = () => {
  // =========================================================
  // HERO IMAGE SLIDER
  // =========================================================
  const images = [
    DB,
    "https://plus.unsplash.com/premium_photo-1747949065380-72eb5f00750c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1920",
    "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG93by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  // =========================================================
  // DATA
  // =========================================================

  const stats = [
    {
      number: "35+",
      label: "Years of Government Experience",
    },
    {
      number: "FCMA",
      label: "Certified Experts",
    },
    {
      number: "03",
      label: "Core Service Pillars",
    },
  ];

  const advantages = [
    {
      number: "01",
      title: "Unmatched Experience",
      body: "Led by a retired Adviser (Cost) with 35 years of service.",
    },
    {
      number: "02",
      title: "Multidisciplinary Expertise",
      body: "FCMA, Registered Valuers, and CIMA professionals.",
    },
    {
      number: "03",
      title: "End-to-End Solutions",
      body: "From project costing to CFO services.",
    },
  ];

  const pillars = [
    {
      number: "01",
      title: "Project Management & Cost Control",
      body: "Cost estimation, overrun control, reporting.",
    },
    {
      number: "02",
      title: "Cost & Pricing",
      body: "Advanced costing systems & pricing.",
    },
    {
      number: "03",
      title: "Strategic Advisory",
      body: "M&A, valuation, CFO support.",
    },
  ];

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <main className="bg-white text-slate-900 overflow-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">

        {/* Background Slider */}
        <div className="absolute inset-0 z-0">

          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-in-out ${
                index === currentBg
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
              style={{
                backgroundImage: `url(${img})`,
              }}
            />
          ))}

          {/* Dark Premium Overlay */}
          <div className="absolute inset-0 bg-slate-950/65" />

          {/* Left Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/20" />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

        </div>

        {/* Decorative Glow */}
        <div className="absolute -top-40 -right-40 w-[550px] h-[550px] bg-blue-500/10 rounded-full blur-3xl" />

        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="max-w-4xl">

            {/* Glass Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
              </span>

              <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-blue-100">
                Cost & Strategic Advisory
              </span>

            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-serif leading-[1.02] tracking-tight text-white">

              Precision in

              <span className="block mt-3 italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400">
                Cost Management
              </span>

              <span className="block mt-3">
                & Strategic Advisory
              </span>

            </h1>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-base md:text-lg lg:text-xl leading-relaxed text-slate-300">
              Bridging decades of Government of India expertise with
              private sector agility to drive profitability and compliance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={() => (window.location.href = "/contact")}
                className="group px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-2xl shadow-blue-900/40 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  Schedule a Consultation

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </button>

              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="px-7 py-4 rounded-xl border border-white/25 bg-white/10 hover:bg-white/15 backdrop-blur-xl text-white font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                Explore Our Expertise
              </button>

            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-12 text-sm text-slate-300">

              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">✓</span>
                Government Expertise
              </div>

              <span className="hidden sm:block h-4 w-px bg-white/20" />

              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">✓</span>
                Professional Advisory
              </div>

              <span className="hidden sm:block h-4 w-px bg-white/20" />

              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">✓</span>
                Business Focused
              </div>

            </div>

          </div>

          {/* Slider Controls */}
          <div className="absolute bottom-8 right-6 md:right-10 flex items-center gap-2">

            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBg(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentBg
                    ? "w-12 bg-blue-400"
                    : "w-5 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          PREMIUM STATS
      ====================================================== */}
      <section className="relative bg-white border-y border-slate-200">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3">

          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative py-12 lg:py-14 px-8 text-center overflow-hidden ${
                index !== stats.length - 1
                  ? "md:border-r border-slate-200"
                  : ""
              }`}
            >

              {/* Hover Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/70 to-white opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10">

                <h3 className="text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {stat.number}
                </h3>

                <div className="w-10 h-px bg-blue-500 mx-auto mt-4 mb-4 group-hover:w-16 transition-all duration-500" />

                <p className="text-sm text-slate-500 uppercase tracking-[0.16em]">
                  {stat.label}
                </p>

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* =====================================================
          PHILOSOPHY
      ====================================================== */}
      <section className="py-24 lg:py-32 px-6 bg-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mb-5">
              Our Philosophy
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-slate-900">

              Turning complexity into

              <span className="block italic text-blue-600 mt-2">
                clarity.
              </span>

            </h2>

          </div>

          {/* Right */}
          <div>

            <p className="text-lg leading-8 text-slate-600">
              Businesses need more than numbers. They need clarity,
              control and strategic direction. Our advisory approach
              combines deep cost-management expertise with commercial
              insight to help organizations make better decisions.
            </p>

            <div className="mt-8 h-px bg-slate-200" />

            <div className="flex items-center gap-4 mt-7">

              <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 font-bold shadow-sm">
                DB
              </div>

              <div>
                <p className="font-semibold text-slate-900">
                  DB Advisory
                </p>

                <p className="text-sm text-slate-500">
                  Cost • Strategy • Growth
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          DB ADVANTAGE
      ====================================================== */}
      <section
        className="relative py-28 lg:py-36 px-6 bg-cover bg-center"
        style={{
          backgroundImage: `url(${AVD})`,
        }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-slate-950/80 to-black/90" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <div className="max-w-3xl mb-16">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-300 font-semibold mb-5">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
              The DB{" "}
              <span className="italic text-blue-300">
                Advantage
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-2xl">
              Experience, expertise and practical business thinking
              brought together under one advisory platform.
            </p>

          </div>

          {/* Advantage Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

            {advantages.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 lg:p-10 rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-xl hover:bg-white/[0.12] hover:border-blue-400/30 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-500"
              >

                {/* Top */}
                <div className="flex items-center justify-between mb-10">

                  <span className="text-sm text-blue-300 font-semibold tracking-[0.2em]">
                    {item.number}
                  </span>

                  <span className="text-4xl font-serif text-white/20 group-hover:text-blue-300/50 transition">
                    +
                  </span>

                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center text-blue-300 font-bold mb-6">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 leading-7">
                  {item.body}
                </p>

                {/* Bottom Line */}
                <div className="mt-8 h-px w-0 bg-blue-400 group-hover:w-full transition-all duration-700" />

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          CORE PILLARS
      ====================================================== */}
      <section
        id="services"
        className="py-28 lg:py-36 px-6 bg-slate-50"
      >

        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mb-5">
                What We Do
              </p>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900">
                Our Core{" "}
                <span className="italic text-blue-600">
                  Pillars
                </span>
              </h2>

            </div>

            <p className="max-w-lg text-slate-500 leading-7">
              Practical advisory solutions designed to improve
              financial control, profitability and long-term business
              performance.
            </p>

          </div>

          {/* Service Cards */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">

            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group relative bg-white border border-slate-200 rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-3 hover:border-blue-200 transition-all duration-500 overflow-hidden"
              >

                {/* Number */}
                <div className="flex items-center justify-between mb-12">

                  <span className="text-sm font-bold tracking-[0.2em] text-blue-600">
                    {pillar.number}
                  </span>

                  <div className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-blue-500 group-hover:text-blue-600 group-hover:bg-blue-50 transition-all duration-300">
                    →
                  </div>

                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif text-slate-900 leading-snug mb-5">
                  {pillar.title}
                </h3>

                {/* Body */}
                <p className="text-slate-500 leading-7">
                  {pillar.body}
                </p>

                {/* Bottom Animation */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 group-hover:w-full transition-all duration-700" />

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          PREMIUM CTA
      ====================================================== */}
      <section className="px-6 py-24 lg:py-32 bg-white">

        <div className="relative max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">

          {/* Background Glow */}
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl" />

          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl" />

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-[2rem] border border-white/10" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 lg:px-24 lg:py-20 text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-blue-300 font-semibold mb-5">
              Let's Work Together
            </p>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight max-w-4xl mx-auto">

              Ready to optimize your

              <span className="block italic text-blue-300 mt-2">
                costs?
              </span>

            </h3>

            <p className="mt-6 text-lg leading-relaxed text-slate-300 max-w-xl mx-auto">
              Speak with our experts for a tailored advisory session
              built around your business objectives.
            </p>

            <button
              onClick={() => (window.location.href = "/contact")}
              className="group mt-10 px-9 py-4 rounded-xl bg-white text-slate-950 font-semibold hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <span className="flex items-center gap-3">
                Book Consultation

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Home;