import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Footer from "../components/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";

const About = () => {
  const { t, language } = useLanguage();

  const breadcrumbPath = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
  ];

  const teamDescription = {
    fr: "Notre équipe est composée de développeurs expérimentés, de designers et de stratèges digitaux dédiés à la création de solutions numériques de haute qualité pour nos clients.",
    en: "Our team is composed of experienced developers, designers, and digital strategists dedicated to building high-quality digital solutions for our clients.",
  };

  const teamTitle = {
    fr: "Notre Équipe",
    en: "Our Team",
  };

  const teamSubtitle = {
    fr: "Des professionnels passionnés à votre service.",
    en: "Passionate professionals at your service.",
  };

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
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30
                           bg-[#0066FF]/10 text-[#00A3FF] text-sm font-medium mb-4"
            >
              WEBORA Team
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              {teamTitle[language]}
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              {teamSubtitle[language]}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="rounded-2xl p-10 md:p-14 border border-white/8 bg-[#111827]/60 backdrop-blur-sm text-center"
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              {teamDescription[language]}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
