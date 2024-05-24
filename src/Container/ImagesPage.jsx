import {React} from 'react';
import "../app.css"
import window1 from '../Images/window1.jpg'
import window2 from '../Images/window2.jpg'
import { motion } from 'framer-motion';

function ImagesPage() {

  return (
    <div className='w-full h-full bg-[#0C0D0E] py-3 px-[40px]'>
    <div className='w-full h-screen py-[10px] bg-[#0C0D0E] text-white'>
      <div className=' relative w-full h-full rounded-md'>
        <div className='absolute px-[30px] z-[1] font-semibold w-full h-[80px] items-center flex justify-between'>
            <p>WebDesign</p>
            <p>5.23.2024</p>
        </div>
        <div className='w-full h-full'>
            <img 
            className='w-full h-full opacity-[0.7] object-cover rounded-md' 
            src={window1} alt="" />
        </div>
        <div className=' absolute w-full flex flex-col items-center top-[350px]'>
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
    <div className='w-full h-screen py-[10px] bg-[#0C0D0E] text-white'>
      <div className=' relative w-full h-full rounded-md'>
        <div className='absolute px-[30px] z-[1] font-semibold w-full h-[80px] items-center flex justify-between'>
            <p>WebDesign</p>
            <p>5.24.2024</p>
        </div>
        <div className='w-full h-full'>
            <img 
            className='w-full h-full opacity-[0.7] object-cover rounded-md' 
            src={window2} alt="" />
        </div>
        <div className=' absolute w-full flex flex-col items-center top-[350px]'>
                <p 
                className=' uppercase text-[180px]' 
                style={{fontFamily : "mainFont"}}>
                    Mystery Room
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
    <div 
    className='container h-[70px] flex justify-center items-center 
    text-white border-[1px] border-gray-800 rounded-md my-3'>
      <div className='h-[30px] overflow-hidden'>
      <p className='anime'>View All Project</p>
      <p className='anime'>View All Project</p>
      </div>
    </div>

    </div>
  );
}

export default ImagesPage;
