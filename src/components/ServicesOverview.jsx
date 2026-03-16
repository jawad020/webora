import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const previewServices = [
  { id: "vitrine", icon: "🌐" },
  { id: "shopify", icon: "🛍️" },
  { id: "webapp", icon: "💻" },
  { id: "ai", icon: "🤖" },
  { id: "logo", icon: "✨" },
  { id: "seo", icon: "🔍" },
];

export default function ServicesOverview() {
  const { t } = useLanguage();

  return (
    <section
      className="py-24 px-4 md:px-8 border-t border-white/5"
      style={{ background: "#0A0F1C" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30
                           bg-[#0066FF]/10 text-[#00A3FF] text-sm font-medium mb-4">
            WEBORA Agency
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("servicesOverview.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("servicesOverview.subtitle")}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl p-8 border border-white/8 bg-[#111827]/60 backdrop-blur-sm
                         hover:border-[#0066FF]/40 hover:bg-[#111827]
                         hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,102,255,0.1)]
                         transition-all duration-300 cursor-default flex flex-col h-full"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#0066FF]/10 flex items-center justify-center mb-6
                              group-hover:bg-[#0066FF]/20 transition-colors">
                <span className="text-2xl">{service.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">
                {t(`services.items.${service.id}.title`)}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {t(`services.items.${service.id}.desc`)}
              </p>

              {/* Hover glow dot */}
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#0066FF]
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              shadow-[0_0_8px_#0066FF]" />
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="flex justify-center mt-12">
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white
                         font-semibold px-8 py-3.5 rounded-full
                         shadow-[0_0_24px_rgba(0,102,255,0.35)]
                         hover:shadow-[0_0_36px_rgba(0,102,255,0.55)]
                         transition-all duration-200 text-base"
            >
              {t("servicesOverview.viewAll")} →
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
