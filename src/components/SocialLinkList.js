import React from "react";

const SocialLink = ({linkItem}) => (
  <li key={linkItem.name}>
    <a href={linkItem.url} target="_blank"><i className={linkItem.class_name}/></a>
  </li>
)


const SocialLinkList = ({socialLinks}) => (
  <ul className="social-links">
    {socialLinks.map(item => (
      <SocialLink key={item.name} linkItem={item}/>))
    }
  </ul>
)

export default SocialLinkList;