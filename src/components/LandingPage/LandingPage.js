import React from "react";
import Header from "../Header/Header";
import About from "../About";
import Portfolio from "../Portfolio";
import Resume from "../Resume/Resume";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import {useSections} from "./sectionScroll";
import {useCurrentPosition} from "./sectionScroll";
import {CurrentContext} from "../../context";

const LandingPage = () => {
  const sectionCoords = useSections()
  const [current, setCurrentPosition] = useCurrentPosition(sectionCoords)
  return (
    <div className="app">
      <CurrentContext.Provider value={{current, setCurrentPosition}}>
        <Header/>
        <About/>
        <Portfolio/>
        <Resume/>
        <ContactUs/>
        <Footer/>
      </CurrentContext.Provider>
    </div>
  )
}

export default LandingPage;