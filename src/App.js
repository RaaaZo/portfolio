import React from "react";
import HomePage from "pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AboutPage from "pages/AboutPage";
import SkillsPage from "pages/SkillsPage";
import ProjectsPage from "pages/ProjectsPage";
import ContactPage from "pages/ContactPage";
import HobbiesPage from "pages/HobbiesPage";
import MainTemplate from "templates/MainTemplate";

function App() {
  return (
    <Router>
      <MainTemplate>
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
      </MainTemplate>
    </Router>
  );
}

export default App;
