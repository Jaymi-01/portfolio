import React from 'react'
import Navbar from "/src/assets/components/Navbar"
import Hero from "/src/assets/components/Hero"
import TechnicalSkills from "/src/assets/components/TechnicalSkills"
import Project from "/src/assets/components/Project"
import Contact from "/src/assets/components/Contact"
import Footer from "/src/assets/components/Footer"




const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-[1300px] mx-auto px-12'>
        <Hero ref />
        <TechnicalSkills />
        <Project />
        <Contact />
      </div>
      <Footer />
      
    </>
  )
}

export default App