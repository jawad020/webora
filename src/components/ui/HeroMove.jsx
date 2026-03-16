import React from "react";
import { GiSevenPointedStar } from "react-icons/gi";
import { motion } from "framer-motion";

const services = [
  "Création de sites web vitrines",
  "Développement Shopify",
  "Web applications sur mesure",
  "Intégration IA",
  "Création de logo",
  "Design de flyers",
  "Branding",
  "Marketing digital",
  "SEO Google",
];

const HeroMove = () => {
  const scrollingServices = [...services, ...services];

  return (
    <div
      className=" bg-brand px-6 py-2 overflow-hidden"
      style={{ marginLeft: "0", marginRight: "0" }}
    >
      <div className="relative w-full h-12 flex items-center">
        <motion.div
          className="absolute flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {[...Array(2)].map((_, repeatIndex) => (
            <div key={repeatIndex} className="flex  items-center">
              {services.map((service, index) => (
                <div
                  key={`${repeatIndex}-${index}`}
                  className="flex items-center px-3 gap-6 md:px-6 md:gap-12"
                >
                  <span className="text-black">
                    <GiSevenPointedStar className="text-black text-[18px] md:text-[25px]" />
                  </span>
                  <span className="text-black font-semibold text-[16px] md:text-[20px]">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroMove;
