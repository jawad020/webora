import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
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
              ? 'Découvrez notre catalogue complet de solutions digitales.'
              : 'Discover our complete catalogue of digital solutions.'}
          </p>
        </div>

        {/* Accordion Categories */}
        <div className="space-y-4">
          {servicesCatalogue.map((category) => {
            const isOpen = openCategory === category.id;
            return (
              <div key={category.id} className="rounded-2xl overflow-hidden">
                {/* Category Header - Clickable */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className={`w-full flex items-center gap-4 md:gap-6 p-5 md:p-7
                             rounded-2xl border transition-all duration-300 text-left
                             ${isOpen
                               ? 'bg-[#111827] border-[#FF4FA3]/40 shadow-[0_8px_30px_rgba(255,79,163,0.1)]'
                               : 'bg-[#111827]/60 border-white/8 hover:border-[#FF4FA3]/20 hover:bg-[#111827]/80'
                             }`}
                >
                  {/* Number */}
                  <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF4FA3] to-[#FF2D8D]
                                   bg-clip-text text-transparent min-w-[48px] md:min-w-[56px]">
                    {category.number}
                  </span>

                  {/* Icon */}
                  <span className="text-2xl md:text-3xl">{category.icon}</span>

                  {/* Title */}
                  <h3 className="flex-1 text-lg md:text-xl font-bold text-white">
                    {category.title[language]}
                  </h3>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-gray-400" />
                  </motion.div>
                </button>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 md:px-7 pb-6 md:pb-8 pt-2 bg-[#111827] rounded-b-2xl
                                      border-x border-b border-[#FF4FA3]/20">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-4">
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
                              <ul className="space-y-2 pl-4">
                                {sub.services.map((service, sIdx) => (
                                  <li key={sIdx} className="flex items-start gap-2.5 text-gray-400 text-sm leading-relaxed">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4FA3]/60 mt-1.5 shrink-0" />
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
