import { Link } from "react-router-dom";
import { HiExternalLink } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";
import projects from "../data/projects";

export default function FeaturedProjects() {
  const { t, language } = useLanguage();

  // Highlight 3 featured projects (SBG Travaux, KokoKids, AMG Legisinn)
  const featured = [
    projects.find((p) => p.id === 5) || projects[0],
    projects.find((p) => p.id === 1) || projects[1],
    projects.find((p) => p.id === 2) || projects[2],
  ];

  return (
    <section
      className="py-20 md:py-28 px-4 md:px-8 border-t border-white/5 relative bg-[#0A0F1C]"
      aria-label="Featured Projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full border border-[#FF4FA3]/30
                       bg-[#FF4FA3]/10 text-[#FF2D8D] text-sm font-medium mb-4"
          >
            {language === "fr" ? "Portfolio Récent" : "Recent Portfolio"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {language === "fr" ? "Projets Sélectionnés" : "Selected Projects"}
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            {language === "fr"
              ? "Un aperçu de nos réalisations digitales sur mesure."
              : "A glimpse of our tailor-made digital achievements."}
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-white/8 bg-[#111827]/70 overflow-hidden
                         hover:border-[#FF4FA3]/40 transition-all duration-300 flex flex-col justify-between
                         group shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
            >
              <div>
                {/* Image Container with link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-[16/10] overflow-hidden bg-black/40"
                  aria-label={project.title}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-transparent to-transparent opacity-60"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-[#FF4FA3] text-white flex items-center justify-center
                               shadow-lg transition-transform duration-300 md:opacity-0 md:group-hover:opacity-100"
                    title={language === "fr" ? "Visiter le site" : "Visit Website"}
                  >
                    <HiExternalLink size={18} />
                  </div>
                </a>

                {/* Content */}
                <div className="p-6 md:p-7">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#FF4FA3]/10 text-[#FF4FA3] border border-[#FF4FA3]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Arrow */}
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white text-lg md:text-xl hover:text-[#FF4FA3] transition-colors"
                    >
                      {project.title}
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400
                                 hover:bg-[#FF4FA3] hover:border-[#FF4FA3] hover:text-white transition-all shrink-0"
                      aria-label={`Open ${project.title}`}
                    >
                      <MdArrowOutward size={14} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {t(`projectsList.${project.id}.description`)}
                  </p>
                </div>
              </div>

              {/* Bottom Visit link bar */}
              <div className="px-6 pb-6 pt-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-[#FF4FA3]/15 border border-white/10 hover:border-[#FF4FA3]/30
                             text-gray-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2
                             transition-all min-h-[44px]"
                >
                  <span>{language === "fr" ? "Visiter le site" : "Visit Website"}</span>
                  <HiExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center mt-12">
          <Link to="/projects">
            <button
              className="bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#FF4FA3]/50
                         text-white font-semibold px-8 py-3.5 rounded-full
                         transition-all duration-200 text-sm md:text-base min-h-[48px] flex items-center gap-2"
            >
              <span>{language === "fr" ? "Voir tous nos projets" : "View all our projects"}</span>
              <span>→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
