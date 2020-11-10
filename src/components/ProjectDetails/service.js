import {useContext, useEffect, useState} from "react";
import {ApplicationIsLoadingContext, ResumeContext} from "../../context";
import {HOST_NAME} from "../../constants";


export function useProject(projectName) {
  const resumeData = useContext(ResumeContext)
  const applicationIsStillLoading = useContext(ApplicationIsLoadingContext)
  const [project, setProject] = useState({})
  useEffect(() => {
    if (!applicationIsStillLoading) {
      const prj = resumeData.portfolio.filter((project) => project.name === projectName)[0]
      setProject(prj)
      window.scrollTo(0, 0)
      const fetchData = async () => {
        if (prj.notebook) {
          let response = await fetch(`${HOST_NAME}${prj.notebook}`)
          let notebookHTML = await response.text()
          setProject({...prj, notebookHTML})
        }
      }
      fetchData()
    }
  }, [applicationIsStillLoading])
  return project
}