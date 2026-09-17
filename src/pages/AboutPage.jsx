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
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              {t("about.teamSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Jawad Ahmad",
                role: { fr: "Fondateur & CTO", en: "Founder & CTO" },
                initials: "JA",
                desc: {
                  fr: "Expertise technique et développement web.",
                  en: "Technical expertise and web development."
                }
              },
              {
                name: "Amira",
                role: { fr: "Fondatrice & Responsable Marketing", en: "Founder & Marketing Manager" },
                initials: "AM",
                desc: {
                  fr: "Stratégie marketing et communication digitale.",
                  en: "Marketing strategy and digital communication."
                }
              },
              {
                name: "Mohammed",
                role: { fr: "Fondateur & CEO", en: "Founder & CEO" },
                initials: "MO",
                desc: {
                  fr: "Vision stratégique et développement commercial.",
                  en: "Strategic vision and business development."
                }
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-2xl p-8 border border-white/8 bg-[#111827]/60 backdrop-blur-sm
                           hover:border-[#FF4FA3]/30 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF4FA3] to-[#FF2D8D]
                                flex items-center justify-center text-white text-lg font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#FF4FA3] text-sm font-medium mb-3">
                  {t("nav.home") === "Accueil" ? member.role.fr : member.role.en}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t("nav.home") === "Accueil" ? member.desc.fr : member.desc.en}
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
