import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white mt-20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block text-3xl font-bold tracking-tight"
            >
              DB <span className="text-blue-500">Consultancy</span>
            </Link>

            <div className="w-14 h-1 bg-blue-500 mt-4 mb-6 rounded-full"></div>

            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              Cost is not just a number — it is a strategic asset that
              drives growth.
            </p>

            <p className="text-gray-400 text-sm leading-7 mt-5 max-w-xl">
              We combine Cost Accountancy, Finance and Technology to
              deliver strategic business insights, strengthen financial
              performance and support sustainable business growth.
            </p>

            {/* CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-7 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Get in Touch
              <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Leadership */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Leadership Experience
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 text-gray-400">
                <span className="text-blue-500 font-bold">✓</span>
                <span>Adviser (Cost), Ministry of Defence</span>
              </li>

              <li className="flex gap-3 text-gray-400">
                <span className="text-blue-500 font-bold">✓</span>
                <span>Chief Adviser, Ministry of Finance</span>
              </li>

              <li className="flex gap-3 text-gray-400">
                <span className="text-blue-500 font-bold">✓</span>
                <span>Finance Leadership at Cargill & Aircel</span>
              </li>

              <li className="flex gap-3 text-gray-400">
                <span className="text-blue-500 font-bold">✓</span>
                <span>Expertise in IBBI, MCA & GST Compliance</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Consultants", path: "/consultants" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <span className="text-blue-500 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300">
                      →
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-14 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">

            {/* Copyright */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="text-gray-300 font-medium">
                DB Consultancy
              </span>
              . All Rights Reserved.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="text-blue-500">●</span>
              Serving Clients Across India & Globally
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600"></div>
    </footer>
  );
};

export default Footer;