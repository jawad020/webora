const servicesCatalogue = [
  {
    id: "web-digital",
    number: "01",
    icon: "🌐",
    title: { fr: "Web & Digital", en: "Web & Digital" },
    subcategories: [
      {
        title: { fr: "Création de sites web", en: "Website Creation" },
        services: [
          { fr: "Site vitrine", en: "Showcase website" },
          { fr: "Landing page", en: "Landing page" },
          { fr: "Site professionnel", en: "Professional website" },
          { fr: "Refonte d'un site existant", en: "Redesign of an existing website" },
          { fr: "Site responsive — desktop / tablette / mobile", en: "Responsive website — desktop / tablet / mobile" },
          { fr: "Intégration de formulaires de contact", en: "Contact form integration" },
          { fr: "Intégration WhatsApp", en: "WhatsApp integration" },
          { fr: "Prise de rendez-vous en ligne", en: "Online appointment booking" },
          { fr: "Connexion aux outils professionnels", en: "Connection to professional tools" },
          { fr: "Maintenance et mises à jour", en: "Maintenance and updates" }
        ]
      },
      {
        title: { fr: "Applications web sur mesure", en: "Custom Web Applications" },
        services: [
          { fr: "Applications web métiers", en: "Business web applications" },
          { fr: "Plateformes sur mesure", en: "Custom platforms" },
          { fr: "Portails clients", en: "Client portals" },
          { fr: "Tableaux de bord", en: "Dashboards" },
          { fr: "Systèmes de réservation", en: "Booking systems" },
          { fr: "Outils de gestion interne", en: "Internal management tools" },
          { fr: "Portails professionnels", en: "Professional portals" },
          { fr: "Fonctionnalités personnalisées", en: "Custom features" },
          { fr: "Connexions base de données", en: "Database connections" },
          { fr: "Intégrations API et outils externes", en: "API and external tool integrations" }
        ]
      },
      {
        title: { fr: "E-commerce", en: "E-commerce" },
        services: [
          { fr: "Création de boutique Shopify", en: "Shopify store creation" },
          { fr: "Configuration de la boutique", en: "Store configuration" },
          { fr: "Personnalisation du thème", en: "Theme customization" },
          { fr: "Création de pages produits", en: "Product page creation" },
          { fr: "Organisation du catalogue", en: "Catalogue organization" },
          { fr: "Configuration des paiements", en: "Payment configuration" },
          { fr: "Configuration de la livraison", en: "Shipping configuration" },
          { fr: "Intégration d'outils marketing", en: "Marketing tool integration" },
          { fr: "Automatisation des commandes", en: "Order automation" },
          { fr: "Optimisation de l'expérience utilisateur", en: "User experience optimization" },
          { fr: "Refonte / optimisation d'une boutique existante", en: "Redesign / optimization of an existing store" }
        ]
      }
    ]
  },
  {
    id: "seo-visibility",
    number: "02",
    icon: "🔍",
    title: { fr: "SEO & Visibilité Digitale", en: "SEO & Digital Visibility" },
    subcategories: [
      {
        title: { fr: "SEO", en: "SEO" },
        services: [
          { fr: "Audit SEO", en: "SEO audit" },
          { fr: "Recherche de mots-clés", en: "Keyword research" },
          { fr: "Optimisation des pages", en: "Page optimization" },
          { fr: "Optimisation des titres et métadonnées", en: "Title and metadata optimization" },
          { fr: "Optimisation du contenu", en: "Content optimization" },
          { fr: "Structure du site web", en: "Website structure" },
          { fr: "Optimisation technique", en: "Technical optimization" },
          { fr: "Maillage interne", en: "Internal linking" },
          { fr: "Suivi SEO", en: "SEO monitoring" }
        ]
      },
      {
        title: { fr: "SEO Local", en: "Local SEO" },
        services: [
          { fr: "Création / optimisation Google Business Profile", en: "Google Business Profile creation / optimization" },
          { fr: "Optimisation des informations commerciales", en: "Business information optimization" },
          { fr: "Catégories et services", en: "Categories and services" },
          { fr: "Gestion des informations locales", en: "Local information management" },
          { fr: "Optimisation pour les recherches locales", en: "Optimization for local searches" },
          { fr: "Stratégie d'avis clients", en: "Customer review strategy" }
        ]
      },
      {
        title: { fr: "Visibilité Digitale", en: "Digital Visibility" },
        services: [
          { fr: "Audit de visibilité", en: "Visibility audit" },
          { fr: "Analyse concurrentielle", en: "Competitor analysis" },
          { fr: "Optimisation de la présence en ligne", en: "Online presence optimization" },
          { fr: "Stratégie SEO", en: "SEO strategy" },
          { fr: "Suivi des performances", en: "Performance monitoring" },
          { fr: "Rapports et recommandations", en: "Reports and recommendations" }
        ]
      },
      {
        title: { fr: "Accompagnement SEO", en: "SEO Support" },
        services: [
          { fr: "Suivi mensuel", en: "Monthly monitoring" },
          { fr: "Optimisation continue", en: "Continuous optimization" },
          { fr: "Création de contenu SEO", en: "SEO content creation" },
          { fr: "Suivi des positions", en: "Position tracking" },
          { fr: "Analyse du trafic", en: "Traffic analysis" },
          { fr: "Amélioration progressive du référencement", en: "Progressive SEO improvement" }
        ]
      }
    ]
  },
  {
    id: "ai-automation",
    number: "03",
    icon: "🤖",
    title: { fr: "IA & Automatisation", en: "AI & Automation" },
    subcategories: [
      {
        title: { fr: "Solutions IA", en: "AI Solutions" },
        services: [
          { fr: "Intégration d'intelligence artificielle", en: "Artificial intelligence integration" },
          { fr: "Assistants IA", en: "AI assistants" },
          { fr: "Chatbots intelligents", en: "Intelligent chatbots" },
          { fr: "Agents conversationnels", en: "Conversational agents" },
          { fr: "Génération de contenu assistée par IA", en: "AI-assisted content generation" },
          { fr: "Analyse et traitement de données", en: "Data analysis and processing" },
          { fr: "Solutions IA personnalisées", en: "Customized AI solutions" }
        ]
      },
      {
        title: { fr: "Automatisation", en: "Automation" },
        services: [
          { fr: "Automatisation des tâches répétitives", en: "Repetitive task automation" },
          { fr: "Automatisation administrative", en: "Administrative automation" },
          { fr: "Automatisation commerciale", en: "Sales automation" },
          { fr: "Automatisation marketing", en: "Marketing automation" },
          { fr: "Automatisation des e-mails", en: "Email automation" },
          { fr: "Automatisation des notifications", en: "Notification automation" },
          { fr: "Automatisation des demandes clients", en: "Customer request automation" },
          { fr: "Workflows automatisés", en: "Automated workflows" }
        ]
      },
      {
        title: { fr: "Chatbots & Assistants", en: "Chatbots & Assistants" },
        services: [
          { fr: "Chatbot pour site web", en: "Website chatbot" },
          { fr: "Assistant client", en: "Customer assistant" },
          { fr: "FAQ intelligente", en: "Intelligent FAQ" },
          { fr: "Qualification automatique de leads", en: "Automatic lead qualification" },
          { fr: "Prise de rendez-vous automatisée", en: "Automated appointment booking" },
          { fr: "Routage des demandes", en: "Request routing" }
        ]
      },
      {
        title: { fr: "Intégrations", en: "Integrations" },
        services: [
          { fr: "Connexion entre différents logiciels", en: "Connection between different software" },
          { fr: "CRM", en: "CRM" },
          { fr: "E-mail", en: "Email" },
          { fr: "WhatsApp", en: "WhatsApp" },
          { fr: "Formulaires", en: "Forms" },
          { fr: "Outils marketing", en: "Marketing tools" },
          { fr: "Systèmes de paiement", en: "Payment systems" },
          { fr: "Outils de gestion", en: "Management tools" },
          { fr: "APIs et services externes", en: "APIs and external services" }
        ]
      }
    ]
  },
  {
    id: "business-digital",
    number: "04",
    icon: "💼",
    title: { fr: "Digitalisation d'Entreprise", en: "Business Digitalization" },
    subcategories: [
      {
        title: { fr: "Audit & Diagnostic Digital", en: "Digital Audit & Diagnosis" },
        services: [
          { fr: "Analyse des outils utilisés", en: "Analysis of the tools being used" },
          { fr: "Analyse des processus internes", en: "Analysis of internal processes" },
          { fr: "Identification des tâches chronophages", en: "Identification of time-consuming tasks" },
          { fr: "Identification des processus manuels", en: "Identification of manual processes" },
          { fr: "Analyse de la présence digitale", en: "Analysis of digital presence" },
          { fr: "Analyse du parcours client", en: "Customer journey analysis" },
          { fr: "Identification des opportunités d'automatisation", en: "Identification of automation opportunities" },
          { fr: "Recommandations personnalisées", en: "Personalized recommendations" },
          { fr: "Transformation digitale", en: "Digital transformation" }
        ]
      },
      {
        title: { fr: "Digitalisation des Processus", en: "Process Digitalization" },
        services: [
          { fr: "Mise en place d'outils digitaux", en: "Implementation of digital tools" },
          { fr: "Centralisation de l'information", en: "Information centralization" },
          { fr: "Modernisation des méthodes de travail", en: "Modernization of working methods" },
          { fr: "Création de workflows", en: "Workflow creation" },
          { fr: "Optimisation des processus internes", en: "Internal process optimization" },
          { fr: "Mise en place de solutions collaboratives", en: "Implementation of collaborative solutions" }
        ]
      },
      {
        title: { fr: "Gestion Client & CRM", en: "Customer Management & CRM" },
        services: [
          { fr: "Mise en place de CRM", en: "CRM implementation" },
          { fr: "Gestion des leads", en: "Lead management" },
          { fr: "Suivi clients", en: "Customer tracking" },
          { fr: "Automatisation des relances", en: "Follow-up automation" },
          { fr: "Centralisation des contacts", en: "Contact centralization" },
          { fr: "Suivi commercial", en: "Sales tracking" },
          { fr: "Création de parcours client", en: "Customer journey creation" },
          { fr: "Tableaux de bord commerciaux", en: "Sales dashboards" }
        ]
      },
      {
        title: { fr: "Réservation & Prise de Rendez-vous", en: "Booking & Appointment Scheduling" },
        services: [
          { fr: "Systèmes de réservation", en: "Booking systems" },
          { fr: "Prise de rendez-vous en ligne", en: "Online appointment booking" },
          { fr: "Calendriers synchronisés", en: "Synchronized calendars" },
          { fr: "Confirmation automatique", en: "Automatic confirmation" },
          { fr: "Rappels automatiques", en: "Automatic reminders" },
          { fr: "Gestion des disponibilités", en: "Availability management" },
          { fr: "Paiement en ligne selon les besoins", en: "Online payment depending on requirements" }
        ]
      },
      {
        title: { fr: "Digitalisation Commerciale", en: "Sales Digitalization" },
        services: [
          { fr: "Formulaires de génération de leads", en: "Lead generation forms" },
          { fr: "Landing pages", en: "Landing pages" },
          { fr: "Systèmes de demande de devis", en: "Quote request systems" },
          { fr: "Automatisation des leads", en: "Lead automation" },
          { fr: "Parcours de conversion", en: "Conversion journeys" },
          { fr: "Relances automatiques", en: "Automatic follow-ups" },
          { fr: "Outils de suivi commercial", en: "Sales tracking tools" }
        ]
      },
      {
        title: { fr: "Digitalisation Administrative", en: "Administrative Digitalization" },
        services: [
          { fr: "Formulaires numériques", en: "Digital forms" },
          { fr: "Centralisation des documents", en: "Document centralization" },
          { fr: "Automatisation de certaines tâches", en: "Automation of certain tasks" },
          { fr: "Notifications", en: "Notifications" },
          { fr: "Workflows internes", en: "Internal workflows" },
          { fr: "Outils de suivi", en: "Tracking tools" },
          { fr: "Tableaux de bord", en: "Dashboards" }
        ]
      },
      {
        title: { fr: "Outils Sur Mesure", en: "Custom Tools" },
        services: [
          { fr: "Création d'outils web internes", en: "Creation of internal web tools" },
          { fr: "Tableaux de bord personnalisés", en: "Custom dashboards" },
          { fr: "Plateformes métiers", en: "Business platforms" },
          { fr: "Portails employés", en: "Employee portals" },
          { fr: "Portails clients", en: "Client portals" },
          { fr: "Systèmes de gestion sur mesure", en: "Customized management systems" },
          { fr: "Connexion entre plusieurs outils", en: "Connection between multiple tools" }
        ]
      },
      {
        title: { fr: "IA Appliquée à l'Entreprise", en: "AI Applied to Business" },
        services: [
          { fr: "Automatisation intelligente", en: "Intelligent automation" },
          { fr: "Assistants IA internes", en: "Internal AI assistants" },
          { fr: "Assistants commerciaux", en: "Sales assistants" },
          { fr: "Traitement automatisé des demandes", en: "Automated request processing" },
          { fr: "Génération automatique de documents ou contenus", en: "Automatic document or content generation" },
          { fr: "Analyse de données", en: "Data analysis" },
          { fr: "Optimisation des processus par l'IA", en: "Process optimization through AI" }
        ]
      }
    ]
  }
];

export default servicesCatalogue;
