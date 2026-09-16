
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "services" },
    { name: "Heritage", href: "heritage" },
    { name: "Impact & Cases", href: "impact" },
    { name: "Leadership", href: "leadership" },
    { name: "Audit Tool", href: "calculator" },
    { name: "Compliance Portal", href: "compliance" },
    
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
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#C5A880] text-xl font-bold text-[#0F2C59] shadow">
              DB
            </div>

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

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden items-center gap-5 text-sm font-medium lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap py-2 text-slate-200 transition-colors duration-200 hover:text-[#C5A880]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden lg:flex">
            <a
              href="/contact"
              className="rounded bg-[#C5A880] px-4 py-2.5 text-sm font-semibold text-[#0F2C59] shadow transition-all duration-200 hover:bg-[#B08E59]"
            >
              Schedule Audit
            </a>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded text-slate-200 transition hover:text-[#C5A880] lg:hidden"
            aria-label="Toggle Navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              /* X Icon */
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
              /* Hamburger Icon */
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

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="border-t border-[#C5A880]/20 bg-[#0A192F] lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="border-b border-slate-700/50 py-3.5 text-sm font-medium text-slate-200 transition-colors duration-200 hover:text-[#C5A880]"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href="/contact"
                onClick={handleLinkClick}
                className="mt-4 block rounded bg-[#C5A880] px-4 py-3 text-center text-sm font-semibold text-[#0F2C59] transition-colors duration-200 hover:bg-[#B08E59]"
              >
                Schedule Strategic Audit
              </a>
            </nav>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

