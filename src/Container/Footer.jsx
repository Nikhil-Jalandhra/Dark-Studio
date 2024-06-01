import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <div className='w-full h-screen py-[20px] px-[40px]'>
      <div className='h-[30vh] flex items-center py-[20px] w-full overflow-hidden containerFooter border-[1px] border-[#1E1F20] rounded-lg'>
        <motion.div 
        animate={{x: "-100%"}}
        transition={{duration: 15, repeat: Infinity, ease: 'linear'}}
        className='h-full flex items-center text-[160px] uppercase leading-none overflow-hidden' style={{minWidth: "fit-content", fontFamily: "mainFont"}}>
          <div className='w-full whitespace-nowrap h-full animeFooter'>
            <p className='animeFooter' >Let's work together</p>
            <p className='animeFooter' >Let's work together</p>
          </div>
          <div className='px-[30px]'>-</div>
          <div className='w-full whitespace-nowrap h-full animeFooter'>
            <p className='animeFooter' >Let's work together</p>
            <p className='animeFooter' >Let's work together</p>
          </div>
          <div className='px-[30px]'>-</div>
        </motion.div>
        <motion.div 
        animate={{x: "-100%"}}
        transition={{duration: 15, repeat: Infinity, ease: 'linear'}}
        className='w-full h-full flex items-center text-[160px] uppercase leading-none overflow-hidden' style={{minWidth: "fit-content", fontFamily: "mainFont"}}>
          <div className='w-full whitespace-nowrap h-full animeFooter'>
            <p className='animeFooter' >Let's work together</p>
            <p className='animeFooter' >Let's work together</p>
          </div>
          <div className='px-[30px]'>-</div>
          <div className='w-full whitespace-nowrap h-full animeFooter'>
            <p className='animeFooter' >Let's work together</p>
            <p className='animeFooter' >Let's work together</p>
          </div>
          <div className='px-[10px]'>-</div>
        </motion.div>
      </div>
    </div>
  );
}

export default Footer;
