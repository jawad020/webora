import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WeborLogo from "./ui/WeborLogo";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const socialIcons = [
  { icon: FaWhatsapp, link: "https://wa.me/33755769741" },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/contact.webora",
  },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/entreprise-webora-1b63773b7",
  },
];

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    [t("footer.quickLinks")]: [
      { label: t("nav.home"), to: "/" },
      { label: t("nav.services"), to: "/services" },
      { label: t("nav.projects"), to: "/projects" },
      { label: t("nav.about"), to: "/about" },
      { label: t("nav.contact"), to: "/contact" },
    ],
    "Legal": [
      { label: "Privacy Policy", to: "/policy" },
      { label: "Terms of Service", to: "#" },
    ]
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ background: "#0A0F1C" }}
      className="border-t border-white/5 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand col */}
          <div className="md:col-span-2 space-y-5">
            <WeborLogo height={40} />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex gap-3 pt-2">
              {socialIcons.map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 bg-[#111827]
                             flex items-center justify-center text-gray-400
                             hover:bg-[#FF4FA3] hover:border-[#FF4FA3] hover:text-white
                             transition-all duration-300 shadow-md"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wider uppercase">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-gray-400 text-sm hover:text-[#FF2D8D] transition-colors duration-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info strip */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-gray-400">
            <div className="flex flex-col">
              <span className="text-white/40 uppercase text-xs mb-1">{t("footer.contactInfo")}</span>
              <a href="mailto:contact.weboraa@gmail.com" className="hover:text-[#FF2D8D] transition-colors duration-200">
                contact.weboraa@gmail.com
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-white/40 uppercase text-xs mb-1">WhatsApp</span>
              <a href="https://wa.me/33755769741" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF2D8D] transition-colors duration-200">
                +33 7 55 76 97 41
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} WEBORA. {t("footer.rights")}</p>
        </div>
      </div>
    </motion.footer>
  );
}
