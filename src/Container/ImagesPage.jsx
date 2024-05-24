import {React} from 'react';
import "../app.css"
import window1 from '../Images/window1.jpg'
import window2 from '../Images/window2.jpg'
import window3 from '../Images/window3.jpg'
import window4 from '../Images/window4.jpg'

function ImagesPage() {

  const Images = [
    {
      window: window1,
      text: "Web Designe",
      date: "22.5.24",
      Heading: "symmetrical"
    },
    {
      window: window2,
      text: "Creativity",
      date: "22.5.24",
      Heading: "Mystery Room"
      
    },
    {
      window: window3,
      text: "Development",
      date: "23.5.24",
      Heading: "Harmonius"
    },
    {
      window: window4,
      text: "Branding",
      date: "24.5.24",
      Heading: "Peace"
    }
  ]

  return (
    <div className='w-full h-full bg-[#0C0D0E] py-3 px-[40px]'>

      {Images.map((image,index)=>(
        <div key={index} className='w-full h-screen py-[10px] bg-[#0C0D0E] text-white'>
        <div className=' relative w-full h-full rounded-md'>
          <div className='absolute px-[30px] z-[1] font-semibold w-full h-[80px] items-center flex justify-between'>
              <p>{image.text}</p>
              <p>{image.date}</p>
          </div>
          <div className='w-full h-full'>
              <img 
              className='w-full h-full opacity-[0.7] object-cover rounded-md' 
              src={image.window} alt="" />
          </div>
          <div className=' absolute w-full flex flex-col items-center top-[350px]'>
                  <p 
                  className=' uppercase text-[180px]' 
                  style={{fontFamily : "mainFont"}}>
                      {image.Heading}
                  </p>
                  <div className=' containers px-4 h-[35px] flex justify-center items-center  border-[1px] border-gray-700 rounded-full cursor-pointer overflow-hidden'>
                  <div className='h-[30px] overflow-hidden'>
                      <p className='anime'>View Project</p>
                      <p className='anime'>View Project</p>
                  </div>
                  </div>
          </div>
        </div>
      </div>
      ))}


    <div 
    className='containers h-[70px] flex justify-center items-center 
    text-white border-[1px] border-gray-800 rounded-md my-3'>
      <div className='h-[30px] overflow-hidden'>
      <p className='anime'>View All Project</p>
      <p className='anime'>View All Project</p>
      </div>
    </div>

    </div>
  );
}

export default ImagesPage;
