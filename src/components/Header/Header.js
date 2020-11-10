import React, {useContext} from 'react';
import {CurrentContext, ResumeContext} from "../../context";
import SocialLinkList from "../SocialLinkList";

import NavBar from "./NavBar"

const Banner = ({resumeData}) => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I am {resumeData.name}.</h1>
      <h3>I am a {resumeData.role}. {resumeData.role_description}</h3>
      <hr/>
      <SocialLinkList socialLinks={resumeData.social_links}/>
    </div>
  </div>
)

const ScrollDown = ({scrollAction}) => (
  <p className="scrolldown">
    <div onClick={scrollAction}>
      <i className="icon-down-circle"/>
    </div>
  </p>
)

const Header = () => {
  const resumeData = useContext(ResumeContext)
  const {setCurrentPosition} = useContext(CurrentContext)
  return (
    <React.Fragment>
      <header id="home">
        <NavBar/>
        <Banner resumeData={resumeData}/>
        <ScrollDown scrollAction={() => setCurrentPosition("about")}/>
      </header>
    </React.Fragment>
  )
}
export default Header;