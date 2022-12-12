import React from "react";
import frame from "./SVG/Frame.png"
 

export default function Navbar() {


    

    return (
    <header>
        <div className="header-fixed">
            <div className="container">
                <ul>
                    <img className="navbar-icon" src={frame}></img>
                    <a className="developers" href="#"><li>Developers</li></a>
                    <a className="motion" href="#"><li>Motion</li></a>
                    <a href="#"><li>Handshake</li></a>
                    <a href="#"><li>Guides</li></a>
                    <a href="#"><li>API Documentation</li></a>
                </ul>
                <a className="backToFramer" href="#">Back to framer.com</a>
            </div>
            <hr></hr>
        </div>
    </header>
    )
}