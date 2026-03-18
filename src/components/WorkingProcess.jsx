import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const stepIcons = [Search, PenTool, Code2, Rocket];

const WorkingProcess = () => {
  const { t } = useLanguage();

  const steps = [1, 2, 3, 4];

  return (
    <section className="py-24 px-4 md:px-8 bg-[#111827] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF4FA3]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF4FA3]/30
                           bg-[#FF4FA3]/10 text-[#FF2D8D] text-sm font-medium mb-4">
            {t("process.title")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {t("process.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-white/10" />

          {steps.map((num, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative text-center group"
              >
                {/* Step Circle */}
                <div className="w-24 h-24 mx-auto bg-[#0A0F1C] border-2 border-white/10 
                                rounded-full flex items-center justify-center relative z-10 mb-8
                                group-hover:border-[#FF4FA3] transition-colors duration-300 shadow-xl">
                  <Icon className="w-8 h-8 text-[#FF2D8D] group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF4FA3] rounded-full 
                                  flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {num}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {t(`process.steps.${num}.title`)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {t(`process.steps.${num}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkingProcess;
