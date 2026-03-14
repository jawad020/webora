import React from 'react'
import Hero from '../components/Hero'
import ClientTrust from '../components/ClientTrust'
import OurServices from '../components/OurServices'
import WorkingProcess from '../components/WorkingProcess'
import OurProjects from '../components/OurProjects'
import ValueProposition from '../components/ValueProposition'
import Testimonials from '../components/Testimonials'
import Statistics from '../components/Statistics'
import FAQSection from '../components/FAQSection'
import FinalCTA from '../components/FinalCTA'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-[#0A0F1C] min-h-screen">
      {/* 1. Header is in App.jsx */}
      {/* 2. Hero Section */}
      <Hero />
      
      {/* 3. Client Trust Section */}
      <ClientTrust />
      
      {/* 4. Services Section */}
      <OurServices />
      
      {/* 5. Process Section */}
      <WorkingProcess />
      
      {/* 6. Portfolio Section */}
      <OurProjects />
      
      {/* 7. Value Proposition Section */}
      <ValueProposition />
      
      {/* 8. Testimonials Section */}
      <Testimonials />
      
      {/* 9. Statistics Section */}
      <Statistics />
      
      {/* 10. FAQ Section */}
      <FAQSection />
      
      {/* 11. Final Call-To-Action Section */}
      <FinalCTA />
      
      {/* 12. Contact Section */}
      <ContactUs />
      
      {/* 13. Footer */}
      <Footer />
    </div>
  )
}

export default Home