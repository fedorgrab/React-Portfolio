import React, {useState} from "react";
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import LandingPage from "./components/LandingPage/LandingPage";
import {ResumeContext, ApplicationIsLoadingContext, NavigationStateContext} from "./context";
import {useBackend} from "./service";


const LoadingScreen = () => (
  <div className="preloader-container"/>
)

const App = () => {
  const [navigationState, setNavigationState] = useState("home")
  const [loading, resumeData] = useBackend()
  return (
    <ApplicationIsLoadingContext.Provider value={loading}>
      <NavigationStateContext.Provider value={{navigationState, setNavigationState}}>
        {!loading ? (
          <Router>
            <ResumeContext.Provider value={resumeData}>
              <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/project/:projectName" component={ProjectDetails}/>
              </Switch>
            </ResumeContext.Provider>
          </Router>
        ) : (
          <LoadingScreen/>
        )}
      </NavigationStateContext.Provider>
    </ApplicationIsLoadingContext.Provider>
  )
}

export default App;