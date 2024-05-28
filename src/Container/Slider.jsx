import {React, useState} from 'react';
import { TfiArrowRight } from "react-icons/tfi";
import { TfiArrowLeft } from "react-icons/tfi";
import { BsDot } from "react-icons/bs";
import Profile from '../Images/Profile.jpg'
import Profile1 from '../Images/Profile1.jpg'

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
            <div className='w-[80px] h-[480px] flex justify-center items-center border-[1px] border-gray-800' onClick={changeContent}><TfiArrowLeft/></div>
            <div className='w-[80px] h-[480px] flex justify-center items-center border-[1px] border-gray-800' onClick={changeContent}><TfiArrowRight/></div>
        </div>

          <div className='w-full h-screen absolute flex justify-center text-center top-0'>
          <div className='w-[200px] h-[195px] absolute top-[80px] opacity-[0.9] rounded-lg overflow-hidden'>
              <img src={content.data[changePath].image} alt="" />
          </div>
  
              <p className=' text-[120px] leading-[120px] absolute top-[200px] uppercase'
              style={{fontFamily : "mainFont"}}>
                     " {content.data[changePath].heading1}<br />{content.data[changePath].heading2}"
              </p>
              
              <p className='absolute uppercase flex 
              items-center text-[18px] font-normal top-[500px]'>
                {content.data[changePath].name} <BsDot/> {content.data[changePath].founder}
              </p>
        </div>

    </div>
  );
}

export default Slider;
