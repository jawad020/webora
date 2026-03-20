import React from 'react'
import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import ValueProposition from '../components/ValueProposition'
import CustomerReviews from '../components/CustomerReviews'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'
import TrustStats from '../components/TrustStats'
import Statistics from '../components/Statistics'

const Home = () => {
  return (
    <div className="bg-[#0A0F1C] min-h-screen">
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Trust Stats */}
      <Statistics />
      
      {/* 3. Short Services Overview */}
      <ServicesOverview />
      
      {/* 4. Why Choose WEBORA */}
      <ValueProposition />
      
      {/* 5. Customer Reviews */}
      <CustomerReviews />
      
      {/* 6. Final Call-To-Action */}
      <FinalCTA />
      
      {/* 7. Footer */}
      <Footer />
    </div>
  )
}

export default Home