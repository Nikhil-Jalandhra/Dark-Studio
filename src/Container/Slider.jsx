import {React, useState} from 'react';
import { easeInOut, motion } from 'framer-motion';
import { TfiArrowRight } from "react-icons/tfi";
import { TfiArrowLeft } from "react-icons/tfi";
import { BsDot } from "react-icons/bs";
import Profile from '../Images/Profile.jpg'
import Profile1 from '../Images/Profile1.jpg'
import { easeIn } from 'framer-motion/dom';

function Slider() {

  const content = {
    data: [
      {
        image : Profile,
        heading1: "From Shadows to Spotlight.",
        heading2: "Dark-Studio Doubles Sales in Record Time!",
        name: "JNEEK",
        founder: "Founder, Dark Studio"
      },
      {
        image : Profile1,
        heading1: "Code by code, pixel by pixel,",
        heading2: "we're weaving the fabric of digital innovation",
        name: "Nikhil Jalandhra",
        founder: "Founder, Skull Event"
      }
    ]
  }

  const [changePath, setChangePath] = useState(0);

  const changeContent = () => {
    changePath === 0 ? setChangePath(1) : setChangePath(0)
  }


  return (
    <div className='w-full h-screen relative'>

        <div className='w-full absolute z-[10] flex justify-between items-center px-[40px] h-screen'>
            <div className='w-[80px] containerLeft h-[480px] flex justify-center items-center border-[1px] border-gray-800' onClick={changeContent}>
              <div className=' w-[18px] flex overflow-hidden'>
                <p className='animeTwo mr-[10px]'><TfiArrowLeft/></p>
                <p className='animeTwo'><TfiArrowLeft/></p>
              </div>
            </div>
            <div className='w-[80px] containerRight h-[480px] flex justify-center items-center border-[1px] border-gray-800' onClick={changeContent}>
            <div className=' w-[18px] flex flex-row-reverse overflow-hidden text-left'>
                <p className='animeTwo ml-[10px]'><TfiArrowRight/></p>
                <p className='animeTwo'><TfiArrowRight/></p>
              </div>
            </div>
        </div>

          <div className='w-full h-screen absolute flex justify-center text-center top-0'>
          <motion.div
          key={changePath}
          initial={{y:50,opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: 1, ease: easeInOut}} 
          className='w-[200px] h-[195px] absolute 
          top-[110px] opacity-[0.9] rounded-lg overflow-hidden'>
              <img src={content.data[changePath].image} alt="" />
          </motion.div>

          <motion.div
          key={changePath}
          initial={{y:60,opacity: 0}}
          animate={{y:0, opacity: 1}}
          transition={{duration: 1.8, ease: easeInOut}}   
          className='absolute top-[250px] flex flex-col items-center uppercase'>
            <p className=' text-[120px] leading-[120px]'
              style={{fontFamily : "mainFont"}}>
                     " {content.data[changePath].heading1}<br />{content.data[changePath].heading2}"
            </p>
              
            <p className='flex 
              items-center text-[18px] font-normal mt-[40px]'>
                {content.data[changePath].name} <BsDot/> {content.data[changePath].founder}
            </p>
          </motion.div>
        </div>

    </div>
  );
}

export default Slider;
