import {React, useState} from 'react';
import { easeInOut, motion } from 'framer-motion';
import { TfiArrowRight } from "react-icons/tfi";
import { TfiArrowLeft } from "react-icons/tfi";
import { BsDot } from "react-icons/bs";
import Profile from '../Images/Profile.jpg'
import Profile1 from '../Images/Profile1.jpg'

function Slider() {

  const date = new Date

  const time = date.getTime()

  const content = {
    data: [
      {
        image : Profile1,
        heading1: "Code by code, pixel by pixel,",
        heading2: "we're weaving the fabric of digital innovation",
        name: "Nikhil Jalandhra",
        founder: "Founder, Skull Event"
      },
      {
        image : Profile,
        heading1: "From Shadows to Spotlight.",
        heading2: "Dark-Studio Doubles Sales in Record Time!",
        name: "JNEEK",
        founder: "Founder, Dark Studio"
      }
      
    ]
  }

  const [changePath, setChangePath] = useState(0);

  const changeContent = () => {
    changePath === 0 ? setChangePath(1) : setChangePath(0)
  }


  return (
    <div className='w-full lg:h-screen md:h-[600px] h-[450px] relative'>

        <div className='w-full h-full absolute z-[10] flex lg:justify-between lg:items-center items-end lg:px-[40px] md:px-[30px] px-[15px] lg:h-screen md:h-[600px]'>
            <div className='lg:w-[80px] w-full lg:mx-[5px] mx-[2px] rounded-xl containerLeft lg:h-[480px] md:h-[80px] h-[35px] flex justify-center items-center border-[1px] border-gray-800' onClick={changeContent}>
              <div className=' w-[18px] flex overflow-hidden'>
                <p className='animeTwo mr-[10px]'><TfiArrowLeft/></p>
                <p className='animeTwo'><TfiArrowLeft/></p>
              </div>
            </div>
            <div className='lg:w-[80px] w-full lg:mx-[5px] md:mx-[3px] mx-[2px] rounded-xl containerRight lg:h-[480px]  md:h-[80px] h-[35px] flex justify-center items-center border-[1px] border-gray-800' onClick={changeContent}>
            <div className=' w-[18px] flex flex-row-reverse overflow-hidden text-left'>
                <p className='animeTwo ml-[10px]'><TfiArrowRight/></p>
                <p className='animeTwo'><TfiArrowRight/></p>
              </div>
            </div>
        </div>

          <div className='w-full h-full absolute flex justify-center text-center lg:top-[100px] top-0'>
          <motion.div
          key={time}
          initial={{y:50,opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: 1, ease: easeInOut}} 
          className='lg:w-[200px] lg:h-[195px] w-[180px] h-[175px] absolute 
          lg:top-[110px] md:top-[110px] top-[50px] opacity-[0.9] rounded-lg overflow-hidden'>
              <img src={content.data[changePath].image} alt="" />
          </motion.div>

          <motion.div
          key={changePath}
          initial={{y:60,opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: 1.8, ease: easeInOut}}   
          className='absolute lg:top-[250px] md:top-[250px] top-[200px] flex flex-col items-center uppercase'>
            <p className=' lg:text-[80px] md:text-[70px] text-[50px] lg:leading-[80px] md:leading-[70px] leading-[50px] '
              style={{fontFamily : "mainFont"}}>
                     " {content.data[changePath].heading1}<br />{content.data[changePath].heading2}"
            </p>
              
            <p className='flex 
              items-center lg:text-[18px] text-[13px] font-normal lg:mt-[40px] ld:mt-[20px] md:mt-[15px] mt-[10px] whitespace-nowrap'>
                {content.data[changePath].name} <BsDot/> {content.data[changePath].founder}
            </p>
          </motion.div>
        </div>

    </div>
  );
}

export default Slider;
