import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
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
    <section className="py-24 px-4 md:px-8 bg-[#0A0F1C] relative">
      {/* Background elements */}
      <div className="absolute top-[20%] right-0 w-[600px] h-[600px] bg-[#0066FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12"
      >
        {/* Contact Info Panel */}
        <div className="w-full lg:w-1/3">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#0066FF]/30
                           bg-[#0066FF]/10 text-[#00A3FF] text-sm font-medium mb-4">
            {t("contact.title")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-[#0066FF] to-[#00A3FF] bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            {t("contact.subtitle")}
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#00A3FF]" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <p className="text-white font-medium">contact.weboraa@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#00A3FF]" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                <p className="text-white font-medium">+33 7 55 76 97 41</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#111827] border border-white/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-[#00A3FF]" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Business Hours</p>
                <p className="text-white font-medium">Mon - Sun: 9:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider font-semibold">Social Media</p>
            <div className="flex gap-4">
              <a href="https://wa.me/33755769741" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0066FF] hover:border-[#0066FF] transition-all">
                <FaWhatsapp size={18} />
              </a>
              <a href="https://www.instagram.com/contact.webora" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0066FF] hover:border-[#0066FF] transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/entreprise-webora-1b63773b7" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#0066FF] hover:border-[#0066FF] transition-all">
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="w-full lg:w-2/3">
          <div className="bg-[#111827]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/10 rounded-full blur-[80px] pointer-events-none" />

            <form ref={form} onSubmit={sendEmail} className="relative z-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1">{t("contact.form.name")}</label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full bg-[#0A0F1C] border border-white/10 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#0066FF]/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1">{t("contact.form.email")}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[#0A0F1C] border border-white/10 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#0066FF]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1">{t("contact.form.company")}</label>
                  <input
                    type="text"
                    name="company"
                    className="w-full bg-[#0A0F1C] border border-white/10 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#0066FF]/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 pl-1">Phone Number *</label>
                  <input
                    type="text"
                    name="mobile"
                    required
                    className="w-full bg-[#0A0F1C] border border-white/10 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#0066FF]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400 pl-1">{t("contact.form.message")}</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-[#0A0F1C] border border-white/10 text-white px-5 py-4 rounded-xl focus:outline-none focus:border-[#0066FF]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#0066FF] to-[#00A3FF] 
                           text-white font-semibold px-8 py-4 rounded-xl hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]
                           transition-all hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isSubmitting ? "Sending..." : t("contact.form.submit")}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
