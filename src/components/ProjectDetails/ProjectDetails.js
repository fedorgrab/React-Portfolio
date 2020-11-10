import React from 'react';
import {useProject} from "./service";
import {HOST_NAME} from "../../constants";
import Footer from "../Footer";

const ProjectDescription = ({project}) => (
  <div className="project-full-description">
    <div dangerouslySetInnerHTML={{__html: project.description}}/>
  </div>
)

const ProjectNotebook = ({project}) => (
  <div className="jupyter-notebook-container">
    <h3 className="jupyter-header">Jupyter Notebook</h3>
    <div dangerouslySetInnerHTML={{__html: project.notebookHTML}}/>
  </div>
)

const ProjectDetails = ({match}) => {
  const {projectName} = match.params
  let project = useProject(projectName)
  return (
    <>
      {
        project ? (
          <div>
            <div id="project-container">
              <base href="/"/>
              <div id="project-description-container">
                <div className="project-top">
                  <img src={`${HOST_NAME}${project.image}`} alt={projectName}/>
                  <div className="project-overview">
                    <h1>{project.name}</h1>
                    <p>{project.short_description}</p>
                  </div>
                </div>
                {project.description ? (<ProjectDescription project={project}/>) : null}
              </div>
              {project.notebookHTML ? (<ProjectNotebook project={project}/>) : null}
            </div>
            {!project.notebookHTML ? (<Footer childPage={true}/>) : null}
          </div>
        ) : <></>
      }
    </>
  )
}

export default ProjectDetails;