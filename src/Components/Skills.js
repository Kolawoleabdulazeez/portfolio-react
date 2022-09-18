import React from 'react'
import Php from "../asset/Php.png"
import Python from "../asset/Python.png"
import Javascript from "../asset/Javascript.png"
import Wordpress from "../asset/Wordpress.png"
import Microsoft from "../asset/Microsoft.png"
import Html from "../asset/Html.png"
import Percentage from "../asset/Percentage.png"
import "./Skills.css"

const Skills = () => {
  return (
    <div className='section-skills'>
        <div className='skills-header'>
            <h2> My Skills</h2>
            <p>Here are a few skills I possess</p>
        </div>
       <div className='row'>
       <div className='skills-body'>
            <div id='php'>
                <div id='php-logo'><img src={Php}/></div>
                <div id='php-info'><h4>PHP</h4><img src={Percentage}/></div>
            </div>
        </div>
        <div className='skills-body'>
            <div id='php'>
                <div id='php-logo'><img src={Python}/></div>
                <div id='php-info'><h4>PYTHON</h4><img src={Percentage}/></div>
            </div>
        </div>
       </div>
       <div className='row'>
       <div className='skills-body'>
            <div id='php'>
                <div id='php-logo'><img src={Javascript}/></div>
                <div id='php-info'><h4>Javascript</h4><img src={Percentage}/></div>
            </div>
        </div>
        <div className='skills-body'>
            <div id='php'>
                <div id='php-logo'><img src={Wordpress}/></div>
                <div id='php-info'><h4>Wordpress</h4><img src={Percentage}/></div>
            </div>
        </div>
       </div>
       <div className='row'>
       <div className='skills-body'>
            <div id='php'>
                <div id='php-logo'><img src={Microsoft}/></div>
                <div id='php-info'><h4>Microsoft Office</h4><img src={Percentage}/></div>
            </div>
        </div>
        <div className='skills-body'>
            <div id='php'>
                <div id='php-logo'><img src={Html}/></div>
                <div id='php-info'><h4>HTML</h4><img src={Percentage}/></div>
            </div>
        </div>
       </div>

    </div>
  )
}

export default Skills