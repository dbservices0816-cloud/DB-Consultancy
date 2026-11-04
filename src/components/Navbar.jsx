
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DBC from "../assets/DBC.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Heritage", to: "/heritage" },
    { name: "Impact & Cases", to: "/impact" },
    { name: "Leadership", to: "/leadership" },
    { name: "Audit Review", to: "/calculator" },
    { name: "Compliance Portal", to: "/compliance" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#C5A880]/30 bg-[#0F2C59] text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

            {/* ================= LOGO ================= */}
          <a
            href="/"
            onClick={handleLinkClick}
            className="flex items-center gap-3"
          >
            {/* DB Logo */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center"> <img src={DBC} alt="DB Consultancy Logo" className="h-10 w-10 object-contain" /> </div>

            {/* Brand */}
            <div>
              <span className="block text-lg font-bold leading-none tracking-wider text-white sm:text-xl">
                DB CONSULTANCY
              </span>

              <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.18em] text-[#C5A880] sm:text-xs">
                Strategic Cost Management
              </span>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-5 text-base font-bold lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="whitespace-nowrap py-2 text-slate-200 transition-colors duration-200 hover:text-[#C5A880]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex">
            <Link
              to="/contact"
              className="rounded bg-[#C5A880] px-4 py-2.5 text-sm font-semibold text-[#0F2C59] shadow transition-all duration-200 hover:bg-[#B08E59]"
            >
              Schedule Audit
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded text-slate-200 transition hover:text-[#C5A880] lg:hidden"
            aria-label="Toggle Navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-[#C5A880]/20 bg-[#0A192F] lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={handleLinkClick}
                  className="border-b border-slate-700/50 py-3.5 text-sm font-medium text-slate-200 transition-colors duration-200 hover:text-[#C5A880]"
                >
                  {link.name}
                </Link>
              ))}

              {/* MOBILE CTA */}
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="mt-4 block rounded bg-[#C5A880] px-4 py-3 text-center text-sm font-semibold text-[#0F2C59] transition-colors duration-200 hover:bg-[#B08E59]"
              >
                Schedule Strategic Audit
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
