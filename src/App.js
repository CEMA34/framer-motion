import React from "react";
import Navbar from "./Navbar";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import Footer from "./Footer";
import FifthSection from "./FifthSection";
import { LayoutGroup, motion } from "framer-motion"




export default function App() {
    return (
        <>
        <Navbar/>
        <FirstSection/>
        <SecondSection/>
        <LayoutGroup type="crossfade">
            <FifthSection/>
        </LayoutGroup>
        <ThirdSection/>
        <FourthSection/>
        <Footer/>
        </>
    )
}