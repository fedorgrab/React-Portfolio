import {useEffect, useState} from "react";
import {NAV_SECTIONS} from "../../constants";

export function useSections() {
  const [sectionCoords, setSectionCoords] = useState(null)
  useEffect(() => {
    let sectionCoordsTmp = {}
    NAV_SECTIONS.map((section) => {
      const sectionEl = document.getElementById(section)
      sectionCoordsTmp[section] = {
        top: sectionEl.offsetTop,
        bottom: sectionEl.offsetTop + sectionEl.clientHeight
      }
    })
    setSectionCoords(sectionCoordsTmp)
  }, [])
  return sectionCoords
}
