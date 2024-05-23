import React from 'react';
import Tv from '../Images/tv.jpg';
import Tape from '../Images/tape.jpg';
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion';

function LandingPage() {



  return (
      <div className='w-full h-screen text-white bg-[#0C0D0E]'>
        <motion.div 
        animate={{y:-750}}
        transition={{duration: 2, ease: easeOut}}
        className='w-full h-full bg-black absolute z-[16]'></motion.div>
        <div className='w-full h-[90px] items-center absolute text-[17px] z-[11] flex'>
            <div className='flex h-full items-center'>
                <div className='px-1 h-[30px] m-[40px] cursor-pointer overflow-hidden'>
                    <motion.div 
                    whileHover={{y:-30}}
                    className=' px-1 h-full w-full'>
                    <p>About</p>
                    <p className='mt-1'>About</p>
                    </motion.div>
                </div>
                <div className='px-1 h-[30px] m-[40px] cursor-pointer overflow-hidden'>
                    <motion.div 
                    whileHover={{y:-30}}
                    className=' px-1 h-full w-full'>
                    <p>Portfolio</p>
                    <p className='mt-1'>Portfolio</p>
                    </motion.div>
                </div>
            </div>
            <div className='w-full h-full flex items-center justify-center text-[40px] uppercase' style={{fontFamily : "mainFont"}}>
                Dark-Studio
            </div>
            <div className='flex h-full items-center'>
            <div className='px-1 h-[30px] m-[40px] cursor-pointer overflow-hidden'>
                    <motion.div 
                    whileHover={{y:-30}}
                    className=' px-1 h-full w-full'>
                    <p>Service</p>
                    <p className='mt-1'>Service</p>
                    </motion.div>
                </div>
                <div className='px-1 h-[30px] m-[40px] cursor-pointer overflow-hidden'>
                    <motion.div 
                    whileHover={{y:-30}}
                    className=' px-1 h-full w-full'>
                    <p>Contact</p>
                    <p className='mt-1'>Contact</p>
                    </motion.div>
                </div>
            </div>
        </div>

        <motion.div 
        animate={{y: 0}}
        initial={{y: 50}}
        transition={{ease: easeInOut, duration: 2}}
        className='w-full absolute z-[10] flex flex-col items-center overflow-hidden'>
        <div className='text-[340px] z-[10] uppercase' style={{fontFamily : "mainFont"}}>
            Creative Designer
        </div>
        <div className='text-[30px] mt-[-55px] text-center `z-[10]'>"Creating breathtaking designs that <br />captivate, inspire, and leave lasting impressions"</div>
        <div className='text-[13px] mt-[30px] z-[10] uppercase '>scroll</div>
        <div className='w-[1px] h-[55px] bg-slate-800 mt-[15px] overflow-hidden'>
            <motion.div
            initial={{y:-20}}
            animate={{y:60}} 
            transition={{ duration: 2, repeat: Infinity}}
            className='w-full h-[20px] bg-white'></motion.div>
        </div>
        </motion.div>


        <div className='flex w-full p-[10px]'>
            <div className=' w-1/2 mr-[10px] opacity-[0.5]'>
                <img src={Tv} alt="" className='rounded-xl' />
            </div>
            <div className=' w-1/2 opacity-[0.5]'>
                <img src={Tape} alt="" className='rounded-xl' />
            </div>
        </div>
        <div style={{background: "linear-gradient(0deg, rgba(12,13,14,1) 60%, transparent 100%)"}} className='w-full h-[600px] absolute top-[0px]'></div>
        <div></div>
    </div>
  );
}

export default LandingPage;
