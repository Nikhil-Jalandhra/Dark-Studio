import React from 'react';
import { motion } from 'framer-motion';
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialReddit } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";

function Footer() {

  const navigator = [
    {
      text: "Home"
    },
    {
      text: "Portfolio"
    },
    {
      text: "About"
    },
    {
      text: "Services"
    },
    {
      text: "Contact"
    },
  ]


  const navigator1 = [
    {
      text: "Licenses"
    },
    {
      text: "Changelog"
    },
    {
      text: "StyleGuide"
    }
  ]

  return (
    <div className='w-full h-screen py-[20px] px-[40px]'>
      <div className='h-[30vh] flex items-center py-[20px] w-full overflow-hidden containerFooter border-[1px] border-[#1E1F20] rounded-xl'>
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

      <div className='w-full h-[55vh] my-[30px] flex border-[1px] py-[20px] px-[40px] border-[#1E1F20] rounded-xl'>
        <div className='w-1/2 h-full flex flex-col'>
          <p className='text-[35px] leading-tight'>Ready to start your<br />next project?</p>
          <div>
          <div className=' w-[200px] mt-[15px] containers px-4 h-[35px] flex justify-center items-center  border-[1px] border-gray-700 rounded-full cursor-pointer overflow-hidden'>
                  <div className='h-[30px] overflow-hidden'>
                      <p className='anime'>Let's work together</p>
                      <p className='anime'>Let's work together</p>
                  </div>
                  </div>
          </div>
        </div>
        <div className='w-1/2 flex justify-evenly h-full'>
          <div className=' w-full'>
            <div>
            <p className=' uppercase mb-[10px]'>Navigation</p>
              <div className='text-[20px]'>
                {navigator.map((content,index)=>(
                   <div key={index} className=' flex items-center containers h-[30px] cursor-pointer overflow-hidden '>
                   <div className='h-[30px] overflow-hidden'>
                       <p className='anime'>{content.text}</p>
                       <p className='anime mt-[-5px]'>{content.text}</p>
                   </div>
                   </div>
                ))}
             
            </div>
            </div>
          </div>
          <div className=' w-full'>
            <div>
            <p className=' uppercase mb-[10px]'>Template</p>
              <div className='text-[20px]'>
                {navigator1.map((content,index)=>(
                   <div key={index} className=' flex items-center containers h-[30px] cursor-pointer overflow-hidden '>
                   <div className='h-[30px] overflow-hidden'>
                       <p className='anime'>{content.text}</p>
                       <p className='anime mt-[-5px]'>{content.text}</p>
                   </div>
                   </div>
                ))}
             
            </div>
            </div>
          </div>
          <div className=' uppercase w-full'>
          <p className=' uppercase mb-[10px]'>Template</p>
          <div className='flex'>
            <div className=' text-[30px] flex items-center containers h-[30px] cursor-pointer overflow-hidden '>
                <div className='h-[30px] overflow-hidden'>
                    <p className='anime'><TiSocialTwitter /></p>
                    <p className='anime mt-[-5px]'><TiSocialTwitter /></p>
                </div>
            </div>
            <div className=' text-[30px] flex items-center containers h-[30px] cursor-pointer overflow-hidden '>
                <div className='h-[30px] overflow-hidden'>
                    <p className='anime'><SlSocialReddit /></p>
                    <p className='anime mt-[-5px]'><SlSocialReddit /></p>
                </div>
            </div>
            <div className=' text-[30px] flex items-center containers h-[30px] cursor-pointer overflow-hidden '>
                <div className='h-[30px] overflow-hidden'>
                    <p className='anime'><SlSocialGithub /></p>
                    <p className='anime mt-[-5px]'><SlSocialGithub /></p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
