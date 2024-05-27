import React from 'react';
import { TfiArrowRight } from "react-icons/tfi";
import { TfiArrowLeft } from "react-icons/tfi";
import { BsDot } from "react-icons/bs";
import Profile from '../Images/Profile.jpg'

function Slider() {

  const data = [
    "firstData" [
      {
        image : "../Images/Profile.jpg",
        heading: "From Shadows to Spotlight.<br />Dark-Studio Doubles Sales in Record Time!",
        title: "Nikhil Jalandhra <BsDot/> JNEEK <BsDot/> Founder, Dark Studio"
      }
    ],
    "secondData" [
      {
        image : "../Images/Profile.jpg",
        heading: "Hello",
        title: "Hello"
      }
    ]
  ]

  const changeImage = () => {

  }


  return (
    <div className='w-full h-screen relative'>

        <div className='w-full absolute z-[10] flex justify-between items-center px-[40px] h-screen'>
            <div className='w-[80px] h-[480px] flex justify-center items-center border-[1px] border-gray-800' onClick={changeImage}><TfiArrowLeft/></div>
            <div className='w-[80px] h-[480px] flex justify-center items-center border-[1px] border-gray-800' onClick={changeImage}><TfiArrowRight/></div>
        </div>

        {data.map((source,index)=> (
          <div key={index} className='w-full h-screen absolute flex justify-center text-center top-0'>
          <div className='w-[200px] h-[195px] absolute top-[80px] opacity-[0.9] rounded-lg overflow-hidden'>
              <img src={Profile} alt="" />
          </div>
  
              <p className=' text-[120px] leading-[120px] absolute top-[200px]'
              style={{fontFamily : "mainFont"}}>
                      "From Shadows to Spotlight.<br />Dark-Studio Doubles Sales in Record Time!"
              </p>
              
              <p className='absolute uppercase flex items-center text-[18px] font-normal top-[500px]'>Nikhil Jalandhra <BsDot/> JNEEK <BsDot/> Founder, Dark Studio</p>
        </div>
        ))}

    </div>
  );
}

export default Slider;
