import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { AiFillStar } from "react-icons/ai";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const reviews = [
  {
    name: "Sophie Martin",
    review: {
      fr: "L'équipe a parfaitement compris notre besoin et nous a proposé une solution claire, moderne et facile à utiliser. Nous avons particulièrement apprécié leur disponibilité pendant tout le projet.",
      en: "The team perfectly understood our needs and proposed a clear, modern and easy-to-use solution. We particularly appreciated their availability throughout the project."
    }
  },
  {
    name: "Thomas Bernard",
    review: {
      fr: "Notre site a été entièrement repensé avec une vraie attention portée à l'expérience utilisateur. Le résultat est beaucoup plus professionnel et agréable à parcourir.",
      en: "Our website was completely redesigned with real attention to user experience. The result is much more professional and pleasant to browse."
    }
  },
  {
    name: "Claire Dubois",
    review: {
      fr: "WEBORA nous a accompagnés avec beaucoup de sérieux. Les échanges étaient simples, les explications claires et le résultat correspondait vraiment à notre vision.",
      en: "WEBORA supported us with great professionalism. The exchanges were simple, the explanations clear and the result truly matched our vision."
    }
  },
  {
    name: "Julien Moreau",
    review: {
      fr: "Nous cherchions une présence en ligne plus professionnelle et l'équipe a su transformer nos idées en une solution concrète et élégante.",
      en: "We were looking for a more professional online presence and the team managed to transform our ideas into a concrete and elegant solution."
    }
  },
  {
    name: "Camille Laurent",
    review: {
      fr: "Très bonne expérience. L'équipe a été attentive à nos besoins et nous a proposé des améliorations auxquelles nous n'avions pas pensé.",
      en: "Very good experience. The team was attentive to our needs and suggested improvements we hadn't thought of."
    }
  },
  {
    name: "Nicolas Petit",
    review: {
      fr: "Le nouveau site est beaucoup plus clair pour nos clients. Nous avons apprécié le soin apporté aux détails et à la navigation.",
      en: "The new website is much clearer for our clients. We appreciated the attention to detail and navigation."
    }
  },
  {
    name: "Élodie Robert",
    review: {
      fr: "WEBORA a su trouver le bon équilibre entre design, simplicité et fonctionnalité. Le projet a été très bien accompagné.",
      en: "WEBORA found the right balance between design, simplicity and functionality. The project was very well supported."
    }
  },
  {
    name: "Antoine Leroy",
    review: {
      fr: "Une équipe à l'écoute et très impliquée. Notre projet a été structuré de manière professionnelle du début à la fin.",
      en: "An attentive and very dedicated team. Our project was professionally structured from start to finish."
    }
  },
  {
    name: "Sarah Fontaine",
    review: {
      fr: "Nous avions une idée assez générale au départ. WEBORA nous a aidés à la transformer en une identité et une présence digitale beaucoup plus cohérentes.",
      en: "We had a fairly general idea at first. WEBORA helped us transform it into a much more coherent identity and digital presence."
    }
  },
  {
    name: "Lucas Girard",
    review: {
      fr: "Le résultat final est moderne, professionnel et surtout beaucoup plus simple à utiliser. Nous sommes très satisfaits de l'accompagnement.",
      en: "The final result is modern, professional and above all much simpler to use. We are very satisfied with the support."
    }
  },
  {
    name: "Emma Rousseau",
    review: {
      fr: "L'équipe a pris le temps de comprendre notre activité avant de proposer une solution. Cette approche a vraiment fait la différence.",
      en: "The team took the time to understand our business before proposing a solution. This approach really made the difference."
    }
  },
  {
    name: "Alexandre Mercier",
    review: {
      fr: "Nous avons apprécié leur capacité à proposer des solutions concrètes tout en restant attentifs à notre budget et à nos priorités.",
      en: "We appreciated their ability to propose concrete solutions while remaining attentive to our budget and priorities."
    }
  },
  {
    name: "Manon Blanc",
    review: {
      fr: "Une collaboration fluide et professionnelle. Notre présence en ligne correspond maintenant beaucoup mieux à l'image que nous souhaitons transmettre.",
      en: "A smooth and professional collaboration. Our online presence now much better matches the image we want to convey."
    }
  },
  {
    name: "Pierre Garnier",
    review: {
      fr: "Le projet a été bien organisé et les différentes étapes étaient faciles à suivre. Le résultat est propre, moderne et professionnel.",
      en: "The project was well organized and the different stages were easy to follow. The result is clean, modern and professional."
    }
  },
  {
    name: "Laura Chevalier",
    review: {
      fr: "WEBORA nous a apporté une vraie vision sur notre communication digitale. Nous repartons avec une base beaucoup plus solide.",
      en: "WEBORA gave us a real vision for our digital communication. We leave with a much stronger foundation."
    }
  },
  {
    name: "Maxime Faure",
    review: {
      fr: "Très bonne écoute et beaucoup de sérieux. Les modifications demandées ont été prises en compte avec attention.",
      en: "Very good listening and great professionalism. Requested changes were carefully taken into account."
    }
  },
  {
    name: "Chloé André",
    review: {
      fr: "Notre boutique en ligne est maintenant beaucoup plus agréable à consulter. La présentation des produits et la navigation sont nettement plus claires.",
      en: "Our online store is now much more pleasant to browse. Product presentation and navigation are significantly clearer."
    }
  },
  {
    name: "Romain Michel",
    review: {
      fr: "Nous avons apprécié l'approche personnalisée de l'équipe. Ils ne se sont pas contentés d'exécuter nos demandes, ils nous ont également conseillé.",
      en: "We appreciated the team's personalized approach. They didn't just execute our requests, they also advised us."
    }
  },
  {
    name: "Julie Perrin",
    review: {
      fr: "Une expérience professionnelle du début à la fin. La communication était simple et le résultat final correspondait à nos attentes.",
      en: "A professional experience from start to finish. Communication was simple and the final result matched our expectations."
    }
  },
  {
    name: "David Henry",
    review: {
      fr: "WEBORA a apporté une vraie structure à notre projet digital. Le résultat est professionnel et beaucoup plus cohérent avec notre activité.",
      en: "WEBORA brought real structure to our digital project. The result is professional and much more consistent with our business."
    }
  }
];

