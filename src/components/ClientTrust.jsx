import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

// Dummy logos text for visual representation
const partners = [
  "Microsoft", "Google Cloud", "AWS", "Shopify", "Stripe", "Vercel"
];

const ClientTrust = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#0A0F1C] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {t("trust.title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            {t("trust.subtitle")}
          </p>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative flex overflow-x-hidden group">
          <div className="py-8 animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {[...partners, ...partners].map((partner, index) => (
              <span key={index} className="text-xl md:text-2xl font-bold text-gray-500 tracking-wider">
                {partner}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless infinite scroll effect */}
          <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex items-center gap-16 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            {[...partners, ...partners].map((partner, index) => (
              <span key={index} className="text-xl md:text-2xl font-bold text-gray-500 tracking-wider">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};

export default ClientTrust;
