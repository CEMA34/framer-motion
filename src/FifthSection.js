import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import svg3 from "./SVG/svg3.png"
import closeBtn from "./SVG/close-btn.png"


export default function FifthSection() {

    const [firstScaling, setFirstScaling] = React.useState(false)
    const [secondScaling, setSecondScaling] = React.useState(false)
    const [thirdScaling, setThirdScaling] = React.useState(false)
    const [fourthScaling, setFourthScaling] = React.useState(false)

    const [isResetting, setIsResetting] = React.useState(false)

    function allToggle() {
        
            setFirstScaling(false)
            setSecondScaling(false)
            setThirdScaling(false)
            setFourthScaling(false)
            console.log(6)
        }

        function myFunction(e) {
            if (e.target !== this) {
                console.log( 'clicked the foobar' )
            }
        }

        function resetAnimation() {
            setIsResetting(isResetting => !isResetting)
        }
       

    function firstToggle() {
        setFirstScaling(prevFirstScaling => !prevFirstScaling)
    }

    function secondToggle(e) {
        setSecondScaling(prevSecondScaling => !prevSecondScaling)
        e.stopPropagation()
        
    }

    function thirdToggle(e) {
        setThirdScaling(prevThirdScaling => !prevThirdScaling)
        e.stopPropagation()
    }

    function fourthToggle() {
        setFourthScaling(prevFourthScaling => !prevFourthScaling)
    }

    const showItem = { opacity: 1, display: "block" }
    const hideItem = { opacity: 0, display: "none" }

     function deleteTemplate(e) {
        if(e.target.id==="2"){
        e.target.style.pointerEvents="none"&& setSecondScaling(false)
        console.log(e.target.id)
    }}

    function myFunction(e) {
        e.target.style.pointerEvents="none"
    }

    return (
        <section className="fifthSection">
            <div className="fifthSection-main">
                <div className="fifthSection-container">
                    <h1><span>Animations that</span> work like magic.</h1>
                    <p>When animating between two separate components, Framer Motion will take care of everything in between.</p>
                    <a href="#">Get started</a>
                    <img src={svg3}></img>
                </div>
            </div>
            <div className="layout-main-container">
            <div className="Layout-container">
                <div style={!firstScaling && !secondScaling && !thirdScaling && !fourthScaling ? {cursor:"auto"} : {cursor:"pointer"}} onClick={firstScaling || secondScaling || thirdScaling || fourthScaling ? allToggle : undefined}  className="Layout-preview"></div>

                    <ul className="layoutPreview-ul">
                    <motion.p whileHover={{ opacity: 0.6 }} className="layout-second-explainer">Tap to open a card.</motion.p>
                        <motion.div  id="1" animate={secondScaling || thirdScaling || fourthScaling ? { opacity: 0.25, pointerEvents: "none"}:{opacity:1}}>
                        <motion.li onClick={!firstScaling && firstToggle}
                            animate={firstScaling ? { width: 400, x: 285, y: 55, height: 232, borderRadius: "25px", zIndex:"10"} : { width: 184, height: 151, borderRadius: "15px", zIndex:"1" ,cursor:"pointer"}} transition={{ duration: 0.35, ease: "easeOut" }}
                            className="small-layout-item first-small-layout-item">
                                
                            <motion.div animate={firstScaling ? { marginLeft: "2em"} : { marginLeft: "1em" }} className="layout-placeholder">
                                <motion.div animate={firstScaling ? { width: 136 } : { width: 57 }} transition={{ duration: 0.35, ease: "easeOut" }} className="first-placeholder"></motion.div>
                                <motion.div animate={firstScaling ? { width: 324 } : { width: 138 }} transition={{ duration: 0.35, ease: "easeOut" }} className="second-placeholder"></motion.div>
                                <motion.div animate={firstScaling ? { width: 258 } : { width: 109 }} transition={{ duration: 0.35, ease: "easeOut" }} className="third-placeholder"></motion.div>

                                <motion.div onClick={firstScaling && firstToggle} animate={firstScaling ? { display: "block",pointerEvents:"auto",cursor:"pointer" } : { opacity: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="close-btn-div"> <img className="layout-close-btn" src={closeBtn}></img> </motion.div>
                                <motion.hr animate={firstScaling ? { opacity: 0.2, display: "block" } : hideItem} transition={{ duration: 0.35, ease: "easeOut" }} className="layout-additional-hr"></motion.hr>
                                <motion.div animate={firstScaling ? showItem : hideItem} transition={{ duration: 0.35, ease: "easeOut" }} className="first-layout-additional"></motion.div>
                                <motion.div animate={firstScaling ? showItem : hideItem} transition={{ duration: 0.35, ease: "easeOut" }} className="second-layout-additional"></motion.div>
                                <motion.div animate={firstScaling ? showItem : hideItem} transition={{ duration: 0.35, ease: "easeOut" }} className="third-layout-additional"></motion.div>
                            </motion.div>

                        </motion.li>
                        </motion.div>


                        <motion.div id="2" animate={firstScaling || thirdScaling || fourthScaling ? { opacity: 0.25, pointerEvents: "none"}:{opacity:1}}>
                        <motion.li onClick={!secondScaling ? (e) => 
                        {e.stopPropagation() 
                        setSecondScaling(prevSecondScaling => !prevSecondScaling)
                        } : null}
                            animate={secondScaling ? { width: 400, x: -55, y: 60, height: 232, borderRadius: "25px", zIndex:"10"} : { width: 306, height: 151, borderRadius: "15px" , zIndex:"1",cursor:"pointer"}} transition={{ duration: 0.35, ease: "easeOut" }}
                             className="big-layout-item first-big-layout-item">
                            <motion.div onclick="event.stopPropagation()" animate={secondScaling ? { marginLeft: "2em"} : { marginLeft: "1em" }} transition={{ duration: 0.6, type: "spring" }} className="layout-placeholder">
                                <motion.div animate={secondScaling ? { width: 136 } : { width: 104 }} transition={{ duration: 0.35, ease: "easeOut" }} className="first-placeholder"></motion.div>
                                <motion.div animate={secondScaling ? { width: 324 } : { width: 255 }} transition={{ duration: 0.35, ease: "easeOut" }} className="second-placeholder"></motion.div>
                                <motion.div animate={secondScaling ? { width: 258 } : { width: 202 }} transition={{ duration: 0.35, ease: "easeOut" }} className="third-placeholder"></motion.div>

                                <motion.div onClick={secondScaling && secondToggle} animate={secondScaling ? { display: "block",pointerEvents:"auto",cursor:"pointer" } : { opacity: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="close-btn-div"> <img className="layout-close-btn" src={closeBtn}></img> </motion.div>
                                <motion.hr animate={secondScaling ? { opacity: 0.2, display: "block" } :{ opacity: 0, display: "none" }} transition={{ duration: 0.35, ease: "easeOut" }} className="layout-additional-hr"></motion.hr>
                                <motion.div animate={secondScaling ? { opacity: 1, display: "block" } : { opacity: 0, display: "none" }} transition={{ duration: 0.35, ease: "easeOut" }} className="first-layout-additional"></motion.div>
                                <motion.div animate={secondScaling ? { opacity: 1, display: "block" } : { opacity: 0, display: "none" }} transition={{ duration: 0.35, ease: "easeOut" }} className="second-layout-additional"></motion.div>
                                <motion.div animate={secondScaling ? { opacity: 1, display: "block" } : { opacity: 0, display: "none" }} transition={{ duration: 0.35, ease: "easeOut" }} className="third-layout-additional"></motion.div>

                            </motion.div>
                        </motion.li>
                        </motion.div>


                        <motion.div id="3" animate={firstScaling || secondScaling || fourthScaling ? { opacity: 0.25, pointerEvents: "none"}:{opacity:1}}>
                        <motion.li onClick={!thirdScaling && thirdToggle}
                            animate={thirdScaling ? { width: 400, x: 70, y: -120, height: 232, borderRadius: "25px", zIndex:"10" } : { width: 306, height: 151, borderRadius: "15px", zIndex:"1",cursor:"pointer" }} transition={{ duration: 0.35, ease: "easeOut" }}
                           
                            className="big-layout-item second-big-layout-item">
                            <motion.div animate={thirdScaling ? { marginLeft: "2em" } : { marginLeft: "1em" }} transition={{ duration: 0.35, ease: "easeOut" }} className="layout-placeholder">
                                <motion.div animate={thirdScaling ? { width: 136 } : { width: 104 }} transition={{ duration: 0.35, ease: "easeOut" }} className="first-placeholder"></motion.div>
                                <motion.div animate={thirdScaling ? { width: 324 } : { width: 255 }} transition={{ duration: 0.35, ease: "easeOut" }} className="second-placeholder"></motion.div>
                                <motion.div animate={thirdScaling ? { width: 258 } : { width: 202 }} transition={{ duration: 0.35, ease: "easeOut" }} className="third-placeholder"></motion.div>

                                <motion.div onClick={thirdScaling && thirdToggle} animate={thirdScaling ? { display: "block",pointerEvents:"auto",cursor:"pointer" } : { opacity: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="close-btn-div"> <img className="layout-close-btn" src={closeBtn}></img> </motion.div>
                                <motion.hr animate={thirdScaling ? { opacity: 0.2, display: "block" } : { opacity: 0, display: "none" }} transition={{ duration: 0.35, ease: "easeOut" }} className="layout-additional-hr"></motion.hr>
                                <motion.div animate={thirdScaling ? { opacity: 1, display: "block" } : { opacity: 0, display: "none" }} transition={{ duration: 0.35, ease: "easeOut" }} className="first-layout-additional"></motion.div>
                                <motion.div animate={thirdScaling ? { opacity: 1, display: "block" } : { opacity: 0, display: "none" }} transition={{ duration: 0.35, ease: "easeOut" }} className="second-layout-additional"></motion.div>
                                <motion.div animate={thirdScaling ? { opacity: 1, display: "block" } : { opacity: 0, display: "none" }} transition={{ duration: 0.35, ease: "easeOut" }} className="third-layout-additional"></motion.div>

                            </motion.div>
                        </motion.li>
                        </motion.div>

                        <motion.div id="4" animate={firstScaling || secondScaling || thirdScaling ? { opacity: 0.25, pointerEvents: "none"}:{opacity:1}}>
                        <motion.li onClick={!fourthScaling && fourthToggle}
                            animate={fourthScaling ? { width: 400, x: -50, y: -115, height: 232, borderRadius: "25px", zIndex:"10"} : { width: 184, height: 151, borderRadius: "15px", zIndex:"1",cursor:"pointer" }} transition={{ duration: 0.35, ease: "easeOut" }}
                            className="small-layout-item second-small-layout-item">
                            <motion.div animate={fourthScaling ? { marginLeft: "2em" } : { marginLeft: "1em" }} className="layout-placeholder">

                                <motion.div animate={fourthScaling ? { width: 136 } : { width: 57 }} transition={{ duration: 0.35, ease: "easeOut" }} className="first-placeholder"></motion.div>
                                <motion.div animate={fourthScaling ? { width: 324 } : { width: 138 }} transition={{ duration: 0.35, ease: "easeOut" }} className="second-placeholder"></motion.div>
                                <motion.div animate={fourthScaling ? { width: 258 } : { width: 109 }} transition={{ duration: 0.35, ease: "easeOut" }} className="third-placeholder"></motion.div>

                                <motion.div onClick={fourthScaling && fourthToggle} animate={fourthScaling ? { display: "block",pointerEvents:"auto",cursor:"pointer" } : { opacity: 0 }} transition={{ duration: 0.35, ease: "easeOut" }} className="close-btn-div"> <img className="layout-close-btn" src={closeBtn}></img> </motion.div>
                                <motion.hr animate={fourthScaling ? { opacity: 0.2, display: "block" } : { opacity: 0, display: "none" }} transition={{ duration: 0.35, ease: "easeOut" }} className="layout-additional-hr"></motion.hr>
                                <motion.div animate={fourthScaling ? { opacity: 1, display: "block" } : { opacity: 0, display: "none" }} transition={{ duration: 0.35, ease: "easeOut" }} className="first-layout-additional"></motion.div>
                                <motion.div animate={fourthScaling ? { opacity: 1, display: "block" } : { opacity: 0, display: "none" }} transition={{ duration: 0.35, ease: "easeOut" }} className="second-layout-additional"></motion.div>
                                <motion.div animate={fourthScaling ? { opacity: 1, display: "block" } : { opacity: 0, display: "none" }} transition={{ duration: 0.35, ease: "easeOut" }} className="third-layout-additional"></motion.div>

                            </motion.div>
                        </motion.li>
                        <motion.p whileHover={{ opacity: 0.6 }} className="layout-explainer">Tap to open a card.</motion.p>
                        
                        </motion.div>
                    </ul>

                </div>


                <div className="Layout-console">

                    <div className="layout-console-second-text">
                        <div className="main-text"><span className="blue-text">{"const "}</span><span className="grey-text">{"["}</span><span>{"selectedId, setSelectedId"}</span><span className="grey-text">{"]"}<span className="grey-text">{" ="}</span></span><span className="yellow-text">{" useState"}</span><span className="grey-text">{"("}</span><span className="blue-text">{"null"}</span><span className="grey-text">{")"}</span><br></br></div>
                        <div className="first-line"><span className="grey-text">{"{"}</span><span>{"items."}</span><span className="yellow-text">{"map"}</span><span className="grey-text">{"("}</span><span>item</span><span className="grey-text">{" => ("}</span></div>
                        <div className="second-line fourth-line-text"><span className="grey-text">{`<`}</span><span className="yellow-text">{`motion.div `}</span><span className="light-blue-text">{" layoutId"}</span>
                            <span className="grey-text">{"={"}</span><span className="yellow-text">{"item.id"}</span>
                            <span className="grey-text">{"}"}</span><span className="light-blue-text">{" onClick"}</span>
                            <span className="grey-text">{"={()"}</span><span className="yellow-text">{" => setSelectedId"}</span>
                            <span className="grey-text">{"("}</span><span className="yellow-text">{"item.id"}</span><span className="grey-text">{")}>"}</span></div>
                        <div className="fourth-line"><span className="grey-text">{"<"}</span><span className="yellow-text">{"motion.h5"}</span><span className="grey-text">{">{"}</span><span>{"item.subtitle"}</span><span className="grey-text">{"}</"}</span><span className="yellow-text">{"motion.h5"}</span><span className="grey-text">{">"}</span><br></br></div>
                        <div className="fourth-line"><span className="grey-text">{"<"}</span><span className="yellow-text">{"motion.h2"}</span><span className="grey-text">{">{"}</span><span>{"item.title"}</span><span className="grey-text">{"}</"}</span><span className="yellow-text">{"motion.h2"}</span><span className="grey-text">{">"}</span><br></br></div>
                        <div className="third-line"><span className="grey-text">{"</"}</span><span className="yellow-text">{"motion.div"}</span><span className="grey-text">{">"}</span><br></br></div>
                        <span className="grey-text">{"))}"}</span>
                    </div>

                    <div className="layout-console-second-text">
                        <span className="grey-text">{"<"}</span><span className="yellow-text">{"AnimatePresence"}</span><span className="grey-text">{">"}</span><br></br>
                        <div className="second-line selectedId"><span className="grey-text">{"{"}</span><span>{"selectedId"}</span><span className="grey-text">{" &&"}</span><span className="grey-text">{" ("}</span><br></br></div>
                        <div className="third-line"><span className="grey-text">{"<"}</span><span className="yellow-text">{"motion.div "}</span><span className="light-blue-text">{"layoutId"}</span><span className="grey-text">{"={"}</span><span className="yellow-text">{"selectedId"}</span><span className="grey-text">{"}>"}</span><br></br></div>
                        <div className="fourth-line"><span className="grey-text">{"<"}</span><span className="yellow-text">{"motion.h5"}</span><span className="grey-text">{">{"}</span><span>{"item.subtitle"}</span><span className="grey-text">{"}</"}</span><span className="yellow-text">{"motion.h5"}</span><span className="grey-text">{">"}</span><br></br></div>
                        <div className="fourth-line"><span className="grey-text">{"<"}</span><span className="yellow-text">{"motion.h2"}</span><span className="grey-text">{">{"}</span><span>{"item.title"}</span><span className="grey-text">{"}</"}</span><span className="yellow-text">{"motion.h2"}</span><span className="grey-text">{">"}</span><br></br></div>
                        <div className="fourth-line fourth-line-text"><span className="grey-text">{"<"}</span><span className="yellow-text">{"motion.button "}</span><span className="light-blue-text">{"onClick"}</span><span className="grey-text">{"={()"}</span><span className="yellow-text">{" => setSelectedId"}</span><span className="grey-text">{"("}</span><span className="blue-text">{"null"}</span><span className="grey-text">{")} />"}</span></div>
                        <div className="third-line"><span className="grey-text">{"</"}</span><span className="yellow-text">{"motion.div"}</span><span className="grey-text">{">"}</span><br></br></div>
                        <div className="second-line second-line-margin"><span className="grey-text">{")}"}</span><br></br></div>
                        <span className="grey-text">{"</"}</span><span className="yellow-text">{"AnimatePresence"}</span><span className="grey-text">{">"}</span><br></br>
                    </div>
                    </div>

                
            </div>
            <motion.p whileHover={{ opacity: 0.6 }} className="layout-second-explainer">Tap to open a card.</motion.p>
        </section>
    )
}