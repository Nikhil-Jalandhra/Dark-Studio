import "./App.css"
import { motion, easeOut, easeInOut } from "framer-motion"
import Slider from "./Container/Slider"
import Status from "./Container/Status"
import Footer from "./Container/Footer"
import ImagesPage from "./Container/ImagesPage"
import LandingPage from "./Container/LandingPage"

function App() {

  return (
    <>
    <div className="w-full bg-[#0C0D0E] text-white">
    <motion.div 
        animate={{y: "-100%"}}
        transition={{duration: 3, ease: easeOut}}
        className='w-full h-full bg-[#0C0D0E] fixed z-[16]'></motion.div>
    <motion.div
    animate={{y: 0}}
    initial={{y: 50}}
    transition={{ease: easeInOut, duration: 2}}
    >
      <LandingPage/>
      <ImagesPage/>
      <Slider/>
      <Status/>
      <Footer/>
    </motion.div>
    </div>
    </>
  )
}

export default App
