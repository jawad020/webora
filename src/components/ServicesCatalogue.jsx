import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import servicesCatalogue from '../data/servicesCatalogue';

export default function ServicesCatalogue() {
  const { language } = useLanguage();
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <section id="services" className="py-20 md:py-28 px-4 md:px-8 bg-[#0A0F1C]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF4FA3]/30
                           bg-[#FF4FA3]/10 text-[#FF2D8D] text-sm font-medium mb-4">
            WEBORA Agency
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {language === 'fr' ? 'Nos Services' : 'Our Services'}
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Des solutions digitales pensées pour faire grandir votre activité.'
              : 'Digital solutions designed to grow your business.'}
          </p>
        </div>

        {/* Accordion Categories */}
        <div className="space-y-3">
          {servicesCatalogue.map((category) => {
            const isOpen = openCategory === category.id;
            return (
              <div key={category.id}>
                {/* Category Header - Clickable */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  aria-expanded={isOpen}
                  className={`w-full flex items-center gap-4 md:gap-6 p-5 md:p-7
                             rounded-2xl border transition-all duration-300 text-left cursor-pointer
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF4FA3]
                             ${isOpen
                               ? 'bg-[#111827] border-[#FF4FA3]/40 shadow-[0_8px_30px_rgba(255,79,163,0.08)] rounded-b-none'
                               : 'bg-[#111827]/60 border-white/8 hover:border-[#FF4FA3]/20 hover:bg-[#111827]/80'
                             }`}
                >
                  {/* Number */}
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF4FA3] to-[#FF2D8D]
                                   bg-clip-text text-transparent min-w-[48px] md:min-w-[56px] shrink-0">
                    {category.number}
                  </span>

                  {/* Title + Description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {category.title[language]}
                    </h3>
                    {!isOpen && category.description && (
                      <p className="text-gray-500 text-sm mt-1 line-clamp-1">
                        {category.description[language]}
                      </p>
                    )}
                  </div>

                  {/* Plus/Minus */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300
                                  ${isOpen ? 'bg-[#FF4FA3]/20 text-[#FF4FA3]' : 'bg-white/5 text-gray-400'}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-7 pb-6 md:pb-8 pt-4 bg-[#111827] rounded-b-2xl
                                      border-x border-b border-[#FF4FA3]/20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                          {category.subcategories.map((sub, subIdx) => (
                            <div key={subIdx} className="space-y-3">
                              {/* Subcategory Title */}
                              <div className="flex items-center gap-3">
                                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#FF4FA3] to-[#FF2D8D]" />
                                <h4 className="text-base md:text-lg font-semibold text-white">
                                  {sub.title[language]}
                                </h4>
                              </div>

                              {/* Service Bullets */}
                              <ul className="space-y-1.5 pl-4">
                                {sub.services.map((service, sIdx) => (
                                  <li key={sIdx} className="flex items-start gap-2.5 text-gray-400 text-sm leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4FA3]/50 mt-1.5 shrink-0" />
                                    {service[language]}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
