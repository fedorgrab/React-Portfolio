import React, {useContext} from 'react';
import {ResumeContext} from "../context";
import {Link} from "react-router-dom";
import {HOST_NAME} from "../constants";

const PortfolioItem = ({item}) => (
  <Link to={`/project/${item.name}`} activeClassName="active">
    <div className="columns portfolio-item">
      <div className="item-wrap">
        <img src={`${HOST_NAME}${item.image}`} className="item-img" alt={item.name}/>
        <div className="overlay">
          <div className="portfolio-item-meta">
            <h5>{item.name}</h5>
            <p>{`${item.short_description.substring(0, 200)}...`}</p>
          </div>
        </div>
      </div>
    </div>
  </Link>
)

function renderProject(project) {
  return (<PortfolioItem key={project.name} item={project}/>)
}

const Portfolio = () => {
  const resumeData = useContext(ResumeContext)
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {resumeData.portfolio.map((item) => renderProject(item))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;
