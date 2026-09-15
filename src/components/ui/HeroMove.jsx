import React from "react";
import { motion } from "framer-motion";
import "../../styles/HeroMove.css";
import { useLanguage } from "../../context/LanguageContext";

const servicesData = {
  fr: [
    "Création de sites web vitrines",
    "Développement Shopify",
    "Web applications sur mesure",
    "Intégration IA",
    "Création de logo",
    "Design de flyers",
    "Branding",
    "Marketing digital",
    "SEO Google",
  ],
  en: [
    "Showcase Website Creation",
    "Shopify Development",
    "Custom Web Applications",
    "AI Integration",
    "Logo Design",
    "Graphic & Flyer Design",
    "Branding",
    "Digital Marketing",
    "Google SEO",
  ]
};

const HeroMove = () => {
  const { language } = useLanguage();
  const services = servicesData[language] || servicesData.fr;
  return (
    <div className="heromove-outer">
      <div className="heromove-container">
        {/* Soft glow pseudo-element is handled via CSS */}
        <div className="heromove-track-wrapper">
          <motion.div
            className="heromove-track"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
          >
            {[0, 1].map((repeatIndex) => (
              <div key={repeatIndex} className="heromove-track-group">
                {services.map((service, index) => (
                  <React.Fragment key={`${repeatIndex}-${index}`}>
                    <span className="heromove-item">
                      {service}
                    </span>
                    <span className="heromove-separator" aria-hidden="true">
                      ✦
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroMove;
