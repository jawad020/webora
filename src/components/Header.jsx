import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WeborLogo from "./ui/WeborLogo";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Our Team" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0F1C]/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,102,255,0.12)] border-b border-[#0066FF]/15"
          : "bg-[#0A0F1C] border-b border-white/5"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[70px] px-4 md:px-8">

        {/* ── Logo — no background, just the image on dark nav ── */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <WeborLogo height={38} />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative px-4 py-2 text-[0.9rem] font-medium text-gray-400
                         rounded-lg transition-all duration-200 group hover:text-white"
            >
              {label}
              <span
                className="absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full
                           bg-gradient-to-r from-[#0066FF] to-[#00A3FF]
                           scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button
              className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF]
                         text-white font-semibold text-sm py-2.5 px-6 rounded-full
                         shadow-[0_0_20px_rgba(0,102,255,0.35)]
                         hover:shadow-[0_0_30px_rgba(0,102,255,0.55)]
                         hover:scale-105 active:scale-95
                         transition-all duration-200"
            >
              Let's Talk
            </button>
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none p-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
      } bg-[#0A0F1C]/98 border-t border-white/5`}>
        <div className="px-4 pb-5 pt-2 space-y-1">
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} onClick={closeMenu}
              className="block px-4 py-2.5 text-gray-400 hover:text-white
                         hover:bg-[#0066FF]/10 rounded-lg transition-all duration-200 font-medium">
              {label}
            </Link>
          ))}
          <div className="pt-3">
            <Link to="/contact" onClick={closeMenu}>
              <button className="w-full bg-gradient-to-r from-[#0066FF] to-[#00A3FF]
                                 text-white font-semibold py-3 rounded-full transition-all duration-200">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
