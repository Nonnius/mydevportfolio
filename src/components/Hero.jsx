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
      <section id='home' className='wholePg relative min-h-[115vh] flex items-center justify-center pt-16 pb-20
      border-b-[4px] border-transparent bg-gradient-to-r from-black via-[#04ff00] to-black'>


        <div className="absolute inset-0 bg-[url('./assets/limebg.jpg')] bg-no-repeat bg-cover">
          {/* Two-column responsive layout: stack on small screens, row on md+ */}
          <div className="layout mt-[-10rem] relative z-10 max-w-6xl mx-auto flex s24Ultra1:flex-col s24Ultra2:flex-row 
          items-center justify-between gap-8 px-6 py-24">

            <div className="fixed top-0 left-0 w-full text-center text-white font-bold z-50 bg-red-500 s24Ultra1:bg-yellow-500 s24Ultra2:bg-green-500">
  Breakpoint active: default → s24Ultra1 → s24Ultra2
</div>

          {/* Text Column */}
            <div className='textArea flex-1 flex flex-col mt-[14rem] s24Ultra1:mt-[10rem] items-start
            s24Ultra1:items-center text-center md:text-left sm:mt-20 sm:px-5'>
              <h3 className="name text-lg font-light capitalize tracking-wide text-[#04ff00]
              s24Ultra1:text-[22px]">
                I'm O'marr Reid
              </h3>
              <AnimatedTitle />
              <p className="openStat mt-1 indent-[1rem] text-[#04ff00] max-w-xl mx-auto md:mx-0
              text-[16px]">
              
              I design and develop awesome, functional responsive websites and applications using the latest tech. I can help you bring your ideas to life.
              </p>

              <div className="mt-6 flex flex-wrap justify-start gap-4 text-sm font-medium s24Ultra1:justify-center">
                <span className="px-4 py-2 bg-gradient-to-l from-black to-[#046502] hover:opacity-90 text-[#04ff00] rounded border-4 border-[#04ff00]">
                  Web Design
                </span>
                <span className="px-4 py-2 bg-gradient-to-l from-black to-[#046502] hover:opacity-90 text-[#04ff00] rounded border-4 border-[#04ff00]">
                  Frontend Development
                </span>
                <span className="px-4 py-2 bg-gradient-to-l from-black to-[#046502] hover:opacity-90 text-[#04ff00] rounded border-4 border-[#04ff00]">
                  UI/UX Design
                </span>
              </div>
            </div>

            {/* Image Column */}
            <div className="flex-1 flex justify-center md:justify-end sm:mt-[12rem] lg:mt-[5rem]">
              <img
                src={selfiebw}
                alt="O'marr Reid"
                className="selfImg w-[22rem] mt-[-4rem] s24Ultra1:mt-[4rem]
                 rounded-full object-cover border-4 border-[#04ff00] shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>  


      <section id='about' className='relative min-h-screen flex items-center justify-center pt-16 pb-20
            '>
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