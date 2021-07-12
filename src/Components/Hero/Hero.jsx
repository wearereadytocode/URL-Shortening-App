import React from 'react'
import illu from '../../../Images/illustration-working.svg'
import './Hero.css'
function Hero() {
    return (
        <div className="Hero">
           <div className="container">
               <div className="row align-content-center">
                   <div className="col-md-6 left">
                       <h2 className="display-3 ">
                           More than just <br />
                           Shorten Links
                       </h2>
                       <p>Build your brand recognition and get detailed insight on how your links are performing</p>
                       <button>Get Started</button>
                   </div>
                   <div className="col-md-6">
                       <img src={illu} alt="working" className="img-fluid" />
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Hero
