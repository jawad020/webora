import React from "react";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const breadcrumbPath = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.contact"), href: "/contact" },
  ];
  return (
    <div className="bg-[#0A0F1C] min-h-screen">
      <Breadcrumb path={breadcrumbPath} heading={t("contact.title")} />

      <ContactUs />

      <Footer />
    </div>
  );
};

export default Contact;
