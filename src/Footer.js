import React from "react"
import svg5 from "./SVG/svg5.png"

export default function Footer() {
    return(
        <footer>
            <div className="footer-container">

                <div>
                    <h1>Get started with Framer Motion.</h1>
                    <p className="footer-main-para">There’s a whole lot more to discover, dive into the complete documentation for Motion.</p>
                    <a href="#">Read the documentation</a>
                    <img src={svg5}></img>
                    <a className="footer-github-tag" href="#">View on GitHub</a>
                    <img src={svg5}></img>
                </div>

                <div>
                    <ul>
                       <div className="motionValue"> <li >MotionValue</li> </div>
                        <div className="useSpring"><li className="useSpring">useSpring</li></div>
                        <li>Server-side rendering</li>
                        <li>CSS variable support</li>
                        <li>Unmount animations</li>
                        <li>Position transitions</li>
                        <li>Accessibility options</li>
                        <li>Handoff from Framer</li>
                    </ul>

                </div>
            </div>

            <div className="footer">
                <div className="footer-main-div">
                    <p>Copyright © 2022 Framer B.V.</p>
                    <div className="footer-links">
                        <a href="#"><p>Cookies</p></a>
                        <a href="#"><p>Security</p></a>
                        <a href="#"><p>Terms of Service</p></a>
                        <a href="#"><p>Privacy Statement</p></a>
                    </div>
                </div>
                </div>
        </footer>
    )
}