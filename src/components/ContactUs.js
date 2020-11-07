import React, {useContext} from 'react';
import {ResumeContext} from "../context";
import ContactDetails from "./ContactDetails";

const ContactUs = () => {
  const resumeData = useContext(ResumeContext)
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <ContactDetails resumeData={resumeData}/>
    </section>
  )
}
export default ContactUs;