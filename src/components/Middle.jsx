import React from 'react';

function Middle() {
    const onButtonClick = () => {
        const pdfUrl = "/Parv Kumra CV 4.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    <section className='py-10 px-5 mt-8 w-screen h-screen'>
      <div className='flex  justify-center items-center gap-10'>
        {/* Centered Text Container */}
        <div className='flex flex-col items-center text-center max-w-lg'>
          <div className='text-white font-display1 text-6xl mb-4'>MY NAME</div>
          <div className='text-white font-display1 text-6xl mb-4'>
            IS <span id='hellok' className='font-display1 bg-gradient-to-r from-green-500 via-red-600 to-purple-600 text-transparent bg-clip-text'>PARV</span>
          </div>
          <div className='flex'>
            <div className=' bg-orange-400 w-3'></div>
          <p className='text-gray-400 text-lg text-center'>
            full stack developer who is passionate about tech,loves chess,cricket.I am currently in my 4th year B.tech in CSE
          </p></div>
          <button onClick={onButtonClick} className='mt-8 p-5 text-white  border-solid border-white border-2 rounded-3xl hover:text-purple-950 hover:bg-white font-bold cursor-auto' >Download CV</button>
          
        </div>
        {/* Image Container */}
        <div className='flex-shrink-0'>
          <img src='joker-wallpaper-hd-4k-680x1024.jpg' alt='Joker Wallpaper' height={350} width={350} className='object-contain brightness-70' />
        </div>
      </div>
    </section>
  );
}

export default Middle;
