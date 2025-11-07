import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs
      .sendForm('service_qk83ut7', 'template_280wl2b', form.current, {
        publicKey: 'TIKBmzZgdAzoXl30W',
      })
      .then(
        () => {
          setMessageSent(true);
          form.current.reset(); // Optional: clears the form
        },
        (error) => {
          console.error("EmailJS error:", error);
        },
      );
  };

  return (
    <div className="min-h-screen bg-[url('./assets/limebg.jpg')] bg-no-repeat bg-cover bg-center overflow-y-auto 
    flex flex-col items-center justify-start px-4 py-6 sm:px-6 md:px-8">
      <div className="absolute top-0 left-0 w-full h-[8px] border-6 bg-gradient-to-r from-black via-[#04ff00] to-black z-10"></div>


  {/* Header Section */}
  <div className='conTitle w-full max-w-xl text-center bg-gradient-to-l from-black to-[#046502] rounded-[70%/40%_40%_30%_30%] backdrop-blur-lg p-4 mb-6'>
    <h1 className='text-[#04ff00] font-semibold text-2xl sm:text-3xl mt-4'>Get In Touch</h1>
    <p className='text-[#04ff00] text-base sm:text-lg mt-2  sm:block'>
      Let's make your idea reality or set up an interview!
    </p>
  </div>

  {/* Contact Form */}
  <form
    ref={form}
    onSubmit={sendEmail}
    className='formAll w-full max-w-xl bg-white/15 bg-opacity-80 border border-[#04ff00] backdrop-blur-md rounded-lg shadow-lg p-4 sm:p-6 space-y-4'
  >
    <div className="flex flex-col">
      <label className="text-sm font-semibold text-[#04ff00]">Name</label>
      <input
        type='text'
        name='from_name'
        placeholder='Enter your name'
        className='mt-1 p-2 rounded border-2 bg-white/35 cursor-pointer text-[#04ff00] border-[#04ff00] focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>

    <div className="flex flex-col">
      <label className="text-sm font-semibold text-[#04ff00]">Email</label>
      <input
        type='email'
        name='user_email'
        placeholder='Enter your email'
        className='mt-1 p-2 rounded border-2 bg-white/35 cursor-pointer text-[#04ff00] border-[#04ff00] focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>

    <div className="flex flex-col">
      <label className="text-sm font-semibold text-[#04ff00]">Message</label>
      <textarea
        name='message'
        placeholder='Type your message here'
        rows='4'
        className='mt-1 p-2 rounded border-2 bg-white/35 cursor-pointer text-[#04ff00] border-[#04ff00] focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </div>

    <input
      type='submit'
      value='Send'
      className='w-full text-[#04ff00] cursor-pointer touch-auto bg-gradient-to-l from-black to-[#046502] hover:opacity-90 py-2 px-4 rounded hover:bg-blue-700 transition border border-[#04ff00]'
    />
  </form>
</div>
    
  )
}

export default Contact