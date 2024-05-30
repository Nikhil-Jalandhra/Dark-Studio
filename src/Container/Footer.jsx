import { motion } from 'framer-motion';
import React from 'react';

function Footer() {
  return (
    <div className='w-full h-screen py-[20px] px-[40px]'>
      <div className='w-full h-[30vh] bg-slate-200 rounded-lg '>
        <div className=' w-full h-full py-[20px] whitespace-nowrap flex items-center text-[150px] uppercase' style={{fontFamily: "mainFont"}}>
            <div className=' h-full w-full leading-none bg-red-400 overflow-hidden containerFooter'>
                <p className='animeFooter'>let work together</p>
                <p className='animeFooter'>let work together</p>
            </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
