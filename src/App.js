import './App.css';
import Home from "./Routes/Home";
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Project from "./Routes/Project"
import Skills from "./Components/Skills"
import Testimonies from "./Components/Testimonies"
import { Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import HeroSection from "./Components/HeroSection"
import HomeRight from './Components/HomeRight';
import About from "./Components/About"
import Service from './Components/Service';


function App() {
  return (
    <>
    <div className='section1'>
    <div className="homeLeft">
    <Navbar/>
    <HeroSection/>
    </div>
    <div className='homeRight'>
      <HomeRight/>
    </div>
    </div>
    <div className='section2' id='about'>
      <About/>
    </div>
    <div className='section3'>
      <Skills/>
    </div>
    <div className='section4' id='service'>
      <Service/>
    </div>
    <div className='section5'>
      <Testimonies/>
    </div>
    <div className='section6' id='contact'>
      <Contact/>
    </div>
    <div className='section7'>
      <Footer/>
    </div>
    </>    
  );
}

export default App;
