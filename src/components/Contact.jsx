import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useGSAP(() => {
    gsap.from('#contactimg', {
      x: '600px',
      rotate: 180,
      delay: 5,
      ease: 'power1.in',
      scrollTrigger: {
        trigger: '#contact',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
    });
  }, []);

  return (
    <div id='contact' className='flex flex-col w-screen h-screen bg-slate-300 mt-0'>
      <center>
        <div className='mt-8 text-6xl font-bold font-display1'>Contact Me?</div>
      </center>
      <div className='flex justify-around items-center mt-12'>
        <img
          id='contactimg'
          src='—Pngtree—aircraft paper plane realistic paper_3784466.png'
          height={500}
          width={500}
          alt='Contact Image'
        />
        <form
          action="mailto:parvkumra2003@gmail.com"
          method="post"
          encType="text/plain"
          className='flex flex-col justify-center items-center'
        >
          <input
            className='rounded-xl py-2 px-8 my-2'
            type='text'
            name='firstName'
            placeholder='First Name'
            required
          />
          <input
            className='rounded-xl py-2 px-8 my-2'
            type='text'
            name='lastName'
            placeholder='Last Name'
            required
          />
          <input
            className='rounded-xl py-2 px-8 my-2'
            type='email'
            name='email'
            placeholder='Email'
            required
          />
          <textarea
            className='rounded-xl p-6 my-2'
            name='message'
            rows={6}
            placeholder='Message'
            required
          />
          <button
            type='submit'
            className='rounded-xl font-semibold text-white bg-blue-300 px-4 py-2'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
