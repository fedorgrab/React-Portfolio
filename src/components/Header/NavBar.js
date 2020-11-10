import React, {useContext} from "react";
import {CurrentContext} from "../../context";

const NavLink = ({to, name}) => {
  const {current, setCurrentPosition} = useContext(CurrentContext);
  return (
    <li
      className={current === to ? "current" : ""}
      onClick={() => setCurrentPosition(to)}
      key={to}
    >
      <div>{name}</div>
    </li>
  )
}

const NavBar = () => {
  const {current} = useContext(CurrentContext);
  return (
    <nav id="nav-wrap">
      <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
      <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
      <ul id="nav" className={current === "home" ? "nav" : "navigation-bar-dark"}>
        <NavLink to="home" name="Home"/>
        <NavLink to="about" name="About"/>
        <NavLink to="portfolio" name="Works"/>
        <NavLink to="resume" name="Resume"/>
        <NavLink to="contact" name="Contact"/>
      </ul>
    </nav>
  )
}

export default NavBar