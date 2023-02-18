import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return(
      
        <nav className="navbar">
            <div className="max-width">
                <div className="logo"><a href="#">Portfo<span>lio.</span></a></div>
                <ul className="menu">
                    <li><a href="#home" className="menu-btn">Home</a></li>
                    <li><a href="#services" className="menu-btn">Services</a></li>
                    <li><a href="#skills" className="menu-btn">skills</a></li>
                    <li><a href="#teams" className="menu-btn">Teams</a></li>
                    <li><a href="#contact" className="menu-btn">Contact</a></li>

                    <a className="btnCv"
                        href="https://drive.google.com/file/d/1WfvKkO-GehNjAZCakmX9jIMfd54uOwVw/view?usp=share_link">Download
                        CV</a>
                </ul>


                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>

    )
}

export { Navbar }
