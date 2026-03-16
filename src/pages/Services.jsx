import React from "react";
import OurServices from "../components/OurServices";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";
import { useLanguage } from "../context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const breadcrumbPath = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "/services" },
  ];
  return (
    <div className="bg-[#0A0F1C] min-h-screen">
      <Breadcrumb path={breadcrumbPath} heading={t("services.title")} />

      <OurServices />

      <FinalCTA />

      <Footer />
    </div>
  );
};

export default Services;
