import React from 'react'
import Navbar from "/src/assets/components/Navbar"
import Hero from "/src/assets/components/Hero"
import TechnicalSkills from "/src/assets/components/TechnicalSkills"



const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-[1300px] mx-auto px-12'>
        <Hero />
        <TechnicalSkills />
      </div>
      
    </>
  )
}

export default App