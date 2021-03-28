import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ReactRoutes, RedirectRoutes } from "./routes";
import { RedirectPage } from "./pages/RedirectPage";
import { IndexPage } from "./pages/IndexPage";

function App() {
    return (
        <Router basename="/">
            <Switch>
                {Object.entries(RedirectRoutes).map(([url, location]) => (
                    <Route path={url}>
                        <RedirectPage href={location} />
                    </Route>
                ))}

                {Object.entries(ReactRoutes).map(([url, component]) => (
                    <Route path={url}>{component}</Route>
                ))}

                {/* Index page last so there's no chance it conflicts with anything */}
                <Route path="/">
                    <IndexPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