export default function CustomerReviews() {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const reviewsPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextPage = () => setCurrentPage((p) => (p + 1) % totalPages);
  const prevPage = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextPage, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const visibleReviews = reviews.slice(
    currentPage * reviewsPerPage,
    currentPage * reviewsPerPage + reviewsPerPage
  );

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 relative overflow-hidden" style={{ background: "#0A0F1C" }}>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF4FA3]/30
                           bg-[#FF4FA3]/10 text-[#FF2D8D] text-sm font-medium mb-4">
            WEBORA
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {language === 'fr' ? 'Témoignages clients' : 'Client Testimonials'}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {language === 'fr'
              ? 'Ce que nos clients disent de notre collaboration.'
              : 'What our clients say about working with us.'}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[220px]">
          {visibleReviews.map((review, index) => (
            <motion.div
              key={`${currentPage}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="rounded-2xl p-7 md:p-8 border bg-[#111827]/60 backdrop-blur-sm border-white/8
                         hover:border-[#FF4FA3]/20 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <AiFillStar key={i} className="text-[#FF4FA3] text-base" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white/85 text-sm md:text-base leading-relaxed mb-5">
                "{review.review[language]}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4FA3] to-[#FF2D8D]
                                flex items-center justify-center text-white text-sm font-bold">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <p className="font-semibold text-white text-sm">{review.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prevPage}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                       text-gray-400 hover:border-[#FF4FA3]/40 hover:text-white transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex gap-2">
            {Array(totalPages).fill(0).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === currentPage
                    ? 'w-8 h-2.5 bg-[#FF4FA3]'
                    : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextPage}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                       text-gray-400 hover:border-[#FF4FA3]/40 hover:text-white transition-all"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Sample Disclaimer */}
        <p className="text-center text-xs text-gray-600 mt-6">
          {language === 'fr'
            ? 'Exemples de témoignages — à remplacer par les avis clients vérifiés'
            : 'Sample testimonials — to be replaced with verified client reviews'}
        </p>
      </div>
    </section>
  );
}
