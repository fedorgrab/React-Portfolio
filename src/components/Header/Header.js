import React, {useContext, useEffect} from 'react';
import {ResumeContext} from "../../context";
import SocialLinkList from "../SocialLinkList";
import {NAV_SECTIONS} from "../../constants";
import {useCurrentPosition} from "./service";

const NavBarHeader = () => {
  const [current, setCurrentPosition] = useCurrentPosition()
  useEffect(() => {
    let mounted = false
    if (mounted) setCurrentPosition(current)
    return mounted = true
  }, [])
  return (
    <ul id="nav" className={current === "home" ? "nav" : "navigation-bar-dark"}>
      {NAV_SECTIONS.map((section) => (
        <li className={current === section ? "current" : ""}
            onClick={() => setCurrentPosition(section)} key={section}>
          <div>{section}</div>
        </li>
      ))}
    </ul>
  )
}

const Header = () => {
  const resumeData = useContext(ResumeContext)
  return (
    <React.Fragment>
      <header id="home">
        
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <NavBarHeader/>
        </nav>
        
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I am {resumeData.name}.</h1>
            <h3 style={{color: '#fff', fontFamily: 'sans-serif '}}>I am
              a {resumeData.role}. {resumeData.role_description}
            </h3>
            <hr/>
            <SocialLinkList socialLinks={resumeData.social_links}/>
          </div>
        </div>
        
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>
      
      </header>
    </React.Fragment>
  )
}
export default Header;