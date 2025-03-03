import React from 'react'
import Navbar from "/src/assets/components/Navbar"
import Hero from "/src/assets/components/Hero"
import TechnicalSkills from "/src/assets/components/TechnicalSkills"
import Project from "/src/assets/components/Project"



const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-[1300px] mx-auto px-12'>
        <Hero />
        <TechnicalSkills />
        <Project />
      </div>
      
    </>
  )
}

export default App