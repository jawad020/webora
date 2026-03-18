import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const FAQSection = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqData = {
    fr: [
      {
        question: "Combien de temps faut-il pour créer un site web ?",
        answer: "La durée dépend de la complexité du projet. Un site vitrine prend généralement 2 à 4 semaines, tandis qu'une application sur mesure ou un e-commerce peut nécessiter 6 à 12 semaines."
      },
      {
        question: "Quels services sont inclus dans la création d'un site ?",
        answer: "Nos forfaits incluent généralement le design UX/UI, le développement, l'optimisation SEO de base, une interface d'administration simplifiée, et une formation à la livraison."
      },
      {
        question: "Proposez-vous un support après le lancement ?",
        answer: "Absolument. Nous offrons des contrats de maintenance pour garantir la sécurité, faire les mises à jour et accompagner l'évolution de votre plateforme sur le long terme."
      },
      {
        question: "Comment se déroule le processus de travail ?",
        answer: "Tout commence par un appel de découverte, suivi d'une proposition détaillée. Une fois validée, nous passons aux phases de design, de développement, puis de tests avant le lancement final."
      }
    ],
    en: [
      {
        question: "How long does a website project take?",
        answer: "The timeline depends on project complexity. A standard website typically takes 2 to 4 weeks, while a custom application or e-commerce platform may require 6 to 12 weeks."
      },
      {
        question: "What services are included in website creation?",
        answer: "Our packages generally include UX/UI design, development, basic SEO optimization, an easy-to-use CMS interface, and training upon delivery."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Absolutely. We offer maintenance contracts to ensure security, perform updates, and support the long-term evolution of your platform."
      },
      {
        question: "How does the project process work?",
        answer: "It starts with a discovery call, followed by a detailed proposal. Once approved, we move through design, development, and testing phases before the final launch."
      }
    ]
  };

  const faqs = faqData[language] || faqData.fr;

  return (
    <section className="py-24 px-4 md:px-8 bg-[#111827] border-y border-white/5 relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF4FA3]/30
                           bg-[#FF4FA3]/10 text-[#FF2D8D] text-sm font-medium mb-4">
            WEBORA FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("faq.title")}
          </h2>
          <p className="text-gray-400 text-lg">
            {t("faq.subtitle")}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-300
                            ${isOpen ? 'border-[#FF4FA3]/50 bg-[#0A0F1C]' : 'border-white/10 bg-[#111827] hover:border-white/20'}`}
              >
                <button
                  className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-semibold text-white focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                                ${isOpen ? 'bg-[#FF4FA3] text-white' : 'bg-white/5 text-gray-400'}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5 text-gray-400 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Subtle background element */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF4FA3]/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default FAQSection;
