import React, { useEffect } from "react"
import { motion } from "framer-motion"
import svg4 from "./SVG/svg4.png"
import DragPara from "./dragPara"

export default function ThirdSection() {

    const [firstInfoPoint, setFirstInfoPoint] = React.useState(0)
    const [secondInfoPoint, setSecondInfoPoint] = React.useState(0)
    const [thirdInfoPoint, setThirdInfoPoint] = React.useState(0)
    const [fourthInfoPoint, setFourthInfoPoint] = React.useState(0)
    const [seventhInfoPoint, setSeventhInfoPoint] = React.useState(0)
    const [eighthInfoPoint, setEighthInfoPoint] = React.useState(0)



    const [isDragging, setIsDragging] = React.useState(false)

    function dragToggle() {
        setIsDragging(!isDragging)
    }

   let paraArray=[]

    
  console.log(firstInfoPoint)
  

    return (
        <section className="thirdSection">
            <div className="thirdSection-main">
                <div className="thirdSection-container">
                    <h1>Complex events</h1>
                    <h1 className="gestures-title">and gestures.</h1>
                    <p>Framer Motion offers more advanced listeners and also extends the basic set of React event listeners.</p>
                    <a href="#">Read the documentation</a>
                    <img src={svg4}></img>
                </div>
                <div className="gestures-container">
                    <div className="gestures-preview">
                        <motion.div className="gestures-circle"
                            onClick={dragToggle}
                            drag
                            dragConstraints={{ right: 150, left: -150, top: -150, bottom: 150 }}
                            whileHover={{ scale: 1 }}
                            whileTap={{ scale: 0.9, cursor: "grabbing" }}
                            onDrag={
                                (event, info) =>
                                    {paraArray.push(info.point.x)
                                    paraArray.map(prevPara => {
                                        if (prevPara !== info.point.x) {
                                            setFirstInfoPoint(Math.round(info.point.x))
                                            setSecondInfoPoint(Math.round(info.point.y))
                                            setThirdInfoPoint(Math.round(info.delta.x))
                                            setFourthInfoPoint(Math.round(info.delta.y))
                                        }
                                    })}
                            }

                            onTapStart={(event, info) => (setSeventhInfoPoint(Math.round(info.point.x)), setEighthInfoPoint(Math.round(info.point.y)))}
                           

                        >
                        </motion.div>
                        <motion.p whileHover={{ opacity: 0.6 }} className="drag-explainer">Tap and drag the circle.</motion.p>
                    </div>


                    <div className="gestures-console">

                        <p><span>{isDragging? "onTapStart" : "onDrag"}</span>{isDragging? ` { x: ${seventhInfoPoint}, y: ${eighthInfoPoint} }`: ` point: { x: ${firstInfoPoint}, y: ${secondInfoPoint} } delta: { x: ${thirdInfoPoint}, y: ${fourthInfoPoint} }`  }</p>
                        <p><span>onDrag </span>{`point: { x: ${firstInfoPoint}, y: ${secondInfoPoint} } delta: { x: ${thirdInfoPoint}, y: ${fourthInfoPoint} }`}</p>
                        <p><span>onDrag </span>{`point: { x: ${firstInfoPoint}, y: ${secondInfoPoint} } delta: { x: ${thirdInfoPoint}, y: ${fourthInfoPoint} }`}</p>
                        <p><span>onDrag </span>{`point: { x: ${firstInfoPoint}, y: ${secondInfoPoint} } delta: { x: ${thirdInfoPoint}, y: ${fourthInfoPoint} }`}</p>
                        <p><span>onDrag </span>{`point: { x: ${firstInfoPoint}, y: ${secondInfoPoint} } delta: { x: ${thirdInfoPoint}, y: ${fourthInfoPoint} }`}</p>
                        <p><span>onDrag </span>{`point: { x: ${firstInfoPoint}, y: ${secondInfoPoint} } delta: { x: ${thirdInfoPoint}, y: ${fourthInfoPoint} }`}</p>
                        <p><span>onDrag </span>{`point: { x: ${firstInfoPoint}, y: ${secondInfoPoint} } delta: { x: ${thirdInfoPoint}, y: ${fourthInfoPoint} }`}</p>
                        
                    </div>
                  
                </div>

            </div>

        </section>
    )
}