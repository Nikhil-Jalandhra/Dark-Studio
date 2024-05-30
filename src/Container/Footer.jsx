import { motion } from 'framer-motion';
import React from 'react';

function Footer() {
  return (
    <div className='w-full h-screen py-[20px] px-[40px]'>
      <div className='w-full bg-slate-200 rounded-lg overflow-hidden'>
        <div className=' flex item-center whitespace-nowrap text-[150px] uppercase' style={{fontFamily: "mainFont"}}>
            <p>Let Work Together</p>
            <p className='mx-[30px]'>-</p>
            <p>Let Work Together</p>
            <p className='mx-[30px]'>-</p>
            <p>Let Work Together</p>
            <p className='mx-[30px]'>-</p>
            <p>Let Work Together</p>
            <p className='mx-[30px]'>-</p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
