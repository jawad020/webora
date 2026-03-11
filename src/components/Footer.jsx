import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WeborLogo from "./ui/WeborLogo";
import {
  FaFacebookF, FaTwitter, FaGithubSquare, FaInstagram, FaLinkedinIn,
} from "react-icons/fa";

const socialIcons = [
  { icon: FaFacebookF, link: "#" },
  { icon: FaTwitter, link: "#" },
  { icon: FaGithubSquare, link: "#" },
  { icon: FaInstagram, link: "#" },
  { icon: FaLinkedinIn, link: "#" },
];

const footerLinks = {
  Services: [
    { label: "Website Development", to: "/websitedevelopment" },
    { label: "SEO & Ranking", to: "/services" },
    { label: "API Development", to: "/apidevelopment" },
    { label: "MERN Stack", to: "/merndevelopment" },
    { label: "SaaS Development", to: "/saasdevelopment" },
  ],
  Company: [
    { label: "Home", to: "/" },
    { label: "Our Team", to: "/team" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
    { label: "Privacy Policy", to: "/policy" },
  ],
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ background: "#0A0F1C" }}
      className="border-t border-white/5 text-white"
    >
      {/* Top gradient line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand col */}
          <div className="md:col-span-2 space-y-5">
            <WeborLogo height={36} />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              A professional web development and SEO agency delivering high-quality digital
              solutions for businesses of all sizes — from startups to enterprise.
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5
                             flex items-center justify-center text-gray-400
                             hover:border-[#0066FF]/60 hover:text-[#0066FF]
                             transition-all duration-200"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide uppercase">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-gray-400 text-sm hover:text-[#00A3FF] transition-colors duration-200"
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
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="mailto:info@yourcompany.com"
               className="hover:text-[#00A3FF] transition-colors duration-200">
              info@yourcompany.com
            </a>
            <a href="https://yourwebsite.com"
               className="hover:text-[#00A3FF] transition-colors duration-200">
              yourwebsite.com
            </a>
          </div>

          {/* Newsletter */}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Get latest updates"
              className="bg-white/5 border border-white/10 text-white text-sm rounded-full
                         py-2 px-4 focus:outline-none focus:border-[#0066FF]/60 w-48"
            />
            <button className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] text-white text-sm
                               font-semibold py-2 px-5 rounded-full
                               shadow-[0_0_16px_rgba(0,102,255,0.35)]
                               hover:shadow-[0_0_24px_rgba(0,102,255,0.5)]
                               transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between
                        items-center gap-3 text-xs text-gray-500">
          <p>© 2025 WEBORA. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
