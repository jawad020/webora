import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

const ValueProposition = () => {
  const { t } = useLanguage();

  const cards = [
    { key: "pro", icon: Award },
    { key: "quality", icon: Zap },
    { key: "reliable", icon: ShieldCheck },
    { key: "support", icon: HeartHandshake }
  ];

  return (
    <section className="py-24 bg-[#0A0F1C] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            {t("valueProp.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            {t("valueProp.subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-[#111827]/50 border border-white/5 backdrop-blur-sm
                           hover:bg-[#111827] hover:border-[#0066FF]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-6
                                group-hover:bg-[#0066FF]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#00A3FF]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t(`valueProp.cards.${card.key}.title`)}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {t(`valueProp.cards.${card.key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0066FF]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default ValueProposition;
