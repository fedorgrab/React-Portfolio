import React from 'react';
import {useProject} from "./service";
import {HOST_NAME} from "../../constants";
import Footer from "../Footer";


const ProjectDetails = ({match}) => {
  const {projectName} = match.params
  let project = useProject(projectName)
  return (
    <>
      {project ? (
        <div>
          <div id="project-details-container">
            <base href="/"/>
            <div className="project-details-info">
              <div className="project-details">
                <h1>{project.name}</h1>
                <p>{project.short_description}</p>
              </div>
              <img className="project-details-image project-detail-margin-left"
                   src={`${HOST_NAME}${project.image}`}
                   alt={projectName}/>
            </div>
            {
              project.description ? (
                <div className="project-details-info">
                  <div dangerouslySetInnerHTML={{__html: project.description}}/>
                </div>
              ) : null
            }
            {
              project.notebookHTML ? (
                <div className="jupyter-notebook-container">
                  <h3>Jupyter Notebook</h3>
                  <div dangerouslySetInnerHTML={{__html: project.notebookHTML}}/>
                </div>
              ) : null
            }
          </div>
          {!project.notebookHTML ? (<Footer childPage={true}/>) : null}
        </div>
      ) : <></>
      }
    </>
  )
}

export default ProjectDetails;