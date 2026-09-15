import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Send, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactUs() {
  const { t, language } = useLanguage();
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;

    setStatus("submitting");
    setErrorMessage("");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Direct submission fallback via mailto to contact.weboraa@gmail.com
      const formData = new FormData(form.current);
      const name = formData.get("first_name") || "";
      const email = formData.get("email") || "";
      const phone = formData.get("mobile") || "";
      const company = formData.get("company") || "";
      const message = formData.get("message") || "";

      const subject = encodeURIComponent(`Nouveau contact client - ${name}`);
      const body = encodeURIComponent(
        `Nom: ${name}\nEmail: ${email}\nTéléphone: ${phone}\nEntreprise: ${company}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:contact.weboraa@gmail.com?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setStatus("success");
          if (form.current) form.current.reset();
        },
        (error) => {
          console.error("EmailJS submission error:", error);
          setStatus("error");
          setErrorMessage(
            language === "fr"
              ? "L'envoi automatique a rencontré une difficulté. Vous pouvez nous écrire directement à contact.weboraa@gmail.com ou sur WhatsApp au +33 7 53 04 35 32."
              : "Automatic sending encountered an issue. You can email us directly at contact.weboraa@gmail.com or via WhatsApp at +33 7 53 04 35 32."
          );
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
                <a href="https://wa.me/33753043532" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-[#FF2D8D] transition-colors">
                  +33 7 53 04 35 32
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
              <a href="https://wa.me/33753043532" target="_blank" rel="noopener noreferrer" 
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

            {/* Success Notification Banner */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-5 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 font-bold mt-0.5">
                  ✓
                </div>
                <div>
                  <p className="font-semibold">{t("contact.form.success")}</p>
                  <p className="text-xs text-emerald-400/80 mt-1">
                    {language === "fr"
                      ? "Votre demande a bien été transmise à l'équipe WEBORA. Nous vous répondrons sous 24h."
                      : "Your request has been sent to the WEBORA team. We will reply within 24 hours."}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Error Notification Banner */}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-5 rounded-2xl border border-rose-500/30 bg-rose-500/10 text-rose-300 text-sm flex items-start gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 font-bold mt-0.5">
                  !
                </div>
                <div>
                  <p className="font-semibold">{t("contact.form.error")}</p>
                  <p className="text-xs text-rose-300/80 mt-1">{errorMessage}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <a
                      href="mailto:contact.weboraa@gmail.com"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                    >
                      <Mail size={12} /> contact.weboraa@gmail.com
                    </a>
                    <a
                      href="https://wa.me/33753043532"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/30 text-white text-xs font-medium transition-colors"
                    >
                      <FaWhatsapp size={12} /> +33 7 53 04 35 32
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

            <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1 font-medium">{t("contact.form.name")} *</label>
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
                  <label className="text-sm text-gray-400 pl-1 font-medium">{t("contact.form.email")} *</label>
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
                    type="tel"
                    name="mobile"
                    required
                    className="w-full bg-[#0A0F1C]/80 border border-white/10 text-white px-5 py-4 rounded-xl
                               focus:outline-none focus:border-[#FF4FA3]/50 focus:shadow-[0_0_0_3px_rgba(255,79,163,0.1)]
                               transition-all duration-300 placeholder-gray-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 pl-1 font-medium">{t("contact.form.message")} *</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-[#0A0F1C]/80 border border-white/10 text-white px-5 py-4 rounded-xl
                             focus:outline-none focus:border-[#FF4FA3]/50 focus:shadow-[0_0_0_3px_rgba(255,79,163,0.1)]
                             transition-all duration-300 resize-none placeholder-gray-600"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF4FA3] to-[#FF2D8D] 
                             text-white font-semibold px-10 py-4 rounded-xl
                             shadow-[0_0_24px_rgba(255,79,163,0.35)]
                             hover:shadow-[0_0_40px_rgba(255,79,163,0.55)]
                             hover:-translate-y-1 active:translate-y-0
                             transition-all duration-300 text-base
                             disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_24px_rgba(255,79,163,0.35)]
                             min-h-[52px]"
                >
                  {status === "submitting" ? t("contact.sending") : t("contact.form.submit")}
                  <Send size={18} />
                </button>

                {status === "success" && (
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-xs text-gray-400 hover:text-white underline transition-colors"
                  >
                    {language === "fr" ? "Envoyer un autre message" : "Send another message"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
