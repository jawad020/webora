import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Statistics = () => {
  const { t } = useLanguage();

  const stats = [
    { key: "projects", value: "150+" },
    { key: "clients", value: "98%" },
    { key: "experience", value: "5+" },
    { key: "services", value: "9" },
  ];

  return (
    <section className="py-20 bg-[#111827] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text 
                             bg-gradient-to-r from-[#FF4FA3] to-[#FF2D8D] mb-2 drop-shadow-sm">
                {stat.value}
              </h3>
              <p className="text-gray-300 font-medium text-sm md:text-base tracking-wide uppercase">
                {t(`stats.${stat.key}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
