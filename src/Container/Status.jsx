import React from 'react';
import static1 from '../Images/static1.jpg'
import static2 from '../Images/static2.jpg'

function Status() {

    const content = [
        {
            number: "58+",
            firstWord: "Satisfied",
            secondWord: "Client"
        },
        {
            number: "62+",
            firstWord: "Completed",
            secondWord: "Projects"
        },
        {
            number: "14+",
            firstWord: "Award",
            secondWord: "Won"
        },
        {
            number: "28",
            firstWord: "Digital",
            secondWord: "Products"
        }
    ]

  return (
    <div className='w-full lg:h-screen md:h-[600px] bg-teal-500'>
      <div className='w-full lg:h-[30vh] h-[150px] lg:pt-[10vh] pt-[50px] flex'>
        {content.map((material,index)=> (
            <div key={index} className='h-full w-1/4 border-[1px] flex justify-center items-center border-[#1E1F20]'>
            <p className='lg:text-[100px] md:text-[70px] text-[50px] lg:mr-[20px] mr-[10px]' style={{fontFamily : "mainFont"}}>{material.number}</p>
            <p className='lg:text-[17px] md:text-[14px] text-[12px]'>{material.firstWord}<br />{material.secondWord}</p>
        </div>
        ))}
        </div>

        <div className='relative w-full lg:h-[60vh] h-[400px] bg-orange-400 lg:mt-[60px] flex-col text-center flex justify-center items-center'>
            <p className='lg:text-[50px] text-[40px] lg:leading-[65px] leading-[55px]'>
                "Specializing in designs that<br />wield influence over your<br />desired audience."
            </p>


            <div className='containers mt-[30px] px-4 h-[35px] flex justify-center items-center  border-[1px] border-gray-700 rounded-full cursor-pointer overflow-hidden'>
                <div className='h-[30px] overflow-hidden'>
                    <p className='anime'>View my services</p>
                    <p className='anime'>View my services</p>
                </div>
            </div>

            <div className=' absolute left-0 lg:left-[90px] md:ml-[80px] mt-[100px] w-[130px] h-[100px] rounded-lg overflow-hidden'>
                <img className='w-full h-full object-cover' src={static1} alt="" />
            </div>
            <div className=' absolute right-0 lg:right-[70px] md:mr-[30px] w-[130px] h-[100px] rounded-lg overflow-hidden'>
                <img className='w-fu0.ll h-full object-cover' src={static2} alt="" />
            </div>

        </div>
      </div>
  );
}

export default Status;
