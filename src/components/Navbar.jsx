import React from 'react';
import {Link} from "react-scroll"


function Navbar() {
  return (
   <header>
    <nav className='flex justify-around items-center'>
        <img className=' rounded-3xl' src='comrawpixel6952101.jpg' alt='image ' height={70} width={70}/>
        <div id="hello" className='flex'>
        <div className=' text-white mx-5  font-bold hover:text-purple-300 hover:text-lg   font-display1'>
                <Link>About</Link>
             </div>
             <div className=' text-white mx-5  font-bold hover:text-purple-300 hover:text-lg   font-display1'>
             <Link to='skillsp' smooth={true} 
      offset={50} 
      duration={500} >Skills</Link>
             </div>
             <div className=' text-white mx-5  font-bold hover:text-purple-300 hover:text-lg   font-display1'>
             <Link>Projects</Link>
             </div>
             <div className=' text-white mx-5  font-bold hover:text-purple-300 hover:text-lg   font-display1'>
             <Link>Contact</Link>
             </div>
        </div>
    </nav>
   </header>
  )
}

export default Navbar
