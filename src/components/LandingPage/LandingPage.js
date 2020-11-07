import React from "react";
import {SectionTopCoordinatesContext} from "../../context";
import Header from "../Header/Header";
import About from "../About";
import Portfolio from "../Portfolio";
import Resume from "../Resume/Resume";
import ContactUs from "../ContactUs";
import Footer from "../Footer";
import {useSections} from "./service";

const LandingPage = () => {
  const sectionCoords = useSections()
  return (
    <div className="app">
      <SectionTopCoordinatesContext.Provider value={sectionCoords}>
        <Header/>
        <About/>
        <Portfolio/>
        <Resume/>
        <ContactUs/>
        <Footer/>
      </SectionTopCoordinatesContext.Provider>
    </div>
  )
}

export default LandingPage;