import React from "react";
import { motion } from "framer-motion"
import svg1 from "./SVG/svg1.png"

export default function SecondSection() {

    const [firstValue, setfirstValue] = React.useState(0)
    const [secondValue, setSecondValue] = React.useState(0)
    const [thirdValue, setThirdValue] = React.useState(1)
    const [fourthValue, setFourthValue] = React.useState(0)



    return (
        <section className="secondSection">
            <div className="secondSection-container">
                <h1>Production-ready</h1>
                <h1 className="declarative-text">declarative animations.</h1>
                <p>A simple declarative syntax means you write less code. Less code means your codebase is easier to read and maintain.</p>
                <a href="#">Read the documentation</a>
                <img src={svg1}></img>
            </div>

            <div className="interaction-div">

                <div className="interaction-preview" style={{cursor:"not-allowed"}}>
                    <motion.div className="interaction-square"
                        animate={[{
                            x: firstValue, y: secondValue, scale: thirdValue, rotate: fourthValue
                        }]}
                    >

                    </motion.div>
                </div>

                <div className="interaction-code-div">

                    <div className="interaction-code">
                        <span className="spanSyntax">{"<"}</span><span className="spanParameter first-spanParameter">{`motion.div`}</span><br></br>
                        <span className="animate">{`animate`}</span>
                        <span className="spanSyntax">{`={{`}</span><br></br>
                        <span className="spanParameter x">{`x:`}</span>
                        <span className="spanValue">{` ${firstValue}`}</span><span className="spanSyntax">{","}</span><br></br>
                        <span className="spanParameter y">{`y:`}</span>
                        <span className="spanValue">{` ${secondValue}`}</span><span className="spanSyntax">{","}</span><br></br>
                        <span className="spanParameter scale">{`scale:`}</span>
                        <span className="spanValue">{` ${thirdValue}`}</span><span className="spanSyntax">{","}</span><br></br>
                        <span className="spanParameter rotate">{`rotate:`}</span>
                        <span className="spanValue">{` ${fourthValue}`}</span><span className="spanSyntax">{","}</span><br></br>
                        <span className="spanSyntax animate-syntax">{`}}`}</span><br></br>
                        <span className="spanSyntax">{`/>`}</span>
                    </div>

                    <div className="interaction-parameters">
                        <hr className="interaction-parameters-hr"></hr>

                        <div onChange={(e) => e.target.value && setfirstValue(parseInt(e.target.value))} >
                            <label htmlFor="x">X</label>
                            <input type="number" id="x" className="number-input" defaultValue={0} value={firstValue}></input>
                            <input type="range" min="-100" max="100" className="range-input"></input>
                        </div>

                        <div onChange={(e) => e.target.value && setSecondValue(parseInt(e.target.value))}>
                            <label htmlFor="y">Y</label>
                            <input type="number" id="y" className="number-input" defaultValue={0} value={secondValue}></input>
                            <input type="range" min="-100" max="100" className="range-input"></input>
                        </div>

                        <div onChange={(e) => e.target.value && setThirdValue(parseFloat(e.target.value))}>
                            <label htmlFor="scale">Scale</label>
                            <input type="number" id="scale" className="number-input" defaultValue={1} value={thirdValue}></input>
                            <input type="range" min="0" max="2" step="0.1" className="range-input"></input>
                        </div>

                        <div onChange={(e) => e.target.value && setFourthValue(parseInt(e.target.value))}>
                            <label htmlFor="rotate">Rotate</label>
                            <input type="number" id="rotate" className="number-input" defaultValue={0}  value={fourthValue}></input>
                            <input type="range" min="-360" max="360" className="range-input"></input>
                        </div>

                    </div>
                    <p className="interaction-parameters-text">Tweak the parameters to animate.</p>
                </div>

            </div>
        </section>
    )
}