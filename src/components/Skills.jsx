import React from 'react'
import './skills.css'
import { FaCss3Alt, FaGitAlt, FaGithubSquare, FaHtml5, FaJsSquare, FaReact, FaStripe } from 'react-icons/fa'
import { SiAxios, SiCloudinary, SiExpress, SiFirebase, SiMongodb, SiPostman, SiRazorpay, SiTailwindcss } from 'react-icons/si'
import { IoLogoNodejs } from 'react-icons/io'
import { DiMsqlServer } from 'react-icons/di'
import { VscVscode } from 'react-icons/vsc'
import { RiVercelFill } from 'react-icons/ri'


const Skills = () => {
  return (
    <div className="absolute inset-0 bg-[url('./assets/limebg.jpg')] h-screen bg-no-repeat bg-cover">

      {/*Page Title section*/}
       <div className="pgTitle 
       mt-[1rem]
       s21Ultra1:mt-[3rem] 
       text-center bg-gradient-to-l from-black to-[#046502]
       rounded-[70%/40%_40%_30%_30%] backdrop-blur-lg max-w-[80vw] mx-auto lg:max-w-[30vw]
       border-4 border-[#04ff00] p-1 relative overflow-hidden">
    
            <h1 className="about text-[#04ff00] font-semibold text-[24px] mb-2">
                Skills
            </h1>
            <p className="text-[#04ff00] font-normal mt-[-.5rem] text-sm">
                The tools I use to make the idea REAL!
            </p>
        </div>

      {/*container #1*/}
      <div className="skillsCard 
      s24Ultra1:mt-[4rem]
      mt-[-.8rem]
      grid grid-cols-2      
      s24Ultra1:grid-cols-1
      gap-4 min-h-[60px] max-w-[65rem] mx-auto p-6 rounded-lg">
        <div className="w-full bg-white/15 rounded border-4 border-[#04ff00] backdrop-blur-md py-2 px-4 text-[#04ff00]
        text-center">
          <p className='text-[#04ff00] mb-2 underline'>
            Frontend
          </p>
          <div className='flex flex-wrap gap-2 text-[16px] sm:items-center justify-center'>
              <div className="flex items-center gap-1 px-2 py-1 rounded">
                <FaHtml5 className='text-orange-500 text-[18px]' />
                <span className='text-[14px]'>HTML</span>            
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded">
                <FaCss3Alt className='text-blue-500 text-[18px]'/>
                <span className='text-[14px]'>CSS</span>           
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded">
                <FaJsSquare className='text-yellow-400 text-[18px]'/>
                <span className='text-[14px]'>Javascript</span>           
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded">
                <FaReact className='text-blue-400 text-[18px]'/>
                <span className='text-[14px]'>ReactJS</span>           
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded">
                <SiTailwindcss className='text-cyan-400 text-[18px]'/>
                <span className='text-[14px]'>Tailwind</span>           
              </div>
          </div>
        </div> 

        {/*Containder #2*/}
        <div className="box2
        h-full w-full bg-white/15 text[16px] rounded border-4 border-[#04ff00] 
        backdrop-blur-md py-2 px-4 text-center">
          <p className='text-[#04ff00] mb-2 underline'>
            Backend
          </p>
          <div className='flex flex-wrap gap-2 text-[16px] sm:items-center justify-center'>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <IoLogoNodejs className='text-green-500 text-[24px]' />
              <span className='text-[14px]'>NodeJS</span>            
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <SiExpress className='text-black text-[18px]' />
              <span className='text-[14px]'>ExpressJS</span>            
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <DiMsqlServer className='text-red-600 text-[24px]' />
              <span className='text-[14px]'>MSSQL</span>            
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <SiMongodb className='text-green-600 text-[24px]' />
              <span className='text-[14px]'>Mongodb</span>            
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <SiCloudinary className='text-blue-400 text-[24px]' />
              <span className='text-[14px]'>Cloudinary</span>            
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <SiFirebase className='text-yellow-400 text-[24px]' />
              <span className='text-[14px]'>Firebase</span>            
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <SiRazorpay className='text-blue-400 text-[18px]' />
              <span className='text-[14px]'>Razorpay</span>            
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <FaStripe className='text-blue-400 text-[30px]' />                          
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <SiAxios className='text-purple-500 text-[24px]' />
              <span className='text-[14px]'>Axios</span>            
            </div>
          </div>
        </div>       
      </div>
      <div className="toolCard
      s24Ultra1:mt-[-1.8rem]
      mt-[-2rem]
      grid grid-cols-1 gap-4 min-h-[65px] p-6 max-w-[65rem] mx-auto rounded-lg">       
        <div className="bg-white/15 rounded border-4 border-[#04ff00] backdrop-blur-md py-1 text-[#04ff00]
        text-center">
          <p className='text-[#04ff00] mb-2 underline'>
            Tools
          </p>
          <div className='flex flex-wrap gap-2 text-[16px] sm:items-center justify-center'>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <FaGitAlt className='text-orange-500 text-[24px]' />
              <span className='text-[14px]'>Git</span>            
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <VscVscode className='text-blue-400 text-[24px]' />
              <span className='text-[14px]'>VSCode</span>            
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <FaGithubSquare className='text-black text-[24px]' />
              <span className='text-[14px]'>Github</span>            
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <RiVercelFill className='text-black text-[24px]' />
              <span className='text-[14px]'>Vercel</span>            
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded text-[#04ff00]">
              <SiPostman className='text-orange-500 text-[24px]' />
              <span className='text-[14px]'>Postman</span>            
            </div>
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Skills