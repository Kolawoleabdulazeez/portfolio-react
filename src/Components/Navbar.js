import React, {useState} from 'react'
import { Link } from 'react-scroll'
import "../Components/Navbar.css"
import Hamburger from "../asset/Hamburger.svg"


const Navbar = () => {

  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened , setMenuOpened ] = useState(false)
  return (
  <nav className='navbar'>
    <div className='navbar-container'>
      <div className='navbar-logo'>
        <Link to="/"><h1>Seyi Onifade.</h1></Link> 
        </div>
       {(menuOpened === false  &&  mobile===true)?
       (
        <div onClick={()=> setMenuOpened(true)}> <img src={Hamburger} alt="Hamburger" id='hamburger'/></div>
       ):(<ul className='nav-menu'>
       <li >
        <Link to="about"onClick={()=>setMenuOpened(false)}  smooth={true} className="about-me">About Me</Link>
        </li>
       <li  >  <Link to="service" onClick={()=>setMenuOpened(false)} smooth={true} className="service">Service</Link></li>
       <li  ><Link to="project" onClick={()=>setMenuOpened(false)} smooth={true} className="project">Project</Link></li>
       <li  ><Link to="contact" onClick={()=>setMenuOpened(false)} smooth={true} className="contact-me">Contact</Link></li>
     </ul>
       )}
       
        
    </div>
  </nav>
  )
}

export default Navbar