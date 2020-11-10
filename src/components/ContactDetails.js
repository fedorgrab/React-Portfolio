import React from "react";

const ContactDetails = ({resumeData}) => {
  return (
    <div className="row">
      <div className="columns contact-details">
        <h2>Contact Details</h2>
        <p className="address">
          <span>{resumeData.name}</span>
          <br/>
          <span>{resumeData.address}</span>
          <br/>
          <span>{resumeData.website}</span>
        </p>
      </div>
    </div>
  )
}

export default ContactDetails