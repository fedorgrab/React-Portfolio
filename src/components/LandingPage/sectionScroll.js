import {useContext, useEffect, useState} from "react";
import {NAV_SECTIONS} from "../../constants";
import {NavigationStateContext} from "../../context";

export function useSections() {
  const [sectionCoords, setSectionCoords] = useState(null)
  useEffect(() => {
    let sectionCoordsTmp = {}
    for (let section of NAV_SECTIONS) {
      const sectionEl = document.getElementById(section)
      sectionCoordsTmp[section] = {
        top: sectionEl.offsetTop,
        bottom: sectionEl.offsetTop + sectionEl.clientHeight
      }
    }
    setSectionCoords(sectionCoordsTmp)
  }, [])
  return sectionCoords
}


function handleScroll(sectionYs, setCurrent) {
  const currentY = window.pageYOffset
  for (let section of NAV_SECTIONS) {
    if (currentY >= sectionYs[section].top - 300 && currentY <= sectionYs[section].bottom) {
      setCurrent(section)
    }
  }
}

function getSetCurrentPosition(setCurrent, sectionTopCoords) {
  return (current) => {
    window.scrollTo(0, sectionTopCoords[current].top + 1)
    setCurrent(current)
  }
}

export function useCurrentPosition(sectionTopCoords) {
  const {navigationState, setNavigationState} = useContext(NavigationStateContext)
  const handleScrollEvent = () => handleScroll(sectionTopCoords, setNavigationState)
  const setCurrentPosition = getSetCurrentPosition(setNavigationState, sectionTopCoords)
  useEffect(() => {
    if (sectionTopCoords) {
      window.addEventListener("scroll", handleScrollEvent)
      window.scrollTo(0, sectionTopCoords[navigationState].top + 1)
    }
    return () => window.removeEventListener("scroll", handleScrollEvent)
  }, [sectionTopCoords]);
  
  return [navigationState, setCurrentPosition]
}