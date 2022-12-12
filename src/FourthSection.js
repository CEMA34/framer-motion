import React from "react"
import video from "./videos/handoff.mp4"
import { motion, useScroll, useTransform } from "framer-motion"
import svg5 from "./SVG/svg5.png"
import svg1 from "./SVG/svg1.png"
import svg9 from "./SVG/svg9.png"
import svg6 from "./SVG/svg6.png"
import svg7 from "./SVG/svg7.png"





export default function FourthSection() {

    const [isAnimationReloading, setIsAnimationReloading] = React.useState(false)
    const [isVariantsReloading, setIsVariantsReloading] = React.useState(false)
    const [isPathReloading, setIsPathReloading] = React.useState(false)

    function reloadAnimation() {
        setIsAnimationReloading(isAnimationReloading => !isAnimationReloading)
    }

    function reloadVariants() {
        setIsVariantsReloading(isVariantsReloading => !isVariantsReloading)
    }

    function reloadPath() {
        setIsPathReloading(isPathReloading => !isPathReloading)
    }


    const variantsContainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const variantsItem = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)"
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "rgba(255, 255, 255, 1)"
        }
    };
    const { scrollYProgress } = useScroll();

    const scale = useTransform(scrollYProgress,  [0.9, 1], [0.2, 0.9]);


    return (
        <section className="fourthSection">
            <div className="fourthSection-main">
                <div className="fourthSection-container">
                    <h1>Framer runs</h1>
                    <h1 className="on-motion">on Motion.</h1>
                    <p>Designers who prototype in Framer can leverage the power of Framer Motion without touching a line of code,
                        then handoff the animation values to be used 1:1 in production.</p>
                    <a href="#">Try Framer for free</a>
                    <img src={svg5}></img>
                </div>

                <video controls width="1200" height="720" autoPlay={true} muted loop={true}>
                    <source type="video/mp4" src={video} />
                </video>

                <div className="features-container">
                    <h1>Features</h1>
                    <p>Explore the latest features. See why Framer Motion is the best React animation library.</p>
                    <a href="#">See more examples</a>
                    <img src={svg1}></img>
                </div>


                <div className="features-boxes-container">

                    <div className="features-box features-first-box">
                        <motion.div
                            key={isAnimationReloading}
                            initial={{ scale: 0 }}
                            animate={{ rotate: 180, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20
                            }}
                            className="inner-box inner-first-box">
                        </motion.div>
                        <p className="features-box-para">Animation</p>
                        <motion.button animate={isAnimationReloading ? { rotate: 360 } : { rotate: -360 }} transition={{ type: "spring", duration: 1.7 }} onClick={reloadAnimation}
                            className="features-box-first-svg" href="#"><img src={svg6}></img></motion.button>
                        <button href="#"><img src={svg7}></img></button>
                    </div>

                    <div className="features-box features-second-box">

                        <motion.div className="inner-box inner-second-box"
                            key={isVariantsReloading}
                            variants={variantsContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div variants={variantsItem} className="second-box-first-circle"></motion.div>
                            <motion.div variants={variantsItem} className="second-box-second-circle"></motion.div>
                            <motion.div variants={variantsItem} className="second-box-third-circle"></motion.div>
                            <motion.div variants={variantsItem} className="second-box-fourth-circle"></motion.div>
                        </motion.div>
                        <p className="features-box-para">Variants</p>

                        <motion.button animate={isVariantsReloading ? { rotate: 360 } : { rotate: -360 }} transition={{ type: "spring", duration: 1.7 }} onClick={reloadVariants} className="features-box-first-svg" href="#"><img src={svg6}></img></motion.button>
                        <button className="features-box-second-svg" href="#"><img src={svg7}></img></button>
                    </div>

                    <div className="features-box features-third-box">
                        <motion.div className="inner-box inner-third-box"
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            transition={{ type: "spring", stiffness: 250 }} whileTap={{ borderRadius: "50%", scale: 1 }}></motion.div>
                        <p className="features-box-para">Gestures</p>
                        <button className="svg-margin" href="#"><img src={svg7}></img></button>
                    </div>

                    <div className="features-box features-fourth-box">
                        <div className="inner-box inner-fourth-box">
                            <motion.div
                                style={{cursor:"grab"}}
                                drag
                                dragConstraints={{
                                    top: -20,
                                    bottom: 20,
                                    left: -20,
                                    right: 20
                                }}
                            >
                            </motion.div>
                        </div>
                        <p className="features-box-para">Drag</p>

                        <button className="svg-margin" href="#"><img src={svg7}></img></button>
                    </div>

                    <div classname="features-box features-fifth-box">
                    <div className="features-scroll-container">
                        <div className="scroll-container">
                            <motion.div
                                className="square"
                                style={{
                                    scale
                                }}
                            >
                                <motion.div
                                    className="scroll-percentage"
                                    style={{
                                        scaleY: scale
                                    }}
                                />
                            </motion.div>
                            <p className="features-box-para scroll-para">Scroll</p>
                            <button className="scroll-button" href="#"><img src={svg7}></img></button>
                        </div>
                        
                    </div>
                    </div>


                    <div className="features-box features-sixth-box">
                        <div className="inner-box inner-sixth-box">
                            <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 100 100"
                                className="item"
                            >
                                <motion.path className="motion-path"
                                    key={isPathReloading}
                                    d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                                    variants={icon}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        default: { duration: 2, ease: "easeInOut" },
                                        fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                                    }}
                                />
                            </motion.svg>
                        </div>
                        <p className="features-box-para">Path</p>
                        <motion.button animate={isPathReloading ? { rotate: 360 } : { rotate: -360 }} transition={{ type: "spring", duration: 1.7 }} onClick={reloadPath} className="features-box-first-svg" href="#"><img src={svg6}></img></motion.button>
                        <button href="#"><img src={svg7}></img></button>
                    </div>
                </div>
            </div>
        </section>
    )
}