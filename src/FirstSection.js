import React, { useEffect } from "react";
import { delay, motion,useTransform } from "framer-motion"

import svg1 from "./SVG/svg1.png"
import svg2 from "./SVG/svg2.png"
import sheetArrow from "./SVG/Sheetarrow.jpg"
import { AppleWatchDock } from "./AppleWatchDock";



export default function FirstSection() {

    const [isAnimating, setIsAnimating] = React.useState(false)
    


     function toggleAnimation() {
        setIsAnimating(prevIsAnimating => !prevIsAnimating)
    }

    const boxType = {
        type: "spring", stiffness: 200
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
                    <img src={svg1}></img>
                    <a className="github-tag" href="#">View on GitHub</a>
                    <img src={svg1}></img>
                </div>
            </div>

            <div className="firstSection-box-container">
                <div className="outer-box"></div>
                <div onClick={toggleAnimation} className="inner-box"></div>

                    <div onClick={toggleAnimation} className="small-box-one"></div>
                    <div onClick={toggleAnimation} className="small-box-two"></div>
                    <motion.div onClick={toggleAnimation} animate={isAnimating? { scale: 0.2 ,opacity:0} : {scale:0.5, opacity:1 }}
                        transition={isAnimating ? { duration: 1.2, type: "spring" } : { duration: 0.2, type: "spring"}} className="small-box-three"></motion.div>
                    <motion.div onClick={toggleAnimation} animate={{ scale: isAnimating ? 0.8 : 1 , opacity: isAnimating ? 0 : 1 }}
                        transition={isAnimating ? { duration: 1, type: "spring"} : { duration: 0.4, type: "spring"}} className="small-box-four"></motion.div>
                    <motion.div onClick={toggleAnimation} animate={{ scale: isAnimating ? 0.8 : 1 , opacity: isAnimating ? 0 : 1 }}
                        transition={isAnimating ? { duration: 0.8, type: "spring" } : { duration: 0.6, type: "spring"}} className="small-box-five"></motion.div>
                    <motion.div onClick={toggleAnimation} animate={{ scale: isAnimating ? 0.8 : 1 , opacity: isAnimating ? 0 : 1 }}
                        transition={isAnimating ? { duration: 0.6, type: "spring" } : { duration: 0.8, type: "spring" }} className="small-box-six">
                    </motion.div>
                    <motion.div onClick={toggleAnimation} animate={{ scale: isAnimating ? 0.8 : 1 , opacity: isAnimating ? 0 : 1 }}
                        transition={isAnimating ? { duration: 0.4, type: "spring"} : { duration: 1, type: "spring" }} className="small-box-seven"></motion.div>
                    <motion.div onClick={toggleAnimation} animate={{ scale: isAnimating ? 0.8 : 1 , opacity: isAnimating ? 0 : 1 }}
                        transition={isAnimating ? { duration: 0.2, type: "spring"} : { duration: 1.2, type: "spring"}} className="small-box-eight"></motion.div>
                
            </div>

            <div className="device-frame">
                <div onClick={toggleAnimation} className="device-screen">
                    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} className="switch-container">
                        <motion.div animate={isAnimating?{x:30}: {x:0}} transition={{type:"spring",mass:0.5,stiffness:80}} className="switch"></motion.div>
                    </div>
                </div>
            </div>

            <div className="mobile-device-frame">
                <div className="device-screen-inner-div" onClick={toggleAnimation}>

                    <motion.div className="mobile-device-sheet"
                        animate={isAnimating ? { y: "100%" } : { y: 15 }}
                        transition={{ type:"spring",mass:0.5,stiffness:80}}>
                        <img className="sheet-img" src={svg2}></img>
                    </motion.div>
                    <motion.img animate={isAnimating ? { y: 0 } : { y: -170 }} className="sheet-arrow" src={sheetArrow}
                        transition={{ type: "spring",stiffness:80, bounce: 0.5, mass:0.5,delay: isAnimating ? 0 : 0.5 }}>
                    </motion.img>
                </div>
            </div>

            <div className="tablet-device-frame">
                <div className="tablet-screen-inner-div">
                    <div className="tablet-grid-container" onClick={toggleAnimation}>
                        <motion.div transition={{  type: "spring", mass:0.5,stiffness:80}} animate={isAnimating ? { width: 423, height: 255, y: 70, x: 30 } : { width: 325, height: 196 }} className="tablet-grid-item-big tablet-first-item"></motion.div>
                        <motion.div transition={{  type: "spring" , mass:0.5,stiffness:80}} animate={isAnimating ? { width: 423, height: 255, y: 70, x: -80, opacity: 1 } : { width: 325, height: 196, opacity: 0 }}
                            className="tablet-grid-item-big tablet-additional-item"></motion.div>
                            <motion.div transition={{ type: "spring",mass:0.5,stiffness:80 }} animate={isAnimating ? { width: 423, height: 255, y: 70, x:142, opacity: 1 } : { width: 325, height: 196, opacity: 0 }}
                            className="tablet-grid-item-big tablet-second-additional-item"></motion.div>
                        <motion.div transition={{  type: "spring", mass:0.5,stiffness:80 }} animate={isAnimating ? { opacity: 0.15 } : { opacity: 1 }} className="tablet-grid-item-small tablet-second-item"></motion.div>
                        <motion.div transition={{  type: "spring", mass:0.5,stiffness:80 }} animate={isAnimating ? { opacity: 0.15 } : { opacity: 1 }} className="tablet-grid-item-small tablet-third-item"></motion.div>
                        <motion.div transition={{  type: "spring", mass:0.5,stiffness:80 }} animate={isAnimating ? { opacity: 0.15 } : { opacity: 1 }} className="tablet-grid-item-big tablet-fourth-item"></motion.div>
                    </div>
                </div>
            </div>

            <div className="second-mobile-device-frame">
                <div className="second-mobile-inner-screen" onClick={toggleAnimation}>
                    <div className="second-mobile-item-container">
                        <motion.div animate={isAnimating ? {x: "125%", scale: 0.6 ,rotateY:45, backgroundColor:"rgb(196, 123, 235)"} : {X:0} }
                            transition={{  type: "spring",mass:0.5,stiffness:80 }} className="second-mobile-first-item"></motion.div>
                        <motion.div animate={isAnimating ? { x: "50%", scale: 0.8,rotateY:45, backgroundColor:"rgb(225, 190, 246)" } : { x:0}}
                            transition={{  type: "spring",mass:0.5,stiffness:80 }} className="second-mobile-second-item"></motion.div>
                            <motion.div animate={isAnimating ? {  scale: 1.2, rotateY:180, zIndex:3 } : { scale: 1, zIndex:3 }}
                            transition={{  type: "spring",mass:0.5,stiffness:80 }} className="second-mobile-third-item"></motion.div>
                            <motion.div animate={isAnimating ? { x:"-50%", scale: 0.8, rotateY:-45,backgroundColor:"rgb(220, 192, 250)"} : { x: 0}}
                            transition={{ type: "spring",mass:0.5,stiffness:80 }} className="second-mobile-fourth-item"></motion.div>
                            <motion.div animate={isAnimating ? { x: "-125%", scale: 0.6, rotateY:-45,backgroundColor:"rgb(178, 129, 247)" } : { x: 0}}
                            transition={{  type: "spring",mass:0.5,stiffness:80 }} className="second-mobile-fifth-item"></motion.div>
                    </div>
                </div>
            </div>
            
            <AppleWatchDock animating = {isAnimating} toggleAnimation={toggleAnimation}/>

            {/*<div className="second-device-frame">
                <div className="second-device-frame-inner" onClick={toggleAnimation}>
                <motion.div animate={isAnimating? {x:-95,y:-95}: {x:0,y:0}} transition={{ type: "spring" , mass:0.4,stiffness:80 }} className="second-device-container">

                    <motion.div className="second-device-circle"></motion.div>
                    <motion.div className="second-device-circle"></motion.div>
                    <motion.div className="second-device-circle"></motion.div>
                    <motion.div className="second-device-circle"></motion.div>
                    <motion.div className="second-device-middle-circle"></motion.div>

                    <motion.div  whileTap={{ scale: 0.9 }} className="second-device-small-circle"></motion.div>
                    <motion.div  whileTap={{ scale: 0.9 }} className="second-device-second-small-circle"></motion.div>
                    <motion.div  whileTap={{ scale: 0.9 }} className="second-device-third-small-circle"></motion.div>
                    <motion.div  whileTap={{ scale: 0.9 }} className="second-device-fourth-small-circle"></motion.div>
                    <motion.div  whileTap={{ scale: 0.9 }} className="second-device-fifth-small-circle"></motion.div>
                    <motion.div  whileTap={{ scale: 0.9 }} className="second-device-sixth-small-circle"></motion.div>
                    <motion.div  whileTap={{ scale: 0.9 }} className="second-device-seventh-small-circle"></motion.div>
                    <motion.div  whileTap={{ scale: 0.9 }} className="second-device-eight-small-circle"></motion.div>
                </motion.div>       

             
                <motion.div animate={isAnimating? {x:0,y:0}: {x:95,y:95}} transition={{ type: "spring" , mass:0.4,stiffness:80 }} className="second-device-second-container">
                    <motion.div className="second-device-circle"></motion.div>
                    <motion.div className="second-device-circle"></motion.div>
                    <motion.div className="second-device-circle"></motion.div>
                    <motion.div className="second-device-circle"></motion.div>
                    <motion.div className="second-device-middle-circle"></motion.div>

                    <motion.div  className="second-device-small-circle"></motion.div>
                    <motion.div  className="second-device-second-small-circle"></motion.div>
                    <motion.div  className="second-device-third-small-circle"></motion.div>
                    <motion.div  className="second-device-fourth-small-circle"></motion.div>
                    <motion.div  className="second-device-fifth-small-circle"></motion.div>
                    <motion.div  className="second-device-sixth-small-circle"></motion.div>
                    <motion.div  className="second-device-seventh-small-circle"></motion.div>
                    <motion.div  className="second-device-eight-small-circle"></motion.div>
                </motion.div>

                </div>


       
    </div>*/}




        </section>

    )

}