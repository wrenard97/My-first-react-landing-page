import Home from './Home'
import AboutUs from './AboutUs'
import Services from './Services'
import React from 'react'
import OurTeam from './OurTeam'
import Testimonials from './Testimonials';
import ContactUs from './ContactUs'
import Ads from './Ads'
import Footer from './Footer'

function LandingPage() {
  return (
    <div>
        <Home/>
        <AboutUs/>
        <Services/>
        <Testimonials/>
        <OurTeam/>
        <Ads/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default LandingPage