import React from 'react'
import "../Components/Testimonies.css"
import Seyii from "../asset/Seyii.png"

const Testimonies = () => {
  return (
    <div className='section-testimonies'>
        <div className='testimonies-left'>
            <h1>Testimonies &<br/> Recommendations</h1>
        </div>
        <div className='testimonies-right'>
            <div className='row'>
               <div id='testimonies-1'> 
               <img src={Seyii} alt="Seyii image"/>
                <h4>Femi Okaseun</h4>
                <p>Seyii gets things done. He’s very passionate about what he does and he’s always fun to be with.</p>
                </div>
                <div id='testimonies-1'> 
               <img src={Seyii} alt="Seyii image"/>
                <h4>Femi Okaseun</h4>
                <p>Seyii gets things done. He’s very passionate about what he does and he’s always fun to be with.</p>
                </div>
            </div>
            <div className='row'>
                <div id='testimonies-1'> 
               <img src={Seyii} alt="Seyii image"/>
                <h4>Femi Okaseun</h4>
                <p>Seyii gets things done. He’s very passionate about what he does and he’s always fun to be with.</p>
                </div>
                <div id='testimonies-1'> 
               <img src={Seyii} alt="Seyii image"/>
                <h4>Femi Okaseun</h4>
                <p>Seyii gets things done. He’s very passionate about what he does and he’s always fun to be with.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonies