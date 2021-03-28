import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ContactPage } from "./pages/ContactPage";
import { IndexPage } from "./pages/IndexPage";
import "./AppStyles.css";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
