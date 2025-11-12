import React from 'react'
import './hero.css'
import selfiebw from '../assets/selfiebw.jpg'
import AnimatedTitle from './utils/AnimatedTitle'
import About from './About'

import Skills from './Skills'
import Portfolio from './Portfolio'
import Education from './Education'
import Contact from './Contact'


const Hero = () => {
  return (
    <>
      <section id='home' className='wholePg relative min-h-[100vh] flex items-center justify-center pt-16 pb-20
      border-b-[4px] border-transparent bg-gradient-to-r from-black via-[#04ff00] to-black'>


        <div className="absolute inset-0 bg-[url('./assets/limebg.jpg')] bg-no-repeat bg-cover">
          {/* Two-column responsive layout: stack on small screens, row on md+ */}
          <div className="layout mt-[-10rem] relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-24">

  {/* Text Column */}
  <div className="textArea flex-1 flex flex-col s24Ultra2:flex-row items-center md:items-start text-center md:text-left sm:mt-20 sm:px-5">
    <h3 className="name text-lg font-light capitalize tracking-wide text-[#04ff00]">
      I'm O'marr Reid
    </h3>
    <AnimatedTitle />
    <p className="openStat mt-4 text-[#04ff00] max-w-xl mx-auto md:mx-0">
      I design and develop awesome, functional responsive websites and applications using the latest tech. I can help bring ideas to life.
    </p>

    <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-sm font-medium">
      <span className="px-4 py-2 bg-gradient-to-l from-black to-[#046502] hover:opacity-90 text-[#04ff00] rounded border border-[#04ff00]">
        Web Design
      </span>
      <span className="px-4 py-2 bg-gradient-to-l from-black to-[#046502] hover:opacity-90 text-[#04ff00] rounded border border-[#04ff00]">
        Frontend Development
      </span>
      <span className="px-4 py-2 bg-gradient-to-l from-black to-[#046502] hover:opacity-90 text-[#04ff00] rounded border border-[#04ff00]">
        UI/UX Design
      </span>
    </div>
  </div>

  {/* Image Column */}
  <div className="flex-1 flex justify-center md:justify-end sm:mt-[12rem] lg:mt-[5rem]">
    <img
      src={selfiebw}
      alt="O'marr Reid"
      className="selfImg sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-2 border-[#04ff00] shadow-xl"
    />
  </div>



          </div>
        </div>
      </section>  


      <section id='about' className='relative min-h-screen flex items-center justify-center pt-16 pb-20
            border-t-[4px] border-transparent bg-gradient-to-r from-black via-[#04ff00] to-black'>
        <About/>
      </section>
      <section id='skills' className="relative border-10 border-t-[8px] border-transparent bg-gradient-to-r 
      from-black via-[#04ff00] to-black min-h-screen flex items-center justify-center pt-16 pb-20">
        
        <Skills/>
      </section>
      <section id='portfolio' className="relative border-10 border-t-[8px] border-transparent bg-gradient-to-r 
      from-black via-[#04ff00] to-black min-h-screen flex items-center justify-center pt-16 pb-20">
        
        <Portfolio/>
      </section>
      <section id='Education' className="relative border-10 border-t-[8px] border-transparent bg-gradient-to-r 
      from-black via-[#04ff00] to-black min-h-screen flex items-center justify-center pt-16 pb-20">
        
        <Education/>
      </section>
      <section id='contact' className="relative ">        
        <Contact/>
      </section>


    </>
  )
}

export default Hero