import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ContactPage } from "./pages/ContactPage";
import { IndexPage } from "./pages/IndexPage";
import { Clock } from "./pages/Clock";
import { BlackPage } from "./pages/BlackPage";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/clock">
          <Clock />
        </Route>
        <Route path="/black">
          <BlackPage />
        </Route>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
