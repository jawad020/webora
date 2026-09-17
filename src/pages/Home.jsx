import React from 'react'
import Hero from '../components/Hero'
import Statistics from '../components/Statistics'
import ServicesOverview from '../components/ServicesOverview'
import FeaturedProjects from '../components/FeaturedProjects'
import ValueProposition from '../components/ValueProposition'
import CustomerReviews from '../components/CustomerReviews'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-[#0A0F1C] min-h-screen">
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Trust Stats */}
      <Statistics />
      
      {/* 3. Short Services Overview */}
      <ServicesOverview />

      {/* 4. Selected Projects Preview */}
      <FeaturedProjects />
      
      {/* 5. Why Choose WEBORA */}
      <ValueProposition />
      
      {/* 6. Customer Reviews */}
      <CustomerReviews />
      
      {/* 7. Final Call-To-Action */}
      <FinalCTA />
      
      {/* 8. Footer */}
      <Footer />
    </div>
  )
}

export default Home