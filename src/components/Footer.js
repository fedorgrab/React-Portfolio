import React, {useContext} from 'react';
import {ResumeContext} from "../context";
import SocialLinkList from "./SocialLinkList";

function goBack(isChild) {
  if (isChild) window.history.back()
  if (!isChild) window.scrollTo(0, 0)
}

const GoBack = ({isChild = false}) => {
  return (
    <div id="go-top">
      <div className="smoothscroll" title={isChild ? "Back" : "Back to Top"}
           onClick={() => goBack(isChild)}>
        {isChild ? (<i className="icon-left-open"/>) : (<i className="icon-up-open"/>)}
      </div>
    </div>
  )
}

const Footer = ({childPage = false}) => {
  const resumeData = useContext(ResumeContext)
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <SocialLinkList socialLinks={resumeData.social_links}/>
        </div>
        <GoBack isChild={childPage}/>
      </div>
    </footer>
  )
}
export default Footer;