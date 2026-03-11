import React from 'react'
import Hero from '../components/Hero'
import OurServices from '../components/OurServices'
import About from '../components/About'
import WorkingProcess from '../components/WorkingProcess'
import OurProjects from '../components/OurProjects'
import TeamHighlights from '../components/TeamHighlights'
import ContactUs from '../components/ContactUs'
import Testimonials from '../components/Testimonials'
import NewsAndBlogs from '../components/NewsAndBlogs'
import FAQSection from '../components/FAQSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div style={{ background: '#0A0F1C' }}>
      <Hero />
      <OurServices />
      <OurProjects />
      <Testimonials />
      <div style={{ background: '#111827' }}>
        <About />
      </div>
      <div style={{ background: '#0A0F1C' }}>
        <WorkingProcess />
      </div>
      <div style={{ background: '#111827' }}>
        <TeamHighlights />
      </div>
      <div style={{ background: '#0A0F1C' }}>
        <ContactUs />
      </div>
      <div style={{ background: '#111827' }}>
        <NewsAndBlogs />
      </div>
      <div style={{ background: '#0A0F1C' }}>
        <FAQSection />
      </div>
      <Footer />
    </div>
  )
}

export default Home