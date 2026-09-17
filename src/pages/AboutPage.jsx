import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Footer from "../components/Footer";
import FinalCTA from "../components/FinalCTA";
import Breadcrumb from "../components/ui/Breadcrumb";
import { ShieldCheck, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const breadcrumbPath = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
  ];

  const highlights = [
    { icon: Lightbulb, titleFr: "Innovation", titleEn: "Innovation", descFr: "Toujours à la pointe des technologies", descEn: "Always at the forefront of technology" },
    { icon: Target, titleFr: "Résultats", titleEn: "Results", descFr: "Des solutions orientées performance", descEn: "Performance-driven solutions" },
    { icon: ShieldCheck, titleFr: "Fiabilité", titleEn: "Reliability", descFr: "Un engagement qualité sans compromis", descEn: "Uncompromised quality commitment" },
    { icon: Users, titleFr: "Proximité", titleEn: "Proximity", descFr: "Une relation client privilégiée", descEn: "A privileged client relationship" },
  ];

  return (
    <div className="bg-[#0A0F1C] min-h-screen">
      <Breadcrumb path={breadcrumbPath} heading={t("about.title")} />

      {/* About Content */}
      <section className="py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full border border-[#FF4FA3]/30
                           bg-[#FF4FA3]/10 text-[#FF2D8D] text-sm font-medium mb-6"
            >
              WEBORA Agency
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              {t("about.title")}
            </h2>
          </motion.div>

          <div className="space-y-6">
            {["content1", "content2", "content3", "content4", "content5"].map(
              (key, index) => (
                <motion.p
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-gray-400 text-lg leading-relaxed"
                >
                  {t(`about.${key}`)}
                </motion.p>
              )
            )}
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="py-16 md:py-20 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-[#111827]/50 border border-white/5 backdrop-blur-sm
                             hover:bg-[#111827] hover:border-[#FF4FA3]/30 
                             hover:-translate-y-1 transition-all duration-300 group text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#FF4FA3]/10 flex items-center justify-center mx-auto mb-4
                                  group-hover:bg-[#FF4FA3]/20 transition-colors">
                    <Icon className="w-7 h-7 text-[#FF2D8D]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {t("nav.home") === "Accueil" ? item.titleFr : item.titleEn}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t("nav.home") === "Accueil" ? item.descFr : item.descEn}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full border border-[#FF4FA3]/30
                           bg-[#FF4FA3]/10 text-[#FF2D8D] text-sm font-medium mb-4"
            >
              WEBORA Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {t("about.teamTitle")}
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
              {t("about.teamSubtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8 md:p-12 border border-white/8 bg-[#111827]/60 backdrop-blur-sm text-center mb-10 max-w-3xl mx-auto"
          >
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {t("about.teamDescription")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💻",
                role: { fr: "Pôle Technique & Développement", en: "Technical & Development Division" },
                desc: {
                  fr: "Conception d'architectures modernes, développement sur mesure et performance web.",
                  en: "Modern architecture design, custom development, and web performance."
                }
              },
              {
                icon: "🎨",
                role: { fr: "Pôle Design & Image de Marque", en: "Design & Brand Identity Division" },
                desc: {
                  fr: "Création d'identités visuelles percutantes, design UX/UI et cohérence graphique.",
                  en: "High-impact visual identities, UX/UI design, and graphic consistency."
                }
              },
              {
                icon: "📈",
                role: { fr: "Pôle Stratégie & Marketing Digital", en: "Strategy & Digital Marketing Division" },
                desc: {
                  fr: "Visibilité, optimisation du référencement (SEO) et stratégies de conversion pérennes.",
                  en: "Visibility, search engine optimization (SEO), and sustainable conversion strategies."
                }
              }
            ].map((pole, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-8 border border-white/8 bg-[#111827]/60 backdrop-blur-sm
                           hover:border-[#FF4FA3]/30 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FF4FA3]/10 border border-[#FF4FA3]/20
                                flex items-center justify-center text-2xl mx-auto mb-4">
                  {pole.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {t("nav.home") === "Accueil" ? pole.role.fr : pole.role.en}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t("nav.home") === "Accueil" ? pole.desc.fr : pole.desc.en}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default About;
