import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { useLanguage } from "../context/LanguageContext";

const testimonials = [
  {
    name: "Alex",
    role: "Owner of CRM Platform",
    rating: 5,
    review:
      "Partnering with Webora elevated our CRM platform's performance beyond expectations. The team delivered clean code and a stunning UI on time.",
    image: "https://ui-avatars.com/api/?name=Alex&background=0066FF&color=fff&size=200",
  },
  {
    name: "Your Name Here",
    role: "Become Our Client",
    rating: 5,
    review:
      "Become our client and enjoy the privilege of sharing your testimonial here. We deliver results that speak for themselves.",
    image: "https://ui-avatars.com/api/?name=Client&background=111827&color=0066FF&size=200",
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  const activeTestimonial = testimonials[current];

  return (
    <section className="py-20 px-4 md:px-8" style={{ background: "#0A0F1C" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30
                           bg-[#0066FF]/10 text-[#00A3FF] text-sm font-medium mb-4">
            WEBORA Agency
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        {/* Card */}
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative rounded-2xl p-8 md:p-12 border border-white/8 bg-white/3
                     shadow-[0_8px_40px_rgba(0,102,255,0.08)]"
        >
          {/* Big quote mark */}
          <span className="absolute top-6 right-8 text-[80px] leading-none text-[#0066FF]/15 font-serif select-none">
            "
          </span>

          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {Array(activeTestimonial.rating).fill(0).map((_, i) => (
              <AiFillStar key={i} className="text-[#0066FF] text-xl" />
            ))}
          </div>

          {/* Review */}
          <p className="text-white text-lg md:text-xl leading-relaxed mb-8 max-w-3xl relative z-10">
            "{activeTestimonial.review}"
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <img src={activeTestimonial.image} alt={activeTestimonial.name}
                 className="w-12 h-12 rounded-full border-2 border-[#0066FF]/40" />
            <div>
              <p className="font-semibold text-white">{activeTestimonial.name}</p>
              <p className="text-sm text-gray-400">{activeTestimonial.role}</p>
            </div>
          </div>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2 bg-[#0066FF]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
