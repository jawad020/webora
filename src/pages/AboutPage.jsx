import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Footer from "../components/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";

const teamMembers = [
  {
    name: "Jawad Ahmad",
    role: {
      fr: "Fondateur & Directeur Technique (CTO)",
      en: "Founder & Chief Technology Officer (CTO)",
    },
    desc: {
      fr: "Responsable de la direction technique de l'agence, incluant le développement de sites web, d'applications web et la mise en œuvre de solutions numériques.",
      en: "Responsible for the technical direction of the agency including website development, web applications, and implementation of digital solutions.",
    },
    image:
      "https://ui-avatars.com/api/?name=Jawad+Ahmad&background=0066FF&color=fff&size=400",
  },
  {
    name: "Amira",
    role: {
      fr: "Fondatrice & Responsable Marketing",
      en: "Founder & Marketing Manager",
    },
    desc: {
      fr: "Responsable de la stratégie marketing, du branding, de la communication et de la planification du marketing digital.",
      en: "Responsible for marketing strategy, branding, communication, and digital marketing planning.",
    },
    image:
      "https://ui-avatars.com/api/?name=Amira&background=111827&color=00A3FF&size=400",
  },
  {
    name: "Mohammed",
    role: {
      fr: "Fondateur & Directeur Général (CEO)",
      en: "Founder & Chief Executive Officer (CEO)",
    },
    desc: {
      fr: "Responsable de la stratégie d'entreprise, du développement commercial et des relations clients.",
      en: "Responsible for company strategy, business development, and client relationships.",
    },
    image:
      "https://ui-avatars.com/api/?name=Mohammed&background=0066FF&color=fff&size=400",
  },
];

const About = () => {
  const { t, language } = useLanguage();

  const breadcrumbPath = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
  ];

  return (
    <div className="bg-[#0A0F1C] min-h-screen">
      <Breadcrumb path={breadcrumbPath} heading={t("about.title")} />

      {/* About Content */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30
                           bg-[#0066FF]/10 text-[#00A3FF] text-sm font-medium mb-6"
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

      {/* Team Section */}
      <section className="py-24 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30
                           bg-[#0066FF]/10 text-[#00A3FF] text-sm font-medium mb-4"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group rounded-2xl p-8 border border-white/8 bg-[#111827]/60 backdrop-blur-sm
                           hover:border-[#0066FF]/40 hover:bg-[#111827]
                           hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,102,255,0.1)]
                           transition-all duration-300 text-center"
              >
                {/* Avatar */}
                <div className="mb-6 flex justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full border-3 border-[#0066FF]/30
                               group-hover:border-[#0066FF]/60 transition-colors duration-300
                               shadow-[0_0_20px_rgba(0,102,255,0.15)]"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-[#00A3FF] text-sm font-medium mb-4">
                  {member.role[language]}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {member.desc[language]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
