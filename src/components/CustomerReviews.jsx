import { useState, useEffect, useRef } from "react";
import { AiFillStar } from "react-icons/ai";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const testimonials = [
  {
    id: 1,
    name: "Sarah Malik",
    service: {
      fr: "KokoKids | E-commerce / Shopify",
      en: "KokoKids | E-commerce / Shopify",
    },
    review: {
      fr: "WEBORA a parfaitement compris nos attentes dès le départ. La nouvelle boutique en ligne est beaucoup plus fluide à parcourir et l'expérience d'achat sur mobile est particulièrement agréable.",
      en: "WEBORA understood what we wanted from the beginning. The new online store is much easier to browse, and the shopping experience feels especially smooth on mobile.",
    },
  },
  {
    id: 2,
    name: "Thomas Laurent",
    service: {
      fr: "Création de site web",
      en: "Website Development",
    },
    review: {
      fr: "Nous avions besoin d'un site web professionnel qui reflète fidèlement notre activité. WEBORA a rendu tout le processus simple et fluide, pour un résultat clair et très facile à utiliser pour nos clients.",
      en: "We needed a professional website that represented our business properly. WEBORA made the whole process straightforward and delivered a clean website that is easy for our customers to use.",
    },
  },
  {
    id: 3,
    name: "Emma Richardson",
    service: {
      fr: "Refonte de site web",
      en: "Website Redesign",
    },
    review: {
      fr: "Notre ancien site était vieillissant et difficile d'accès. WEBORA lui a apporté une structure nettement plus moderne sans jamais compliquer la navigation pour nos visiteurs.",
      en: "Our previous website looked outdated and was difficult to navigate. WEBORA gave it a much more modern structure without making it complicated for our visitors.",
    },
  },
  {
    id: 4,
    name: "Omar Hassan",
    service: {
      fr: "Application web sur mesure",
      en: "Custom Web Application",
    },
    review: {
      fr: "Nous avions une idée très précise pour une application web interne. WEBORA a pris le temps de bien cerner nos besoins pour la transformer en un outil concret et efficace pour nos équipes.",
      en: "We had a very specific idea for an internal web application. WEBORA took the time to understand our requirements and turned the idea into something practical that our team can actually use.",
    },
  },
  {
    id: 5,
    name: "Claire Martin",
    service: {
      fr: "Branding & Création de logo",
      en: "Branding & Logo Design",
    },
    review: {
      fr: "Nous souhaitions une image de marque plus cohérente et professionnelle. Le travail réalisé sur notre logo, nos couleurs et notre charte graphique nous donne aujourd'hui une identité claire sur tous nos supports.",
      en: "We wanted our brand to look more consistent and professional. The work on our logo, colours and visual identity gave us a much clearer image across our business materials.",
    },
  },
  {
    id: 6,
    name: "David Cohen",
    service: {
      fr: "Création de logo",
      en: "Logo Design",
    },
    review: {
      fr: "J'avais une idée globale pour notre logo sans savoir comment la concrétiser. WEBORA a su développer le concept et nous fournir des déclinaisons adaptées aussi bien au web qu'à l'impression.",
      en: "I had a general idea for the logo but wasn't sure how to turn it into a professional identity. WEBORA helped develop the concept and gave us different versions that work well across digital and print.",
    },
  },
  {
    id: 7,
    name: "Nadia Benali",
    service: {
      fr: "Flyers & Supports de communication",
      en: "Flyers & Communication Materials",
    },
    review: {
      fr: "Les flyers correspondaient parfaitement aux objectifs de notre campagne. Le design est épuré, moderne et le message se comprend immédiatement au premier regard.",
      en: "The flyers were exactly what we needed for our communication campaign. The design is clear, modern and much easier for people to understand at a glance.",
    },
  },
  {
    id: 8,
    name: "Lucas Moreau",
    service: {
      fr: "Stratégie de communication",
      en: "Communication Strategy",
    },
    review: {
      fr: "Nous avions beaucoup d'idées de communication mais aucune ligne directrice. WEBORA nous a aidés à structurer une véritable stratégie pour savoir exactement quoi communiquer et à quel moment.",
      en: "We had several communication ideas but no clear direction. WEBORA helped us organize them into a more structured strategy and made it easier to know what we should communicate and when.",
    },
  },
  {
    id: 9,
    name: "Amina Yusuf",
    service: {
      fr: "Réseaux sociaux & Contenu",
      en: "Social Media & Content",
    },
    review: {
      fr: "Notre présence sur les réseaux sociaux manquait d'harmonie. WEBORA a amélioré notre direction visuelle et créé des contenus en parfaite adéquation avec notre univers de marque.",
      en: "Our social media presence needed more consistency. WEBORA helped us improve the visual direction and create content that feels much more aligned with our brand.",
    },
  },
  {
    id: 10,
    name: "Daniel Williams",
    service: {
      fr: "Marketing digital",
      en: "Digital Marketing",
    },
    review: {
      fr: "Ce que j'ai particulièrement apprécié, c'est que WEBORA ne s'est pas arrêté à l'aspect esthétique. Ils ont cherché à comprendre nos objectifs commerciaux pour que le digital serve réellement notre croissance.",
      en: "What I appreciated most was that WEBORA didn't simply focus on making things look good. They also asked questions about our objectives and how the digital work could support the business.",
    },
  },
  {
    id: 11,
    name: "Sophie Bernard",
    service: {
      fr: "Référencement SEO",
      en: "SEO",
    },
    review: {
      fr: "WEBORA nous a expliqué clairement pourquoi notre site manquait de visibilité. Les optimisations SEO ont été transparentes et notre présence en ligne repose désormais sur des bases solides.",
      en: "WEBORA helped us understand why our website wasn't getting enough visibility. The SEO work was explained clearly, and we now have a much better structure for improving our online presence.",
    },
  },
  {
    id: 12,
    name: "Michael Anderson",
    service: {
      fr: "SEO Local",
      en: "Local SEO",
    },
    review: {
      fr: "Nous voulions faciliter la découverte de notre entreprise au niveau local. WEBORA a optimisé nos fiches et nos informations pour une visibilité locale bien plus performante.",
      en: "We wanted to improve how customers could find our business online. WEBORA helped us organize our online information and gave us a much clearer approach to local visibility.",
    },
  },
  {
    id: 13,
    name: "Youssef Karim",
    service: {
      fr: "Intégration d'IA",
      en: "AI Integration",
    },
    review: {
      fr: "L'intelligence artificielle nous intéressait sans savoir par où commencer. WEBORA nous a orientés vers des cas d'usage pragmatiques et utiles, loin des gadgets superflus.",
      en: "We were interested in using AI but didn't know where it would actually be useful for our business. WEBORA helped us focus on practical applications rather than adding AI just for the sake of it.",
    },
  },
  {
    id: 14,
    name: "Rachel Cohen",
    service: {
      fr: "Chatbot & Assistant IA",
      en: "Chatbot & AI Assistant",
    },
    review: {
      fr: "Le chatbot facilite grandement le traitement des questions courantes. Les visiteurs obtiennent des réponses instantanées à tout moment sans attendre une intervention de notre équipe.",
      en: "The chatbot has made it much easier to handle common customer questions. The biggest difference is that visitors can get basic information without having to wait for someone from our team.",
    },
  },
  {
    id: 15,
    name: "Jean Dupont",
    service: {
      fr: "Automatisation de processus",
      en: "Automation",
    },
    review: {
      fr: "De nombreuses tâches répétitives nous prenaient un temps considérable. WEBORA nous a aidés à identifier les leviers d'automatisation pour alléger notre quotidien professionnel.",
      en: "Several small tasks were taking up a surprising amount of our time. WEBORA helped us identify what could be automated and simplify parts of our daily workflow.",
    },
  },
  {
    id: 16,
    name: "Fatima Zahra",
    service: {
      fr: "CRM & Gestion client",
      en: "CRM & Customer Management",
    },
    review: {
      fr: "Avant WEBORA, nos données clients étaient dispersées. La mise en place de ce nouvel outil nous permet désormais de centraliser et suivre nos prospects avec une grande rigueur.",
      en: "Before working with WEBORA, our customer information was spread across different places. The new approach has made it much easier for us to keep track of leads and follow-ups.",
    },
  },
  {
    id: 17,
    name: "James Wilson",
    service: {
      fr: "Système de réservation en ligne",
      en: "Booking & Appointment System",
    },
    review: {
      fr: "Nous voulions que nos clients puissent réserver directement en ligne sans devoir nous appeler sans cesse. Le système mis en place est simple, rapide et parfait sur mobile comme sur ordinateur.",
      en: "We wanted customers to be able to book appointments without constantly contacting us. WEBORA helped us create a much simpler booking experience that works well on both desktop and mobile.",
    },
  },
  {
    id: 18,
    name: "Maria Santos",
    service: {
      fr: "Digitalisation d'entreprise",
      en: "Business Digitalization",
    },
    review: {
      fr: "WEBORA a vu plus loin que la simple création de site en repensant l'ensemble de nos processus métiers. Cette vision globale correspondait exactement à nos attentes.",
      en: "WEBORA looked beyond the website and helped us think about how our business processes could be improved digitally. That broader approach was exactly what we were looking for.",
    },
  },
  {
    id: 19,
    name: "Adam Novak",
    service: {
      fr: "Outils métiers sur mesure",
      en: "Custom Business Tools",
    },
    review: {
      fr: "Aucun logiciel du marché ne correspondait à notre façon de travailler. WEBORA a su concevoir un outil sur mesure parfaitement adapté aux spécificités de notre entreprise.",
      en: "We couldn't find an existing solution that matched the way our business operates. WEBORA listened to our requirements and helped us move towards a solution that fits our workflow much better.",
    },
  },
  {
    id: 20,
    name: "Leïla Haddad",
    service: {
      fr: "Solution digitale complète",
      en: "Complete Digital Solution",
    },
    review: {
      fr: "Ce qui nous a marqués, c'est la capacité de WEBORA à unifier tous les domaines : site web, image de marque, visibilité et solutions digitales, traités avec une cohérence remarquable.",
      en: "What stood out to us was the range of services WEBORA could bring together. Website, branding, visibility and digital solutions were handled as parts of the same project instead of separate pieces.",
    },
  },
];

