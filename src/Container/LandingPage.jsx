import React from 'react';
import Landing from "../Images/Landing.jpg"
import Landing1 from '../Images/Landing1.jpg';
import { easeInOut, easeOut, motion } from 'framer-motion';

function LandingPage() {



  return (
      <div className='w-full h-screen'>
        <div className='w-full h-[90px] px-[10px] items-center absolute text-[17px] z-[11] flex'>
            <div className='flex h-full items-center'>
                <div className=' flex items-center justify-center containers h-[30px] mx-[25px] py-[30px] cursor-pointer overflow-hidden'>
                <div className='h-[30px] overflow-hidden'>
                    <p className='anime'>About</p>
                    <p className='anime'>About</p>
                </div>
                </div>
                <div className=' flex items-center justify-center containers px-1 h-[30px] mx-[25px] py-[30px] cursor-pointer overflow-hidden'>
                <div className='h-[30px] overflow-hidden'>
                    <p className='anime'>Portfolio</p>
                    <p className='anime'>Portfolio</p>
                </div>
                </div>
            </div>
            <div className='w-full h-full flex items-center justify-center lg:text-[40px] text-[30px] uppercase' style={{fontFamily : "mainFont"}}>
                Dark-Studio
            </div>
            <div className='flex h-full items-center'>
                <div className=' flex items-center justify-center containers h-[30px] mx-[25px] py-[30px] cursor-pointer overflow-hidden'>
                <div className='h-[30px] overflow-hidden'>
                    <p className='anime'>Service</p>
                    <p className='anime'>Service</p>
                </div>
                </div>
                <div className=' flex items-center justify-center containers px-1 h-[30px] mx-[25px] py-[30px] cursor-pointer overflow-hidden'>
                <div className='h-[30px] overflow-hidden'>
                    <p className='anime'>Contact</p>
                    <p className='anime'>Contact</p>
                </div>
                </div>
            </div>
        </div>

        <div 
        className='w-full h-screen absolute z-[10] flex flex-col items-center justify-end overflow-hidden md:pb-[40px]'>
        <div className='lg:text-[300px] whitespace-nowrap lg:mt-[100px] mt-[120px] text-[150px] z-[10] uppercase leading-none' style={{fontFamily : "mainFont"}}>
            Creative Designer
        </div>
        <div className='text-[30px] text-center `z-[10]'>"Creating breathtaking designs that <br />captivate, inspire, and leave lasting impressions"</div>
        <div className='text-[13px] mt-[30px] z-[10] uppercase '>scroll</div>
        <div className='w-[1px] h-[55px] bg-slate-800 mt-[15px] overflow-hidden'>
            <motion.div
            initial={{y:-20}}
            animate={{y:60}} 
            transition={{ duration: 2, repeat: Infinity}}
            className='w-full h-[20px] bg-white'></motion.div>
        </div>
        </div>


        <div className='flex w-full h-screen py-[] px-[10px] pt-[10px]'>
            <div className=' w-1/2 h-screen mr-[10px] opacity-[0.5]'>
                <img src={Landing} alt="" className='rounded-xl h-full object-cover' />
            </div>
            <div className=' w-1/2 h-screen opacity-[0.5]'>
                <img src={Landing1} alt="" className='rounded-xl h-full object-cover' />
            </div>
        </div>
        <div style={{background: "linear-gradient(0deg, rgba(12,13,14,1) 60%, transparent 100%)"}} className='w-full lg:h-screen md:h-[50vh] absolute lg:top-[10px] md:bottom-[-15px]'></div>
        <div></div>
    </div>
  );
}

export default LandingPage;
