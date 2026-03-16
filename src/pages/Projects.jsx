import React from "react";
import OurProjects from "../components/OurProjects";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();
  const breadcrumbPath = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.projects"), href: "/projects" },
  ];
  return (
    <div className="bg-[#0A0F1C] min-h-screen">
      <Breadcrumb path={breadcrumbPath} heading={t("portfolio.title")} />

      <OurProjects />

      <FinalCTA />

      <Footer />
    </div>
  );
};

export default Projects;
