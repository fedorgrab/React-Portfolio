import React from "react";


const ResumeListItem = ({item, titleKey, roleKey, dateKey, descriptionKey}) => (
  <div className="row item">
    <div className="twelve columns">
      <h3>{item[titleKey]}</h3>
      <p className="info">{item[roleKey]}
        <span>&bull;</span>
        <em className="date">{item[dateKey]}</em>
      </p>
      <p>{item[descriptionKey]}</p>
    </div>
  </div>
)

const ResumeList = ({items, titleKey, roleKey, dateKey, descriptionKey}) => {
  return (
    <div className="nine columns main-col">
      {
        items.map((item) => (
            <ResumeListItem item={item} titleKey={titleKey} roleKey={roleKey} dateKey={dateKey} descriptionKey={descriptionKey} key={item[titleKey]}/>
          )
        )
      }
    </div>
  )
}

export const ResumeListContainer = ({sectionTitle, items, titleKey, roleKey, dateKey, descriptionKey}) => (
  <div className="row resume-container">
    <div className="three columns header-col">
      <h1><span>{sectionTitle}</span></h1>
    </div>
    <ResumeList items={items} titleKey={titleKey} roleKey={roleKey} dateKey={dateKey} descriptionKey={descriptionKey}/>
  </div>
)