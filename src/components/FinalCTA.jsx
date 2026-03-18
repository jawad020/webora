import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const FinalCTA = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0F1C]">
      {/* Background gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-gradient-to-b from-[#FF4FA3]/20 to-transparent rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-t from-[#FF2D8D]/20 to-transparent rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#111827]/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 md:p-16 shadow-[0_0_50px_rgba(255,79,163,0.1)]"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {t("cta.title")}
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <button 
                className="w-full sm:w-auto bg-gradient-to-r from-[#FF4FA3] to-[#FF2D8D]
                           text-white font-semibold py-4 px-10 rounded-full
                           shadow-[0_0_20px_rgba(255,79,163,0.4)]
                           hover:shadow-[0_0_40px_rgba(255,79,163,0.6)]
                           hover:scale-105 active:scale-95
                           transition-all duration-300 text-lg"
              >
                {t("cta.primaryBtn")}
              </button>
            </Link>
            <Link to="/contact">
              <button 
                className="w-full sm:w-auto bg-white/5 border border-white/10 text-white 
                           font-semibold py-4 px-10 rounded-full hover:bg-white/10
                           hover:border-white/20 transition-all duration-300 text-lg"
              >
                {t("cta.secondaryBtn")}
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
