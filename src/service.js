import {useEffect, useState} from "react";
import {HOST_NAME} from "./constants";


export async function getPortfolioData() {
  const response = await fetch(`${HOST_NAME}/portfolio-info`)
  return await response.json()
}

export function useBackend() {
  const [resumeData, setResumeData] = useState({
    social_links: [],
    portfolio: [],
    education: [],
    work: []
  })
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    let mounted = true
    const getData = async () => await getPortfolioData()
    getData().then((response) => {
      if (mounted) {
        setResumeData(response)
        setLoading(false)
      }
    })
    return () => mounted = false
  }, [])
  return [loading, resumeData]
}
