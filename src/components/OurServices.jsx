import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const serviceKeys = [
  { id: "vitrine", icon: "🌐" },
  { id: "shopify", icon: "🛍️" },
  { id: "webapp", icon: "💻" },
  { id: "ai", icon: "🤖" },
  { id: "logo", icon: "✨" },
  { id: "flyer", icon: "📄" },
  { id: "branding", icon: "🎯" },
  { id: "marketing", icon: "📈" },
  { id: "seo", icon: "🔍" },
];

export default function OurServices() {
  const { t } = useLanguage();
  const [hasReached, setHasReached] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("services");
      if (el && !hasReached && el.getBoundingClientRect().top < window.innerHeight * 0.85) {
        setHasReached(true);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasReached]);

  return (
    <section
      id="services"
      className="py-20 md:py-28 px-4 md:px-8 border-t border-white/5"
      style={{ background: "#0A0F1C" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF4FA3]/30
                           bg-[#FF4FA3]/10 text-[#FF2D8D] text-sm font-medium mb-4">
            WEBORA Agency
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("services.title")}
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {serviceKeys.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: hasReached ? 1 : 0, y: hasReached ? 0 : 30 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl p-7 md:p-8 border border-white/8 bg-[#111827]/60 backdrop-blur-sm
                         hover:border-[#FF4FA3]/40 hover:bg-[#111827]
                         hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,79,163,0.1)]
                         transition-all duration-300 cursor-default flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#FF4FA3]/10 flex items-center justify-center mb-5
                              group-hover:bg-[#FF4FA3]/20 group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl">{service.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                {t(`services.items.${service.id}.title`)}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {t(`services.items.${service.id}.desc`)}
              </p>

              {/* Hover glow dot */}
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#FF4FA3]
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              shadow-[0_0_8px_#FF4FA3]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
