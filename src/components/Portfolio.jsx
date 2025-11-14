import React, { useState } from 'react'
import './portfolio.css'
import fsecomm from '../assets/fsecomm.jpg'
import analyticsDB from '../assets/analyticsDB.jpg'
import techwritImg from '../assets/techwritImg.jpg'
import { PiHandTap } from 'react-icons/pi'
import { MdClose } from 'react-icons/md'

const Portfolio = () => {
  const [openCard, setOpenCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'FullStack Ecomm Demo',
      description: 'This Fullstack Project demonstrates my skill at building a commercial site with working payment system.',
      link: '',
    },
    {
      id: 2,
      title: 'Analytics Dashboard Demo',
      description: 'Here, I demonstrate my analytical and coding skills with this financial statement metrics Dashboard demo site. Only the assets statement viewable.',
      link: '',
    },
    {
      id: 3,
      title: 'Technical Writing Demo',
      description: 'Here, I demonstrate my skill at technical writing in laying out the fundamentals of coding syntax & techniques.',
      link: '',
    }
    
  ]


  return (
    <div className="absolute inset-0 bg-[url('./assets/limebg.jpg')] h-screen bg-no-repeat bg-cover">
      
      {/*Page Title section*/}
       <div className="pgTitle mt-[.8rem] text-center bg-gradient-to-l from-black to-[#046502]
        rounded-[70%/40%_40%_30%_30%] backdrop-blur-lg max-w-[80vw] mx-auto lg:max-w-[30vw]
        border-4 border-[#04ff00] p-1 relative overflow-hidden">
    
            <h1 className="about text-[#04ff00] font-semibold text-[24px] mb-2">
                My Portfolio
            </h1>
            <p className="text-[#04ff00] font-normal mt-[-1rem] text-sm">
                View my collection of my most recent work and projects.
            </p>
        </div>

        {/*Project Cards start here*/}     
        <div className='portCard py-4 mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 gap-4 rounded 
        bg-white/15 mx-auto max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl'>
        
          {/*Card #1*/}
          <div className='group mt-2 relative overflow-hidden cursor-pointer'>
            <div className='portImg relative h-full w-full overflow-hidden rounded'>
              <img 
              className='h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              src={fsecomm}
              alt='ecomm'
              />
              <button onClick={()=> setOpenCard(openCard === 1 ? null : 1)}
              className='absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 rounded-b bg-gradient-to-l 
              from-black to-[#046502] hover:opacity-90 text-[#04ff00] py-2 text-sm font-semibold cursor-pointer
              border border-[#04ff00]'>
                FullStack Ecomm Demo
                <PiHandTap className='text-lg'/>
              </button>
            </div>
            {openCard === 1 && (
              <div className='absolute inset-0 z-30 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center 
              px-6 text-center transition-all duration-300'>
                <p className='text-[#04ff00] text-sm mb-3'>
                This FullStack ecommerce site demonstrates my coding skills that consist of an admin panel and payment system.
                </p>
                <a href='https://reactfs-frontend.vercel.app'>
                  <button className='px-3 py-1 rounded bg-gradient-to-l from-black to-[#046502] text-[#04ff00] hover:opacity-90
                  border border-[#04ff00]'>
                  See Project
                  </button>
                </a>
                <button onClick={()=> setOpenCard(null)}
                className='mt-4 text-xs text-[#04ff00] underline hover:text-green-300'>
                  <MdClose className='text-lg'/>
                </button>
              </div>
            )}
          </div>

          {/*Card #2*/}
          <div className='group mt-2 relative overflow-hidden cursor-pointer'>
            <div className='portImg relative h-full w-full overflow-x-hidden overflow-y-hidden rounded'>
              <img
              className='dbImg h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
              src={analyticsDB}
              alt='dashboard'
              />
              <button onClick={()=> setOpenCard(openCard === 2 ? null : 2)}
              className='absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 rounded-b bg-gradient-to-l 
              from-black to-[#046502] hover:opacity-90 text-[#04ff00] py-2 text-sm font-semibold cursor-pointer border border-[#04ff00]'>
                Analytics Dashboard Demo
                <PiHandTap className='text-lg'/>
              </button>
            </div>
            {openCard === 2 && (
              <div className='absolute inset-0 z-30 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center px-6 text-center 
              transition-all duration-300'>
                <p className='text-[#04ff00] text-sm mb-3'>
                  Here, I demonstrate me analytical skills with this financial statement metric dashboard. Only assets are viewable.
                </p>
                <a href='https://analyticsdbdemo.vercel.app'>
                  <button className='px-3 py-1 rounded bg-gradient-to-l from-black to-[#046502] text-[#04ff00] hover:opacity-90
                  border border-[#04ff00]'>
                    See Project
                  </button>
                </a>
                <button onClick={()=> setOpenCard(null)}
                className='mt-4 text-xs text-[#04ff00] underline hover:text-green-300'>
                  <MdClose className='text-lg'/>
                </button>
              </div>
            )}
          </div>
        </div> 
        {/*All Projects Button*/}
        <div className="flex justify-center mt-6">
          <a href='https://project-gallery-blush.vercel.app'>
            <button className="allBtn px-5 py-3 rounded bg-gradient-to-l from-black to-[#046502] 
            text-[#04ff00] hover:opacity-90 border border-[#04ff00] cursor-pointer">
              See all Projects
            </button>
          </a>
        </div>  
    </div>
  )
}

export default Portfolio