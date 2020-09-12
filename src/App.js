import React, { Suspense } from "react";
import HomePage from "pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MainTemplate from "templates/MainTemplate";
import LoadingSpinner from "components/atoms/LoadingSpinner/LoadingSpinner";

const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const SkillsPage = React.lazy(() => import("./pages/SkillsPage"));
const ProjectsPage = React.lazy(() => import("./pages/ProjectsPage"));
const ContactPage = React.lazy(() => import("./pages/ContactPage"));
const HobbiesPage = React.lazy(() => import("./pages/HobbiesPage"));

function App() {
  return (
    <Router>
      <MainTemplate>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>

            <Route exact path="/about">
              <AboutPage />
            </Route>

            <Route exact path="/skills">
              <SkillsPage />
            </Route>

            <Route exact path="/projects">
              <ProjectsPage />
            </Route>

            <Route exact path="/contact">
              <ContactPage />
            </Route>

            <Route exact path="/hobbies">
              <HobbiesPage />
            </Route>
          </Switch>
        </Suspense>
      </MainTemplate>
    </Router>
  );
}

export default App;
