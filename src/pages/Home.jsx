import React from 'react'
import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import ValueProposition from '../components/ValueProposition'
import CustomerReviews from '../components/CustomerReviews'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="bg-[#0A0F1C] min-h-screen">
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Short Services Overview */}
      <ServicesOverview />
      
      {/* 3. Why Choose WEBORA */}
      <ValueProposition />
      
      {/* 4. Customer Reviews */}
      <CustomerReviews />
      
      {/* 5. Final Call-To-Action */}
      <FinalCTA />
      
      {/* 6. Footer */}
      <Footer />
    </div>
  )
}

export default Home