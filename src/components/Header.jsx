import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import WeborLogo from "./ui/WeborLogo";

const navLinks = [
  { to: "/", labelKey: "home" },
  { to: "/services", labelKey: "services" },
  { to: "/projects", labelKey: "projects" },
  { to: "/about", labelKey: "about" },
  { to: "/contact", labelKey: "contact" },
];

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0F1C]/95 backdrop-blur-md shadow-[0_2px_24px_rgba(255,79,163,0.12)] border-b border-[#FF4FA3]/15"
          : "bg-[#0A0F1C] border-b border-white/5"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[70px] px-4 md:px-8">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center flex-shrink-0">
          <WeborLogo height={38} />
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, labelKey }) => (
            <Link
              key={to}
              to={to}
              className={`relative px-4 py-2 text-[0.9rem] font-medium
                         rounded-lg transition-all duration-200 group
                         ${location.pathname === to ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {t(`nav.${labelKey}`)}
              <span
                className={`absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full
                           bg-gradient-to-r from-[#FF4FA3] to-[#FF2D8D]
                           transition-transform duration-300 origin-left
                           ${location.pathname === to ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA & Language Switcher ── */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm font-semibold text-gray-300 hover:text-white transition-colors
                       px-3 py-1.5 rounded-full border border-white/10 hover:border-[#FF4FA3]/30 transition-all duration-300"
          >
            <span className={language === 'fr' ? 'text-[#FF4FA3]' : 'text-gray-500'}>FR</span>
            <span className="text-gray-600">|</span>
            <span className={language === 'en' ? 'text-[#FF4FA3]' : 'text-gray-500'}>EN</span>
          </button>

          <Link to="/contact">
            <button
              className="bg-gradient-to-r from-[#FF4FA3] to-[#FF2D8D]
                         text-white font-semibold text-sm py-2.5 px-6 rounded-full
                         shadow-[0_0_20px_rgba(255,79,163,0.35)]
                         hover:shadow-[0_0_30px_rgba(255,79,163,0.55)]
                         hover:scale-105 active:scale-95
                         transition-all duration-200"
            >
              {t("nav.letsTalk")}
            </button>
          </Link>
        </div>

        {/* ── Mobile Hamburger ── */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full border border-white/10"
          >
            <span className={language === 'fr' ? 'text-[#FF4FA3]' : 'text-gray-500'}>FR</span>
            <span className="text-gray-600">|</span>
            <span className={language === 'en' ? 'text-[#FF4FA3]' : 'text-gray-500'}>EN</span>
          </button>
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="text-gray-300 hover:text-white focus:outline-none p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
      } bg-[#0A0F1C]/98 backdrop-blur-lg border-t border-white/5`}>
        <div className="px-4 pb-5 pt-3 space-y-1">
          {navLinks.map(({ to, labelKey }) => (
            <Link key={to} to={to} onClick={closeMenu}
              className={`block px-4 py-3 rounded-xl transition-all duration-200 font-medium text-center text-base
                         ${location.pathname === to 
                           ? "text-white bg-[#FF4FA3]/15 border border-[#FF4FA3]/25" 
                           : "text-gray-400 hover:text-white hover:bg-[#FF4FA3]/10"}`}>
              {t(`nav.${labelKey}`)}
            </Link>
          ))}
          <div className="pt-3">
            <Link to="/contact" onClick={closeMenu}>
              <button className="w-full bg-gradient-to-r from-[#FF4FA3] to-[#FF2D8D]
                                 text-white font-semibold py-3.5 rounded-full transition-all duration-200 
                                 shadow-[0_0_15px_rgba(255,79,163,0.3)] text-base min-h-[48px]">
                {t("nav.letsTalk")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
