import React, { useState } from 'react'
import './education.css'
import honors from '../assets/honors.jpg'
import mscred from '../assets/mscred.jpg'
import { PiHandTap } from 'react-icons/pi';
import { MdClose } from 'react-icons/md';


const Education = () => {
    const[openCardz, setOpenCardz] = useState(null);

    const cardz = [
        {
            id: 1,
            title: 'Degree & Certifications',
            description: 'Tap on link to see my educational credentials.',
            link: '',
        },
        {
            id: 2,
            title: 'Microsoft Credentials',
            image: mscred,
            description: 'Tap on link to see my Microsoft training credentials.',
            link: '',
        }
    ]


  return (
    <div className="absolute inset-0 bg-[url('./assets/limebg.jpg')] h-screen bg-no-repeat bg-cover">
        <div className='eduTitle text-center bg-gradient-to-l from-black to-[#046502] 
        rounded-[70%/40%_40%_30%_30%] backdrop-blur-lg w-full mx-auto'>
            <h1 className='py-2 text-[#04ff00] font-semibold mt-[4rem]'>
            Education Credentials
            </h1>
            <p className='desc text-[#04ff00] font-normal mt-[-.5rem]'>
            View my degree and certifications.
            </p>
        </div>

        {/*Education Cards start here*/}
        <div className='eduCard py-4 mt-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-4 gap-6 rounded 
        bg-white/15 mx-auto max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl overflow-hidden cursor-pointer'>

            {/*Card #1*/}
            <div className='group relative overflow-hidden cursor-pointer'>
                <div className='portImg relative h-full w-full overflow-hidden rounded'>
                    <img
                    className='h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                    src={honors}
                    alt='honors'
                    />
                    <button onClick={()=>setOpenCardz(openCardz === 1 ? null: 1)}
                    className='absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 rounded-b bg-gradient-to-l 
                    from-black to-[#046502] hover:opacity-90 text-[#04ff00] py-2 text-sm font-semibold cursor-pointer
                    border border-[#04ff00]'>
                    Degree & Certifications
                    <PiHandTap className='text-lg'/>
                    </button>
                </div>
                {openCardz === 1 && (
                    <div className='absolute inset-0 z-30 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center 
                    px-6 text-center transition-all duration-300'>
                        <p className='text-[#04ff00] text-sm mb-3'>
                            Here, you can view all my educational accomplishments.
                        </p>
                        <a href=''>
                            <button
                            className='px-3 py-1 rounded bg-gradient-to-l from-black to-[#046502] text-[#04ff00] hover:opacity-90
                            border border-[#04ff00]'>
                            View Accreditations
                            </button>
                        </a>
                        <button onClick={()=> setOpenCardz(null)}
                        className='mt-4 text-xs text-[#04ff00] underline hover:text-green-300'>
                            <MdClose className='text-lg'/>
                        </button>
                    </div>
                )}
            </div>

            {/*Card #2*/}
            <div className='group h-full relative overflow-hidden cursor-pointer'>
                <div className='portImg relative h-full w-full overflow-y-hidden rounded'>
                    <img
                     className='dbImg h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                     src={mscred}
                     alt='mscred'
                     />
                     <button onClick={()=> setOpenCardz(openCardz === 2 ? null : 2)}
                     className='absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 rounded-b bg-gradient-to-l 
                    from-black to-[#046502] hover:opacity-90 text-[#04ff00] py-2 text-sm font-semibold cursor-pointer border border-[#04ff00]'>
                        Microsoft Training
                        <PiHandTap className='text-lg'/>
                     </button>
                </div>
                {openCardz === 2 &&(
                    <div className='absolute inset-0 z-30 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center px-6 text-center 
                    transition-all duration-300'>
                        <p className='text-[#04ff00] text-sm mb-3'>
                        View my Microsoft Training here.
                        </p>
                        <a href=''>
                            <button className='px-3 py-1 rounded bg-gradient-to-l from-black to-[#046502] text-[#04ff00] hover:opacity-90
                            border border-[#04ff00]'>
                            View Credentials
                            </button>
                        </a>
                        <button onClick={()=> setOpenCardz(null)}
                        className='mt-4 text-xs text-[#04ff00] underline hover:text-green-300'>
                            <MdClose className='text-lg'/>
                        </button>
                    </div>
                )}
            </div>
        </div>
        
    </div>
  )
}

export default Education 