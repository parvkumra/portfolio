import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; // Ensure this hook is available and correctly implemented
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Skills() {
  useGSAP(() => {
    gsap.to('#skills', {
      x: '-90%', // Horizontal translation
      scrollTrigger: {
        trigger: '#skillsp',
        scroller: 'body',
       
        start: 'top 0%',
        end: 'top -60%',
        scrub: 2,
        pin:true // Optional: Sync animation with scroll
      },
    });
  }, []);

  return (
    <div id='skillsp' className='flex flex-col justify-center items-center w-screen h-screen bg-black'>
      <div id='skills' className='tracking-wider large-text text-[40vw] text-purple-950 font-display1'>
        SKILLS
      </div>
    </div>
  );
}

export default Skills;
