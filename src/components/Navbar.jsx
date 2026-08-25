import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DBC from "../assets/DBC.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Consultants", path: "/consultants" },
    { name: "Compliance", path: "/compliance" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#111315]/95 text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center"
        >
          <div className="flex items-center gap-2">
            <img
              src={DBC}
              alt="DB Consultancy"
                className="h-20 w-auto object-contain"
            />
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative rounded-lg px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive(item.path)
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.name}

              {/* Active indicator */}
              {isActive(item.path) && (
                <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-amber-400" />
              )}
            </Link>
          ))}
        </div>

        {/* ================= DESKTOP CTA ================= */}
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-gray-900 shadow-[0_5px_20px_rgba(251,191,36,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-[0_8px_25px_rgba(251,191,36,0.2)] lg:inline-flex"
        >
          Get Consultation
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10 hover:text-white lg:hidden"
        >
          {menuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#17191c] transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition ${
                  isActive(item.path)
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{item.name}</span>

                {isActive(item.path) && (
                  <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,.8)]" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3.5 text-sm font-bold text-gray-900 transition hover:bg-amber-300"
          >
            Get Consultation
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;