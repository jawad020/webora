import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Send, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactUs() {
  const { t } = useLanguage();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert(t("contact.form.success"));
          form.current.reset();
          setIsSubmitting(false);
        },
        () => {
          alert(t("contact.form.error"));
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#0A0F1C] relative">
      {/* Background elements */}
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-[#FF4FA3]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16"
      >
        {/* Contact Info Panel */}
        <div className="w-full lg:w-5/12">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF4FA3]/30
                           bg-[#FF4FA3]/10 text-[#FF2D8D] text-sm font-medium mb-4">
            {t("contact.title")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("contact.getInTouch")}{" "}
            <span className="bg-gradient-to-r from-[#FF4FA3] to-[#FF2D8D] bg-clip-text text-transparent">
              {t("contact.getInTouchHighlight")}
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            {t("contact.subtitle")}
          </p>

          <div className="space-y-5">
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center shrink-0
                              group-hover:border-[#FF4FA3]/30 group-hover:bg-[#FF4FA3]/10 transition-all duration-300">
                <Mail className="w-5 h-5 text-[#FF2D8D]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">{t("contact.email")}</p>
                <a href="mailto:contact.weboraa@gmail.com" className="text-white font-medium hover:text-[#FF2D8D] transition-colors">
                  contact.weboraa@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center shrink-0
                              group-hover:border-[#FF4FA3]/30 group-hover:bg-[#FF4FA3]/10 transition-all duration-300">
                <Phone className="w-5 h-5 text-[#FF2D8D]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">{t("contact.whatsapp")}</p>
                <a href="https://wa.me/33755769741" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#FF2D8D] transition-colors">
                  +33 7 55 76 97 41
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#111827] border border-white/10 flex items-center justify-center shrink-0
                              group-hover:border-[#FF4FA3]/30 group-hover:bg-[#FF4FA3]/10 transition-all duration-300">
                <Clock className="w-5 h-5 text-[#FF2D8D]" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-0.5">{t("contact.businessHours")}</p>
                <p className="text-white font-medium">{t("contact.businessHoursValue")}</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wider font-semibold">{t("contact.socialMedia")}</p>
            <div className="flex gap-3">
              <a href="https://wa.me/33755769741" target="_blank" rel="noopener noreferrer" 
                 className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400
                            hover:bg-[#FF4FA3] hover:border-[#FF4FA3] hover:text-white hover:scale-110 transition-all duration-300">
                <FaWhatsapp size={18} />
              </a>
              <a href="https://www.instagram.com/contact.webora" target="_blank" rel="noopener noreferrer"
                 className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400
                            hover:bg-[#FF4FA3] hover:border-[#FF4FA3] hover:text-white hover:scale-110 transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/entreprise-webora-1b63773b7" target="_blank" rel="noopener noreferrer"
                 className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400
                            hover:bg-[#FF4FA3] hover:border-[#FF4FA3] hover:text-white hover:scale-110 transition-all duration-300">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="w-full lg:w-7/12">
          <div className="bg-[#111827]/80 backdrop-blur-md border border-white/10 rounded-3xl p-7 md:p-12 shadow-xl relative overflow-hidden">
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4FA3]/10 rounded-full blur-[80px] pointer-events-none" />

            <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1 font-medium">{t("contact.form.name")}</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full bg-[#0A0F1C]/80 border border-white/10 text-white px-5 py-4 rounded-xl
                               focus:outline-none focus:border-[#FF4FA3]/50 focus:shadow-[0_0_0_3px_rgba(255,79,163,0.1)]
                               transition-all duration-300 placeholder-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1 font-medium">{t("contact.form.email")}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#0A0F1C]/80 border border-white/10 text-white px-5 py-4 rounded-xl
                               focus:outline-none focus:border-[#FF4FA3]/50 focus:shadow-[0_0_0_3px_rgba(255,79,163,0.1)]
                               transition-all duration-300 placeholder-gray-600"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1 font-medium">{t("contact.form.company")}</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full bg-[#0A0F1C]/80 border border-white/10 text-white px-5 py-4 rounded-xl
                               focus:outline-none focus:border-[#FF4FA3]/50 focus:shadow-[0_0_0_3px_rgba(255,79,163,0.1)]
                               transition-all duration-300 placeholder-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1 font-medium">{t("contact.phoneLabel")}</label>
                  <input
                    type="text"
                    name="mobile"
                    required
                    className="w-full bg-[#0A0F1C]/80 border border-white/10 text-white px-5 py-4 rounded-xl
                               focus:outline-none focus:border-[#FF4FA3]/50 focus:shadow-[0_0_0_3px_rgba(255,79,163,0.1)]
                               transition-all duration-300 placeholder-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 pl-1 font-medium">{t("contact.form.message")}</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-[#0A0F1C]/80 border border-white/10 text-white px-5 py-4 rounded-xl
                             focus:outline-none focus:border-[#FF4FA3]/50 focus:shadow-[0_0_0_3px_rgba(255,79,163,0.1)]
                             transition-all duration-300 resize-none placeholder-gray-600"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF4FA3] to-[#FF2D8D] 
                           text-white font-semibold px-10 py-4 rounded-xl
                           shadow-[0_0_24px_rgba(255,79,163,0.35)]
                           hover:shadow-[0_0_40px_rgba(255,79,163,0.55)]
                           hover:-translate-y-1 active:translate-y-0
                           transition-all duration-300 text-base
                           disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_24px_rgba(255,79,163,0.35)]"
              >
                {isSubmitting ? t("contact.sending") : t("contact.form.submit")}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
