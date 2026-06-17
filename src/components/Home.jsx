import { useState, useEffect } from "react";
import DB from "../assets/DB.png";
import AVD from "../assets/AVD.png";


const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    fname: "", lname: "", email: "", phone: "", service: "", message: "",
  });

  // 🔥 Better Images (clean + professional)
  const images = [
     DB,
  "https://plus.unsplash.com/premium_photo-1747949065380-72eb5f00750c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1920",
   "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 🔥 HERO */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">

        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
                i === currentBg
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-110"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}

          {/* 🔥 Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>



        {/* Content */}
        <div className="relative z-10 max-w-4xl text-center text-white px-6">
          
          <span className="inline-block text-xs tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full mb-6 backdrop-blur">
            Cost & Strategic Advisory
          </span>

          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            Precision in{" "}
            <span className="italic text-blue-300">
              Cost Management
            </span>{" "}
            & Strategic Advisory
          </h1>

          <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg">
            Bridging decades of Government of India expertise with private sector agility to drive profitability and compliance.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button
               onClick={() => (window.location.href = "/contact")}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 hover:bg-blue-800 transition"
            >
              Schedule a Consultation
            </button>

            <button className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
     {/* Stats Section */}
<div className="grid md:grid-cols-3 text-center border-y bg-white">
  {[
    { num: "35+", label: "Years of Government Experience" },
    { num: "FCMA", label: "Certified Experts" },
    { num: "3", label: "Core Service Pillars" },
  ].map((s, i) => (
    <div
      key={i}
      className="py-12 border-r last:border-r-0 hover:bg-gray-50 transition"
    >
      <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
        {s.num}
      </h3>
      <p className="text-gray-500 text-sm mt-3 tracking-wide">
        {s.label}
      </p>
    </div>
  ))}
</div>

{/* DB Advantage */}
<section
 style={{ backgroundImage: `url(${AVD})` }}
  className="relative py-24 px-6 bg-cover bg-center"
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto text-center text-white">
    <p className="text-sm uppercase text-blue-300 mb-3 tracking-[3px] font-semibold">
      Why Choose Us
    </p>

    <h2 className="text-4xl font-serif mb-16">
      The DB Advantage
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Unmatched Experience",
          body: "Led by a retired Adviser (Cost) with 35 years of service.",
        },
        {
          title: "Multidisciplinary Expertise",
          body: "FCMA, Registered Valuers, and CIMA professionals.",
        },
        {
          title: "End-to-End Solutions",
          body: "From project costing to CFO services.",
        },
      ].map((a, i) => (
        <div
          key={i}
className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-blue-300/20 via-purple-300/20 to-pink-300/20 backdrop-blur-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300"        >
          <div className="w-12 h-12 mx-auto mb-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-200 font-bold">
            {i + 1}
          </div>

          <h3 className="font-semibold text-lg mb-3 text-white">
            {a.title}
          </h3>

          <p className="text-gray-200 text-sm leading-relaxed">
            {a.body}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Core Pillars */}
<section className="py-24 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-serif mb-16">
      Our Core Pillars
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Project Management & Cost Control",
          body: "Cost estimation, overrun control, reporting.",
        },
        {
          title: "Cost & Pricing",
          body: "Advanced costing systems & pricing.",
        },
        {
          title: "Strategic Advisory",
          body: "M&A, valuation, CFO support.",
        },
      ].map((p, i) => (
        <div
          key={i}
          className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-300 border"
        >
          <h3 className="font-semibold text-lg mb-3 text-blue-700">
            {p.title}
          </h3>

          <p className="text-gray-500 text-sm leading-relaxed">
            {p.body}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* CTA */}
<div className="mx-6 mb-20 bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl p-14 text-center text-white shadow-xl">
  <h3 className="text-3xl font-serif mb-4">
    Ready to optimize your costs?
  </h3>

  <p className="text-blue-200 mb-8 max-w-xl mx-auto">
    Speak with our experts for a tailored advisory session.
  </p>

  <button
    onClick={() => window.location.href = "/contact"}
    className="bg-white text-blue-900 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg"
  >
    Book Consultation
  </button>
</div>
    </>
  );
};

export default Home;