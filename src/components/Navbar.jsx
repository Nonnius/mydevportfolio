import React, { useEffect, useState } from 'react'
import { navItems } from '../data/data'
import { HiMenuAlt3 } from "react-icons/hi";
import './navbar.css'

import { MdClose } from 'react-icons/md';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [showMobileMenu, setShowMobileMenu] = useState(false);
        useEffect(() => {
    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        let current = 'home';

        sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop - 200 &&
            window.pageYOffset < sectionTop + sectionHeight - 200) {
            current = section.id;
        }
        });

        setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow ='hidden'
        }else{
            document.body.style.overflow ='auto'
        }
    }, [showMobileMenu]);

  return (
    <>
        <nav className='fixed bg-white/10 backdrop-blur-md h-10 top-0 w-full z-50 border-b border-[#ffc400]/20
        px-3 transition-all'>
            <div className='container mx-auto flex items-center justify-between px-6'>
                <div className='text-2xl text-outline font-bold'>Programmer</div>
                <ul className='hidden py-2 sm:flex space-x-8 text-[#04ff00] text-sm font-semibold uppercase'>
                    {
                        navItems.map((item)=>(
                            <li key={item.id} className={`hover:text-shadow-text-[#04ff00] transition-colors ${activeSection === item.id?"text-[#04ff00] border-b-2 border-[#04ff00]" : ""}`}>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
                {/*Mobile menu start*/}
                <button className='menuBtn scroll-smooth text-lg transition cursor-pointer md:hidden z-50 fixed top-4 right-4'>
                    <HiMenuAlt3 onClick={()=> setShowMobileMenu(true)}
                    className='menuBtn mt-[-.5rem] text-[#04ff00] md:hidden'/>
                </button>

                {/*Menu pop-out is rendered outside the nav to avoid stacking-context issues*/}

            </div>           
        </nav>

        {/*Menu pop-out rendered outside the nav so it sits above background images/filters*/}
        {showMobileMenu && (
        <div className='fixed inset-0 z-[100] bg-white/10 backdrop-blur-md bg-opacity-90 flex flex-col items-center 
        p-6 transition-all duration-300 md:hidden'>
            <MdClose onClick={() => setShowMobileMenu(false)}                    
            className='text-[#04ff00] text-3xl ml-[20rem] cursor-pointer'
            />
            {/* Add your menu items here */}
            <nav className='mt-10 text-[#04ff00] space-y-4 text-center'>
                <a href="#home" className="block hover:bg-white/20 hover:px-5 rounded hover:border hover:border-[#04ff00]">Home</a>
                <a href="#about" className="block hover:bg-white/20 hover:px-5 rounded hover:border hover:border-[#04ff00]">About</a>
                <a href="#skills" className="block hover:bg-white/20 hover:px-5 rounded hover:border hover:border-[#04ff00]">Skills</a>                
                <a href="#portfolio" className="block hover:bg-white/20 hover:px-5 rounded hover:border hover:border-[#04ff00]">Portfolio</a>
                <a href="#education" className="block hover:bg-white/20 hover:px-5 rounded hover:border hover:border-[#04ff00]">Education</a>
                <a href="#contact" className="block hover:bg-white/20 hover:px-5 rounded hover:border hover:border-[#04ff00]">Contact</a>
            </nav>
        </div>
        )}
    </>
  )
}

export default Navbar