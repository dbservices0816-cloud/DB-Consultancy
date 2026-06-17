import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              DB Consultancy
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Cost is not just a number — it is a strategic asset that
              drives growth.
            </p>

            <p className="text-gray-600 text-sm mt-4 leading-7">
              We combine Cost Accountancy, Finance and Technology to
              deliver strategic business insights and sustainable
              business growth.
            </p>
          </div>

          {/* Leadership Experience */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Leadership Experience
            </h3>

            <ul className="space-y-3 text-gray-600 text-sm">
              <li>✓ Adviser (Cost), Ministry of Defence</li>
              <li>✓ Chief Adviser, Ministry of Finance</li>
              <li>✓ Finance Leadership at Cargill & Aircel</li>
              <li>✓ Expertise in IBBI, MCA & GST Compliance</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/consultants"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Consultants
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-blue-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} DB Consultancy. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Serving Clients Across India & Globally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;