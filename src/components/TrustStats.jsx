import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
}

const TrustStats = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 50, suffix: '+', label: t('stats.projects') },
    { value: 40, suffix: '+', label: t('stats.clients') },
    { value: 3, suffix: '+', label: t('stats.experience') },
    { value: 9, suffix: '', label: t('stats.services') },
  ];

  return (
    <section ref={ref} className="py-12 md:py-16 px-4 md:px-8 border-t border-white/5 bg-[#0A0F1C]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const count = useCountUp(stat.value, 1500, isVisible);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