export default function CustomerReviews() {
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive items per page: Desktop 3, Tablet 2, Mobile 1
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      // Swiped left -> next
      nextPage();
    } else if (distance < -50) {
      // Swiped right -> prev
      prevPage();
    }
  };

  const visibleTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section
      className="py-20 md:py-28 px-4 md:px-8 relative bg-[#0A0F1C] overflow-hidden"
      aria-label="Testimonials"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full border border-[#FF4FA3]/30
                       bg-[#FF4FA3]/10 text-[#FF2D8D] text-sm font-medium mb-4"
          >
            WEBORA Agency
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {language === "fr" ? "Témoignages clients" : "Client Testimonials"}
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            {language === "fr"
              ? "Découvrez les retours de nos clients sur nos réalisations et notre accompagnement."
              : "Discover client feedback on our projects and dedicated digital support."}
          </p>
        </div>

        {/* Testimonials Carousel Container */}
        <div
          className="touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTestimonials.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl p-6 md:p-8 bg-[#111827]/70 border border-white/8
                           hover:border-[#FF4FA3]/30 transition-all duration-300 flex flex-col justify-between
                           shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              >
                <div>
                  {/* Category Tag & Rating */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#FF4FA3]/10 border border-[#FF4FA3]/25 text-[#FF4FA3] truncate max-w-[210px]">
                      {item.service[language]}
                    </span>
                    <div className="flex gap-0.5 text-[#FF4FA3] shrink-0" aria-label="5 stars">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <AiFillStar key={i} size={15} />
                        ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-normal">
                    "{item.review[language]}"
                  </p>
                </div>

                {/* Customer Identity */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF4FA3] to-[#FF2D8D]
                               flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-sm"
                  >
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-sm truncate">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prevPage}
            className="w-11 h-11 rounded-full border border-white/10 bg-[#111827] flex items-center justify-center
                       text-gray-300 hover:text-white hover:border-[#FF4FA3]/50 hover:bg-white/5
                       transition-all active:scale-95"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {Array(totalPages)
              .fill(0)
              .map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`rounded-full transition-all duration-300 ${
                    idx === currentPage
                      ? "w-7 h-2.5 bg-[#FF4FA3]"
                      : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
          </div>

          <button
            onClick={nextPage}
            className="w-11 h-11 rounded-full border border-white/10 bg-[#111827] flex items-center justify-center
                       text-gray-300 hover:text-white hover:border-[#FF4FA3]/50 hover:bg-white/5
                       transition-all active:scale-95"
            aria-label="Next testimonials"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Professional Sample Disclaimer */}
        <p className="text-center text-xs text-gray-500 mt-6 tracking-wide">
          {language === "fr"
            ? "Exemples de témoignages — à remplacer par les avis clients vérifiés"
            : "Sample testimonials — to be replaced with verified client reviews"}
        </p>
      </div>
    </section>
  );
}
