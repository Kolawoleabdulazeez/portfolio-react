import React from 'react'
import presentation from "../asset/presentation.png"
import "../Components/Service.css"
import Vector1 from"../asset/Vector1.png"
import WebTV from "../asset/WebTV.png"
import Data from "../asset/Data.png"
import Group from "../asset/Group.png"


const Service = () => {
  return (
   <div className='sectionService'>
    <div className='service-header'>
        <h2>Services I Render.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec sollicitudin tellus. Phasellus ac nisi augue.</p>
    </div>

    <div className='service-body'>
       <div className='row'>
       <div id='service-box'>
            <img src={presentation}/>
            <h4>Training</h4>
            <p>I offer instructor-led training in a way that fits with the way you work. </p>
        </div>
        <div id='service-box'>
            <img src={Vector1}/>
            <h4>IT Consulting.</h4>
            <p>I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives.</p>
        </div>
        <div id='service-box'>
            <img src={WebTV}/>
            <h4>Responsive Web Design</h4>
            <p>I offer instructor-led training in a way that fits with the way you work. </p>
        </div>
       </div>

       <div className='row'>
       <div id='service-box'>
            <img src={Data}/>
            <h4>Database Development</h4>
            <p>With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization.</p>
        </div>
        <div id='service-box'>
            <img src={Vector1}/>
            <h4>Customer SOftware Development</h4>
            <p>I help develop tehnical solutions in form of softwarres that answer to the needs of customer’s problems.</p>
        </div>
        <div id='service-box'>
            <img src={Group}/>
            <h4>Software Testing</h4>
            <p>I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly.</p>
        </div>
       </div>
       <div className='row'>
       <div id='service-box'>
            <img src={Data}/>
            <h4>SAAS Development</h4>
            <p>With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization.</p>
        </div>
        <div id='service-box'>
            <img src={Vector1}/>
            <h4>Technical Writing</h4>
            <p>I help develop tehnical solutions in form of softwarres that answer to the needs of customer’s problems.</p>
        </div>
        <div id='service-box'>
            <img src={Group}/>
            <h4>Web Development</h4>
            <p>I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly.</p>
        </div>
       </div>
    </div>
   </div>
  )
}

export default Service