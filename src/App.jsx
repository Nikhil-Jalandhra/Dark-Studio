import "./app.css"
import Slider from "./Container/Slider"
import Status from "./Container/Status"
import Footer from "./Container/Footer"
import ImagesPage from "./Container/ImagesPage"
import LandingPage from "./Container/LandingPage"
import locomotiveScroll from 'locomotive-scroll'

function App() {

  const smoothScroll = new locomotiveScroll();

  return (
    <>
    <div className=" bg-[#0C0D0E] text-white">
    <LandingPage/>
    <ImagesPage/>
    <Slider/>
    <Status/>
    <Footer/>
    </div>
    </>
  )
}

export default App
