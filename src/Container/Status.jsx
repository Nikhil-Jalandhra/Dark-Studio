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
    <div className='w-full lg:h-screen md:h-[600px] h-[500px]'>
      <div className='w-full lg:h-[30vh] md:h-[150px] h-[120px] lg:pt-[10vh] pt-[50px] flex'>
        {content.map((material,index)=> (
            <div key={index} className='h-full w-1/4 border-[1px] flex justify-center items-center border-[#1E1F20]'>
            <p className='lg:text-[100px] md:text-[70px] text-[30px] lg:mr-[20px] mr-[8px]' style={{fontFamily : "mainFont"}}>{material.number}</p>
            <p className='lg:text-[17px] md:text-[14px] text-[8px]'>{material.firstWord}<br />{material.secondWord}</p>
        </div>
        ))}
        </div>

        <div className='relative w-full lg:h-[60vh] md:h-[400px] h-[300px] lg:mt-[60px] flex-col text-center flex justify-center items-center'>
            <p className='lg:text-[50px] md:text-[40px] text-[20px] lg:leading-[65px] md:leading-[55px] leading-[35px]'>
                "Specializing in designs that<br />wield influence over your<br />desired audience."
            </p>


            <div className='containers mt-[30px] px-4 h-[35px] flex justify-center items-center  border-[1px] border-gray-700 rounded-full cursor-pointer overflow-hidden'>
                <div className='h-[30px] pt-[3px] lg:pt-0 overflow-hidden'>
                    <p className='anime'>View my services</p>
                    <p className='anime'>View my services</p>
                </div>
            </div>

            <div className='absolute left-0 lg:left-[90px] md:ml-[80px] lg:mt-[100px] md:mt-[100px] lg:w-[130px] lg:h-[100px] md:w-[130px] md:h-[100px] w-[80px] h-[50px] rounded-lg overflow-hidden'>
                <img className='w-full h-full object-cover' src={static1} alt="" />
            </div>
            <div className=' absolute right-0 lg:right-[70px] md:mr-[30px] lg:h-[100px] md:w-[130px] md:h-[100px] w-[80px] h-[50px] rounded-lg overflow-hidden'>
                <img className='w-fu0.ll h-full object-cover' src={static2} alt="" />
            </div>

        </div>
      </div>
  );
}

export default Status;
