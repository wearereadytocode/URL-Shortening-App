import React from 'react'
import './NavBar.css'
function NavBar() {
    return (
        <div>
            <div className="container">

           <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Shortly</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Resource</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <button className="login">Login</button>
                        <button className="signup"> Sign Up</button>
                    </span>
                    </div>
                </div>
                </nav>

            </div>
        </div>
    )
}

export default NavBar
