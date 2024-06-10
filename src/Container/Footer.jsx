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
    <div className='w-full lg:h-screen md:h-[600px] h-[1000px] py-[20px] ld:px-[40px] lg:px-[20px] px-[10px]'>
      <div className='lg:h-[220px] md:h-[150px] h-[70px] flex items-center lg:py-[10px] md:py-[10px] py-[2px] w-full overflow-hidden containerFooter border-[1px] border-[#1E1F20] rounded-xl'>
        <motion.div 
        animate={{x: "-100%"}}
        transition={{duration: 15, repeat: Infinity, ease: 'linear'}}
        className='h-full flex items-center lg:text-[185px] md:text-[120px] text-[60px] uppercase leading-none overflow-hidden' style={{minWidth: "fit-content", fontFamily: "mainFont"}}>
          <div className='w-full whitespace-nowrap h-full animeFooter'>
            <p className='animeFooter' >Let's work together</p>
            <p className='animeFooter' >Let's work together</p>
          </div>
          <div className='lg:px-[30px] md:px-[30px] px-[20px]'>-</div>
          <div className='w-full whitespace-nowrap h-full animeFooter'>
            <p className='animeFooter' >Let's work together</p>
            <p className='animeFooter' >Let's work together</p>
          </div>
          <div className='lg:px-[30px] md:px-[30px] px-[20px]'>-</div>
        </motion.div>
        <motion.div 
        animate={{x: "-100%"}}
        transition={{duration: 15, repeat: Infinity, ease: 'linear'}}
        className='w-full h-full flex items-center lg:text-[185px] md:text-[120px] text-[60px] uppercase leading-none overflow-hidden' style={{minWidth: "fit-content", fontFamily: "mainFont"}}>
          <div className='w-full whitespace-nowrap h-full animeFooter'>
            <p className='animeFooter' >Let's work together</p>
            <p className='animeFooter' >Let's work together</p>
          </div>
          <div className='lg:px-[30px] md:px-[30px] px-[20px]'>-</div>
          <div className='w-full whitespace-nowrap h-full animeFooter'>
            <p className='animeFooter' >Let's work together</p>
            <p className='animeFooter' >Let's work together</p>
          </div>
          <div className='lg:px-[30px] md:px-[30px] px-[20px]'>-</div>
        </motion.div>
      </div>

      <div className='w-full lg:h-[55vh] md:h-[350px] my-[30px] lg:flex md:flex border-[1px] py-[20px] lg:px-[40px]
      md:px-[30px] px-[20px] border-[#1E1F20] rounded-xl'>
        <div className='lg:w-1/2 md:w-1/2 h-full flex flex-col'>
          <p className='lg:text-[35px] text-[25px] leading-tight'>Ready to start your<br />next project?</p>
          <div>
          <div className=' w-[200px] mt-[15px] containers px-4 h-[33px] flex justify-center items-center border-[1px] border-gray-700 rounded-full cursor-pointer overflow-hidden'>
                  <div className='h-[30px] overflow-hidden'>
                      <p className='anime'>Let's work together</p>
                      <p className='anime'>Let's work together</p>
                  </div>
                  </div>
          </div>
        </div>
        <div className='w-1/2 lg:flex md:flex justify-evenly h-full mt-[20px]'>
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
          <div className=' w-full mt-[20px]'>
            <p className=' uppercase mb-[5px]'>Template</p>
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
          <div className=' uppercase w-full'>
          <p className=' uppercase mb-[10px]'>Social</p>
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
