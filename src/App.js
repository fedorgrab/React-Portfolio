import React, {useState} from "react";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import LandingPage from "./components/LandingPage/LandingPage";
import {ResumeContext, ApplicationIsLoadingContext, NavigationStateContext} from "./context";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {useBackend} from "./service";


const LoadingScreen = () => (
  <div className="preloader-container"/>
)


const App = () => {
  const [resumeData, setResumeData] = useState({
    social_links: [],
    portfolio: [],
    education: [],
    work: []
  })
  const [navigationState, setNavigationState] = useState("home")
  const loading = useBackend(setResumeData)
  return (
    <ApplicationIsLoadingContext.Provider value={loading}>
      <NavigationStateContext.Provider value={{navigationState, setNavigationState}}>
        {!loading ? (
          <BrowserRouter>
            <ResumeContext.Provider value={resumeData}>
              <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/project/:projectName" component={ProjectDetails}/>
              </Switch>
            </ResumeContext.Provider>
          </BrowserRouter>
        ) : (
          <LoadingScreen/>
        )}
      </NavigationStateContext.Provider>
    </ApplicationIsLoadingContext.Provider>
  )
}

export default App;