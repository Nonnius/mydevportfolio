import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="absolute inset-0 bg-[url('./assets/limebg.jpg')] h-screen bg-no-repeat bg-cover">

       {/*Page Title section*/}
       <div className="pgTitle text-center 
       mt-[1rem]
       s21Ultra1:mt-[3rem] 
       bg-gradient-to-l from-black to-[#046502]
       rounded-[70%/40%_40%_30%_30%] backdrop-blur-lg max-w-[80vw] mx-auto lg:max-w-[30vw]
       border-4 border-[#04ff00] p-1 relative overflow-y-hidden">
    
            <h1 className="about text-[#04ff00] font-semibold text-[24px] mb-2">
                About Me
            </h1>
            <p className="text-[#04ff00] font-normal mt-[-1rem] text-sm">
                Get to know more about my background and experience
            </p>
        </div>

        <div className="aboutCard
        grid grid-cols-2 
        s24Ultra1:grid-cols-1
        s24Ultra1:mt-[4rem]
        mt-[-.8rem]
        gap-6 min-h-[65px] mx-auto max-w-6xl p-6 rounded-lg">
            <div className="waI w-full bg-white/15 rounded border-4 border-[#04ff00] backdrop-blur-md">
                <p className="text-[#bce5bb] text-lg font-semibold py-2 px-4">Who am I</p>
                <p className="text-[#04ff00]/80 mt-2 px-4">
                I'm a developer passionate about building responsive, functional, and visually striking web experiences.
                </p>

                {/*Grid layout for info*/}
                <div className="grid grid-cols-2 mt-6 gap-y-4 text-[11px] px-4 text-[#04ff00] sm:text-center">

                    {/*name*/}
                    <div>
                        <p className="font-normal text-[10px] leading-tight">Name:</p>
                        <p className="font-semibold leading-tight">O’marr Reid</p>
                    </div>
                    <div>
                        <p className="font-normal text-[10px] leading-tight">Email:</p>
                        <p className="font-semibold leading-tight">omarr.reid@outlook.com</p>
                    </div>
                    <div>
                        <p className="font-normal text-[10px] leading-tight">Location:</p>
                        <p className="font-semibold leading-tight">North Carolina</p>
                    </div>
                    <div className='mb-4'>
                        <p className="font-normal text-[10px] leading-tight">Availability:</p>
                        <p className="font-semibold leading-tight">Full-time & Freelance</p>
                    </div>
                </div>
            </div>

            <div className="expCard w-full bg-white/15 rounded border-4 border-[#04ff00] backdrop-blur-md py-2 px-4">
                <p className="text-[#04ff00] text-lg font-semibold">What I do</p>
                <p className="text-[#04ff00]/80 mt-2">
                I specialize in frontend development, UI/UX design, and fullstack integration — blending code with creativity.
                </p>
                <div className="flex text-[#04ff00] mt-4 bg-black/15 px-2 rounded border border-[#04ff00] 
                justify-between items-start gap-4 h-6 py-1">
                    <div>
                        <p className="font-normal text-[10px] leading-tight">Web Developer</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-normal text-[10px] leading-tight">2024–present</p>
                    </div>                
                </div>
                <div className="flex text-[#04ff00] mt-4 bg-black/15 px-2 rounded border border-[#04ff00] 
                justify-between items-start gap-4 h-6 py-1">
                    <div>
                        <p className="font-normal text-[10px] leading-tight">UI/UX Designer</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-normal text-[10px] leading-tight">2024–present</p>
                    </div>                
                </div>
               
                <div className="flex text-[#04ff00] mt-4 bg-black/15 px-2 rounded border border-[#04ff00] 
                justify-between items-start gap-4 h-6 py-1">
                    <div>
                        <p className="font-normal text-[10px] leading-tight">Database Design</p>
                    </div>
                    <div className="mb-4">
                        <p className="font-normal text-[10px] leading-tight">2023–present</p>
                    </div>                
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default About