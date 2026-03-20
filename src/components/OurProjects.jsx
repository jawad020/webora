import { motion } from "framer-motion";
import projects from "../data/projects";
import { MdArrowOutward } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Projects.css";

export default function OurProjects() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 md:py-28 px-4 md:px-8" style={{ background: "#111827" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full border border-[#FF4FA3]/30
                           bg-[#FF4FA3]/10 text-[#FF2D8D] text-sm font-medium mb-4"
          >
            WEBORA
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              className="project-card group"
            >
              {/* Image Container */}
              <div className="project-card__image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="project-card__overlay flex flex-col items-center justify-center bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <span className="text-white font-semibold text-lg opacity-0 translate-y-4 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 mt-8">
                    {language === 'fr' ? 'Voir le projet →' : 'View Project →'}
                  </span>
                </div>

                {/* Visit Website floating button - appears on hover */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__visit-btn"
                  title={language === 'fr' ? 'Visiter le site' : 'Visit Website'}
                >
                  <HiExternalLink size={20} />
                </a>
              </div>

              {/* Body */}
              <div className="project-card__body">
                {/* Tags */}
                <div className="project-card__tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + Link */}
                <div className="project-card__title-row">
                  <h3 className="project-card__title">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0"
                  >
                    <motion.button
                      whileHover={{ rotate: 45, scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      className="project-card__arrow-btn"
                    >
                      <MdArrowOutward size={16} />
                    </motion.button>
                  </a>
                </div>

                {/* Description */}
                <p className="project-card__description">
                  {t(`projectsList.${project.id}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
