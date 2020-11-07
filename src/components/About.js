import React, {useContext} from 'react';
import {ResumeContext} from "../context";
import {HOST_NAME} from "../constants";
import ContactDetails from "./ContactDetails";

const About = () => {
  const resumeData = useContext(ResumeContext)
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={`${HOST_NAME}${resumeData.avatar_image}`} alt="Me"/>
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{resumeData.about_me}</p>
          <ContactDetails resumeData={resumeData}/>
        </div>
      </div>
    </section>
  );
}

export default About;