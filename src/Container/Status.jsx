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
    <div className='w-full h-screen'>
      <div className='w-full h-[30vh] pt-[10vh] flex'>
        {content.map((material,index)=> (
            <div key={index} className='h-full w-1/4 border-[1px] flex justify-center items-center border-[#1E1F20]'>
            <p className='text-[110px] mr-[20px]' style={{fontFamily : "mainFont"}}>{material.number}</p>
            <p>{material.firstWord}<br />{material.secondWord}</p>
        </div>
        ))}
        </div>
        <div className='relative w-full h-[60vh] mt-[60px] flex-col text-center flex justify-center items-center'>
            <p className='text-[50px] leading-[65px]'>
                "Specializing in designs that<br />wield influence over your<br />desired audience."
            </p>


            <div className='containers mt-[30px] px-4 h-[35px] flex justify-center items-center  border-[1px] border-gray-700 rounded-full cursor-pointer overflow-hidden'>
                <div className='h-[30px] overflow-hidden'>
                    <p className='anime'>View my services</p>
                    <p className='anime'>View my services</p>
                </div>
            </div>

            <div className=' absolute top-[200px] left-[350px] w-[130px] h-[100px] rounded-lg overflow-hidden'>
                <img className='w-full h-full object-cover' src={static1} alt="" />
            </div>
            <div className=' absolute w-[130px] top-[160px] right-[340px] h-[100px] rounded-lg overflow-hidden'>
                <img className='w-fu0.ll h-full object-cover' src={static2} alt="" />
            </div>

        </div>
      </div>
  );
}

export default Status;
