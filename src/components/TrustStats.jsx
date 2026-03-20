import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const TrustStats = () => {
  const { t } = useLanguage();

  const stats = [
    { value: 150, suffix: '+', label: t('stats.projects') },
    { value: 98, suffix: '%', label: t('stats.clients') },
    { value: 5, suffix: '+', label: t('stats.experience') },
    { value: 9, suffix: '', label: t('stats.services') },
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 border-t border-white/5 bg-[#0A0F1C]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      animate(0, stat.value, {
        duration: 2,
        delay: index * 0.1,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest))
      });
    }
  }, [isInView, stat.value, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center group"
    >
      <div className="text-3xl md:text-5xl font-bold text-white mb-2">
        <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          {count}{stat.suffix}
        </span>
      </div>
      <p className="text-gray-400 text-sm md:text-base font-medium">
        {stat.label}
      </p>
      {/* Decorative line */}
      <div className="w-8 h-0.5 bg-gradient-to-r from-[#FF4FA3] to-[#FF2D8D] mx-auto mt-3 rounded-full
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
};

export default TrustStats;
