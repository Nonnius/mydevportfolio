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
      <section className='relative min-h-screen flex items-center justify-center pt-16 pb-20
      border-b-[4px] border-transparent bg-gradient-to-r from-black via-[#04ff00] to-black'>
        <div className="absolute inset-0 bg-[url('./assets/limebg.jpg')] bg-no-repeat bg-cover">

        {/*Content layout*/}
          <div className="relative mt-[5rem] z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
    {/* Text Column */}
    <div className="textArea mt-20 md:mt-0 md:px-12 text-center md:text-left">
      <h3 className="text-lg font-light capitalize tracking-wide text-[#04ff00]">
        I'm O'marr Reid
      </h3>
      <AnimatedTitle />
      <p className="mt-4 text-[#04ff00] tracking-tight max-w-xl mx-auto md:mx-0">
        I design and develop awesome, functional responsive websites and applications using the latest tech. I can help bring ideas to life.
      </p>

      <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium justify-center md:justify-start">
        {["Web Design", "Frontend Development", "UI/UX Design"].map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gradient-to-l from-black to-[#046502] hover:opacity-90 text-[#04ff00] rounded border border-[#04ff00]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Image Column */}
    <div className="flex justify-center md:justify-end mt-16 md:mt-0">
      <img
        src={selfiebw}
        alt="O'marr Reid"
        className="rounded-full w-50 h-50 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover border-2 border-[#04ff00] shadow-xl"
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