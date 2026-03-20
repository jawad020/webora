import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { useLanguage } from "../context/LanguageContext";

const reviews = [
  {
    name: "Jean Dupont",
    role: "Paris",
    rating: 5,
    review: {
      fr: "Très satisfait du résultat. Site moderne et performant. L'équipe a su comprendre nos besoins en un temps record.",
      en: "Very satisfied with the result. Modern and high-performance site. The team understood our needs in record time.",
    },
    image:
      "https://ui-avatars.com/api/?name=Jean+Dupont&background=FF4FA3&color=fff&size=200&bold=true",
  },
  {
    name: "Sophie Martin",
    role: "Lyon, France",
    rating: 5,
    review: {
      fr: "WEBORA a transformé notre présence en ligne. Le design est élégant et le site se charge très rapidement. Je recommande vivement.",
      en: "WEBORA transformed our online presence. The design is elegant and the site loads very fast. I highly recommend them.",
    },
    image:
      "https://ui-avatars.com/api/?name=Sophie+Martin&background=111827&color=FF2D8D&size=200&bold=true",
  },
  {
    name: "Laura Bernard",
    role: "Marseille, France",
    rating: 5,
    review: {
      fr: "Grâce à WEBORA, notre site web a désormais un aspect professionnel et de bien meilleures performances. Hautement recommandé.",
      en: "Thanks to WEBORA our website now looks professional and performs much better. Highly recommended.",
    },
    image:
      "https://ui-avatars.com/api/?name=Laura+Bernard&background=FF4FA3&color=fff&size=200&bold=true",
  },
  {
    name: "Thomas Leroy",
    role: "Bordeaux, France",
    rating: 5,
    review: {
      fr: "Excellente communication et livraison rapide. Le résultat final correspondait parfaitement à ce dont nous avions besoin pour notre entreprise.",
      en: "Great communication and fast delivery. The final result perfectly matched what we needed for our business.",
    },
    image:
      "https://ui-avatars.com/api/?name=Thomas+Leroy&background=111827&color=FF2D8D&size=200&bold=true",
  },
];

export default function CustomerReviews() {
  const { t, language } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % reviews.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 relative" style={{ background: "#0A0F1C" }}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FF4FA3]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full border border-[#FF4FA3]/30
                           bg-[#FF4FA3]/10 text-[#FF2D8D] text-sm font-medium mb-4"
          >
            WEBORA
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("reviews.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t("reviews.subtitle")}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl p-7 md:p-8 border bg-[#111827]/60 backdrop-blur-sm
                         hover:-translate-y-1 transition-all duration-500 group ${
                           index === current
                             ? "border-[#FF4FA3]/40 shadow-[0_8px_40px_rgba(255,79,163,0.15)]"
                             : "border-white/8 hover:border-[#FF4FA3]/20"
                         }`}
            >
              {/* Big quote mark */}
              <span className="absolute top-4 right-6 text-[60px] leading-none text-[#FF4FA3]/10 font-serif select-none">
                "
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <AiFillStar key={i} className="text-[#FF4FA3] text-lg" />
                  ))}
              </div>

              {/* Review Text */}
              <p className="text-white/90 text-base leading-relaxed mb-6 relative z-10">
                "{review.review[language]}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-11 h-11 rounded-full border-2 border-[#FF4FA3]/30"
                />
                <div>
                  <p className="font-semibold text-white text-sm">
                    {review.name}
                  </p>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active indicator dots */}
        <div className="flex justify-center gap-2 mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2.5 bg-[#FF4FA3]"
                  : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
