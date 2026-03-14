import React from "react";
import { Link } from "react-router-dom";
import "../styles/Hero.css";
import HeroMove from "../components/ui/HeroMove";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <div style={{ background: "#0A0F1C" }}>
      <section className="relative overflow-hidden" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        {/* Gradient glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0066FF] opacity-10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#00A3FF] opacity-8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* ── Badge ── */}
          <div className="flex justify-start mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             border border-[#0066FF]/30 bg-[#0066FF]/10
                             text-[#00A3FF] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#00A3FF] animate-pulse" />
              WEBORA Digital Agency
            </span>
          </div>

          {/* ── Headline ── */}
          <div className="mb-8 max-w-4xl">
            <h1 className="font-bold leading-tight text-white mb-4"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", lineHeight: 1.1 }}>
              {t("hero.headline")}
            </h1>
          </div>

          {/* ── Description ── */}
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            {t("hero.description")}
          </p>

          {/* ── CTA Buttons ── */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link to="/contact">
              <button
                className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF]
                           text-white font-semibold px-8 py-3.5 rounded-full
                           shadow-[0_0_30px_rgba(0,102,255,0.4)]
                           hover:shadow-[0_0_45px_rgba(0,102,255,0.6)]
                           hover:scale-105 active:scale-95
                           transition-all duration-200 text-base"
              >
                {t("hero.startProject")}
              </button>
            </Link>
            <Link to="/projects">
              <button
                className="border border-white/20 text-white font-semibold px-8 py-3.5 rounded-full
                           hover:bg-white/8 hover:border-[#0066FF]/50
                           transition-all duration-200 text-base backdrop-blur-sm"
              >
                {t("hero.viewWork")}
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Scrolling ticker ── */}
      <div className="heromove border-t border-white/5">
        <HeroMove />
      </div>
    </div>
  );
};

export default Hero;
