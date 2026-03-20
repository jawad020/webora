import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Hero.css";
import HeroMove from "../components/ui/HeroMove";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <div style={{ background: "#0A0F1C" }} className="overflow-hidden">
      <section className="relative overflow-hidden" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        {/* Gradient glow blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF4FA3] opacity-10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#FF2D8D] opacity-8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-60 h-60 bg-[#FF4FA3] opacity-5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* ── Badge ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-start mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                             border border-[#FF4FA3]/30 bg-[#FF4FA3]/10
                             text-[#FF4FA3] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#FF4FA3] animate-pulse" />
              WEBORA Digital Agency
            </span>
          </motion.div>

          {/* ── Headline ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 max-w-4xl"
          >
            <h1 className="font-bold leading-tight text-white mb-4"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: 1.1 }}>
              {t("hero.headline")}
            </h1>
          </motion.div>

          {/* ── Description ── */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link to="/contact">
              <button
                className="w-full sm:w-auto bg-gradient-to-r from-[#FF4FA3] to-[#FF2D8D]
                           text-white font-semibold px-8 py-4 rounded-full
                           shadow-[0_0_30px_rgba(255,79,163,0.4)]
                           hover:shadow-[0_0_50px_rgba(255,79,163,0.6)]
                           hover:scale-105 active:scale-95
                           transition-all duration-300 text-base min-h-[52px]"
              >
                {t("hero.startProject")}
              </button>
            </Link>
            <Link to="/projects">
              <button
                className="w-full sm:w-auto border border-white/20 text-white font-semibold px-8 py-4 rounded-full
                           hover:bg-white/5 hover:border-[#FF4FA3]/50
                           transition-all duration-300 text-base backdrop-blur-sm min-h-[52px]"
              >
                {t("hero.viewWork")}
              </button>
            </Link>
          </motion.div>
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
