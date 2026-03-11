import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import services from "../data/servicesData.json";

const icons = {
  "mern.jpg": "⚡",
  "webdev.jpg": "🌐",
  "saas.jpg": "☁️",
  "maintenance.jpg": "🔧",
  "api.jpg": "🔗",
};

export default function OurServices() {
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
      className="py-20 px-4 md:px-8"
      style={{ background: "#111827" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30
                           bg-[#0066FF]/10 text-[#00A3FF] text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Our{" "}
            <span className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We deliver web solutions that empower businesses — specializing in powerful apps,
            seamless integrations, and scalable platforms.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: hasReached ? 1 : 0, y: hasReached ? 0 : 40 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group relative rounded-2xl p-8 border border-white/8 bg-white/3
                         hover:border-[#0066FF]/40 hover:bg-[#0066FF]/5
                         hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,102,255,0.15)]
                         transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="mb-5">
                <span className="text-4xl">{icons[service.image] || "💡"}</span>
              </div>

              {/* Number + Title */}
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[#0066FF] font-bold text-sm">
                  {service.id < 10 ? `0${service.id}` : service.id}
                </span>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {service.content}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.tags.slice(0, 3).map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs border border-white/10
                               bg-white/5 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-sm font-semibold
                           text-[#0066FF] group-hover:text-[#00A3FF] transition-colors duration-200"
              >
                Learn More
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Link>

              {/* Hover glow dot */}
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#0066FF]
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300
                              shadow-[0_0_8px_#0066FF]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
