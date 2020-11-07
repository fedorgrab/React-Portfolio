import React, {useContext} from 'react';
import {ResumeContext} from "../../context";
import {ResumeListContainer} from "./ResumeList";

const Resume = () => {
  const resumeData = useContext(ResumeContext)
  return (
    <section id="resume">
      <
        ResumeListContainer
        sectionTitle={"Education"}
        items={resumeData.education}
        titleKey={"school_name"}
        roleKey={"major"}
        dateKey={"graduation_month_year"}
        descriptionKey={"description"}
      />
      <
        ResumeListContainer
        sectionTitle={"Work"}
        items={resumeData.work}
        titleKey={"company_name"}
        roleKey={"position"}
        dateKey={"period_of_working"}
        descriptionKey={"description"}
      />
    </section>
  )
}

export default Resume;