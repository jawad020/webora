import { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import { MdArrowOutward } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";

export default function OurProjects() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 4);

  return (
    <section className="py-20 px-4 md:px-8" style={{ background: "#111827" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30
                           bg-[#0066FF]/10 text-[#00A3FF] text-sm font-medium mb-4">
            WEBORA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
        >
          {displayed.map((project) => (
            <motion.div
              key={project.id}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
              className="group rounded-2xl overflow-hidden border border-white/8 bg-white/3
                         hover:border-[#0066FF]/40 hover:shadow-[0_8px_40px_rgba(0,102,255,0.15)]
                         hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C]/80 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i}
                      className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + Link */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      whileHover={{ rotate: 45, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white
                                 p-2.5 rounded-full shadow-[0_0_12px_rgba(0,102,255,0.4)]"
                    >
                      <MdArrowOutward size={16} />
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show more */}
        <div className="flex justify-center mt-12">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white
                       font-semibold px-8 py-3 rounded-full
                       shadow-[0_0_24px_rgba(0,102,255,0.35)]
                       hover:shadow-[0_0_36px_rgba(0,102,255,0.55)]
                       transition-all duration-200"
          >
            {showAll ? t("portfolio.viewMore") : t("portfolio.viewMore")}
          </motion.button>
        </div>
      </div>
    </section>
  );
}
