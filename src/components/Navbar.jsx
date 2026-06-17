import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DBC from "../assets/DBC.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
       <Link to="/" className="flex items-center">
  <img
    src={DBC}
    alt="DB Consultancy Logo"
    className="h-16 w-auto object-contain"
  />
</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

          <li>
            <Link to="/" className="hover:text-yellow-400 transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-yellow-400 transition">
              Services
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-yellow-400 transition">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/consultants" className="hover:text-yellow-400 transition">
              Consultants
            </Link>
          </li>

          <li>
            <Link to="/compliance" className="hover:text-yellow-400 transition">
              Compliance
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </li>

        </ul>

        {/* CTA Button */}
        <Link to="/contact">
          <button className="hidden md:block bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Get Consultation
          </button>
        </Link>

        {/* Hamburger */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-6 flex flex-col gap-4 text-sm">

          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
            Home
          </Link>

          <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
            Services
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
            About Us
          </Link>

          <Link to="/consultants" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
            Consultants
          </Link>

          <Link to="/compliance" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
            Compliance
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-400">
            Contact
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="mt-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold">
              Get Consultation
            </button>
          </Link>

        </div>
      )}
    </nav>
  )
}

export default Navbar