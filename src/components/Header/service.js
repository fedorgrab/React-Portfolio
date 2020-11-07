import {NAV_SECTIONS} from "../../constants";
import {useContext, useEffect} from "react";
import {NavigationStateContext, SectionTopCoordinatesContext} from "../../context";

function handleScroll(sectionYs, setCurrent) {
  const currentY = window.pageYOffset
  NAV_SECTIONS.map((section) => {
    if (currentY >= sectionYs[section].top - 300 && currentY <= sectionYs[section].bottom) {
      setCurrent(section)
    }
  })
}

function getSetCurrentPosition(setCurrent, sectionTopCoords) {
  return (current) => {
    window.scrollTo(0, sectionTopCoords[current].top + 1)
    setCurrent(current)
  }
}

export function useCurrentPosition() {
  const {navigationState, setNavigationState} = useContext(NavigationStateContext)
  const sectionTopCoords = useContext(SectionTopCoordinatesContext)
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