import LandingPage from "./Container/LandingPage"
import ImagesPage from "./Container/ImagesPage"
import Slider from "./Container/Slider"
import locomotiveScroll from 'locomotive-scroll'
import "./app.css"

function App() {

  const smoothScroll = new locomotiveScroll();

  return (
    <>
    <div className=" bg-[#0C0D0E] text-white">
    <LandingPage/>
    <ImagesPage/>
    <Slider/>
    </div>
    </>
  )
}

export default App
