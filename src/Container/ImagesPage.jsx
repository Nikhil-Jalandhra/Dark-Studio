import React from 'react';
import window1 from '../Images/window1.jpg'
import { motion } from 'framer-motion';

function ImagesPage() {
  return (
    <div className='w-full h-screen py-[10px] px-[40px] bg-[#0C0D0E] text-white'>
      <div className=' relative w-full h-full rounded-md'>
        <div className='absolute px-[30px] z-[1] font-semibold w-full h-[80px] items-center flex justify-between'>
            <p>WebDesign</p>
            <p>8.23.2024</p>
        </div>
        <div className='w-full h-full'>
            <img 
            className='w-full h-full opacity-[0.7] object-cover rounded-md' 
            src={window1} alt="" />
        </div>
        <div className=' absolute w-full h-full flex flex-col items-center top-[350px]'>
                <p 
                className=' uppercase text-[180px]' 
                style={{fontFamily : "mainFont"}}>
                    Symetrical
                </p>
                <div className='px-4 h-[35px]  border-[1px] border-gray-700 rounded-full cursor-pointer overflow-hidden'>
                    <motion.div 
                    whileHover={{y:-30}}
                    className=' py-1 h-full w-full'>
                    <p>View Project</p>
                    <p className='mt-1'>View Project</p>
                    </motion.div>
                </div>
        </div>
      </div>
    </div>
  );
}

export default ImagesPage;
