import "./app.css"
import LandingPage from "./Container/LandingPage"
import ImagesPage from "./Container/ImagesPage"
import Slider from "./Container/Slider"
import Status from "./Container/Status"
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
    </div>
    </>
  )
}

export default App
