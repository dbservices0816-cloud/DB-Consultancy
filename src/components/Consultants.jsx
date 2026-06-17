// Consultants.jsx — Ultra Premium Fully Responsive UI (375px / 425px / Tablet / Desktop)

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#f8fafc] py-14 sm:py-16 lg:py-24">
      
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-slate-200 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 text-[10px] min-[375px]:text-[11px] sm:text-xs md:text-sm font-bold tracking-[2px] uppercase">
            Elite Consulting Team
          </span>

          <h2 className="mt-5 sm:mt-6 text-[30px] leading-[38px] min-[375px]:text-[34px] min-[375px]:leading-[42px] sm:text-5xl lg:text-6xl font-black text-slate-900">
            Meet Our
            <span className="text-red-600"> Consultants</span>
          </h2>

          <div className="w-16 sm:w-24 h-1 bg-red-600 rounded-full mx-auto mt-4 sm:mt-6"></div>

          <p className="mt-5 sm:mt-6 max-w-3xl mx-auto text-slate-600 text-[14px] sm:text-base lg:text-lg leading-7 px-1 sm:px-0">
            Experienced industry leaders delivering excellence in strategic
            advisory, corporate finance, infrastructure, telecom, and business
            transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          
          {consultantsData.map((consultant) => (
            <div
              key={consultant.id}
              className="group relative bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4"
            >
              
              {/* Image Section */}
              <div className="relative overflow-hidden">
                
                <div className="relative h-[260px] min-[375px]:h-[300px] min-[425px]:h-[340px] sm:h-[420px] lg:h-[460px] overflow-hidden">
                  
                  {/* Image */}
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="
                      w-full 
                      h-full 
                      object-cover 
                      object-top 
                      transition-all 
                      duration-700 
                      group-hover:scale-110
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 sm:top-5 sm:left-5">
                    <span
                      className="
                        bg-white/20 
                        backdrop-blur-md 
                        border 
                        border-white/20 
                        text-white 
                        text-[9px] 
                        min-[375px]:text-[10px]
                        sm:text-xs 
                        px-3 
                        py-1.5 
                        rounded-full 
                        font-semibold 
                        tracking-wide
                      "
                    >
                      Senior Consultant
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    
                    <p
                      className="
                        text-red-300 
                        uppercase 
                        tracking-[2px] 
                        text-[9px] 
                        min-[375px]:text-[10px]
                        sm:text-xs 
                        font-bold 
                        mb-2
                      "
                    >
                      {consultant.designation}
                    </p>

                    <h3
                      className="
                        text-white 
                        text-[22px] 
                        leading-[28px]
                        min-[375px]:text-[24px]
                        min-[375px]:leading-[30px]
                        sm:text-3xl 
                        font-bold
                      "
                    >
                      {consultant.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-7">
                
                {/* Background */}
                <div className="mb-4 sm:mb-5">
                  <h4 className="text-[16px] sm:text-lg font-bold text-slate-900 mb-2">
                    Background
                  </h4>

                  <p className="text-slate-600 text-[13px] sm:text-sm leading-6">
                    {consultant.background}
                  </p>
                </div>

                {/* Expertise */}
                <div className="mb-4 sm:mb-5">
                  <h4 className="text-[16px] sm:text-lg font-bold text-slate-900 mb-2">
                    Expertise
                  </h4>

                  <p className="text-slate-600 text-[13px] sm:text-sm leading-6">
                    {consultant.expertise}
                  </p>
                </div>

                {/* Qualifications */}
                <div className="mb-6">
                  <h4 className="text-[16px] sm:text-lg font-bold text-slate-900 mb-2">
                    Qualifications
                  </h4>

                  <p className="text-slate-600 text-[13px] sm:text-sm leading-6">
                    {consultant.qualifications}
                  </p>
                </div>

                {/* Button */}
                <Link
                  to="/contact"
                  className="group/btn flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-red-600 text-white py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-[13px] sm:text-sm tracking-wide transition-all duration-300"
                >
                  Connect With Consultant

                  <ArrowRight
                    size={18}
                    className="group-hover/btn translate-x-1 transition duration-300"
                  />
                </Link>
              </div>

              {/* Premium Hover Border */}
              <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] border border-transparent group-hover:border-yellow-400/80 group-hover:shadow-[0_0_40px_rgba(250,204,21,0.35)] transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Consultants;
