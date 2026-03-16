import { motion } from "framer-motion";
import projects from "../data/projects";
import { MdArrowOutward } from "react-icons/md";
import { HiExternalLink } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";
import "../styles/Projects.css";

export default function OurProjects() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 md:px-8" style={{ background: "#111827" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30
                           bg-[#0066FF]/10 text-[#00A3FF] text-sm font-medium mb-4"
          >
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
                />
                {/* Gradient overlay */}
                <div className="project-card__overlay" />

                {/* Visit Website floating button - appears on hover */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__visit-btn"
                  title="Visit Website"
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
                {project.description && (
                  <p className="project-card__description">
                    {project.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
