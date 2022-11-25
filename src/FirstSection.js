import React from "react";
import {motion} from "framer-motion"


export default function FirstSection() {

    const [state,setState] = React.useState(false)

    function toggle() {
        setState(prevState => !prevState)
    }
    
    return (

        <section className="firstSection">

        <div className="container">
            <div>
                <h1 className="framer">Framer</h1>
                <h1 className="motion">Motion</h1>
            </div>

            <p>A production-ready motion library for React.
                Utilize the power behind Framer, the best prototyping tool for teams.
                Proudly open source.
            </p>
                <div>
                <a href="#">Read the documentation</a>
                <a className="github-tag" href="#">View on GitHub</a>
                </div>
        </div>
        
        <div className="firstSection-box-container">

            <div onClick={toggle} className="outer-box"></div>
            
            <div onClick={toggle} className="inner-box"></div>

            <div>
                <div className="small-box-one"></div>
                <div className="small-box-two"></div>
            </div>

            <div className="animated-boxes">

                <motion.div animate={{opacity: state ? 0 : 1}} transition={state ? {duration: 0.7}:{duration:0.1}} className="small-box-three"></motion.div>
                <motion.div animate={{opacity: state ? 0 : 1}} transition={{duration: 0.4}} className="small-box-four"></motion.div>
                <motion.div animate={{opacity: state ? 0 : 1}} transition={state ? {duration: 0.1}: {duration:0.7}} className="small-box-five"></motion.div>

            </div>


        </div>

        </section>

    )

}