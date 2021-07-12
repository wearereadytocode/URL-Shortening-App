import React from 'react'
import './Footer.css'
import logo from '../../../Images/logo.svg'
import facebook from '../../../Images/icon-facebook.svg'
import instagram from '../../../Images/icon-instagram.svg'
import pintrest from '../../../Images/icon-pinterest.svg'
import twitter from '../../../Images/icon-twitter.svg'
function Footer() {
    return (
        <div className="footer">
           <div className="container">
               <div className="row">
               <div className="col-md-4">
                <img src={logo} alt="" />
                </div>
                <div className="col-md-2">
                    <h4>Features</h4>
                    <ul>
                        <li>Link shortening</li>
                        <li>Branded links</li>
                        <li>Analytics</li>
                    </ul>
                </div>
                <div className="col-md-2">
                <h4>Resources</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Developers</li>
                        <li>Support</li>
                    </ul>
                </div>
                <div className="col-md-2 ">
                <h4>Company</h4>
                    <ul>
                        <li>About</li>
                        <li>Our team</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="col-md-2 social">
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={pintrest} alt="" />
                    <img src={twitter} alt="" />
                </div>
               </div>
           </div>
        </div>
    )
}

export default Footer
