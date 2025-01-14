import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { ReactRoutes, RedirectRoutes } from "./routes";
import { RedirectPage } from "./pages/RedirectPage";
import { IndexPage } from "./pages/IndexPage";
import { Helmet } from "react-helmet";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
    return (
        <Router basename="/">
            <Switch>
                {Object.entries(RedirectRoutes).map(([url, location]) => (
                    <Route path={url} key={url}>
                        <RedirectPage href={location} />
                    </Route>
                ))}

                {Object.entries(ReactRoutes).map(([url, details]) => (
                    <Route key={url} path={url}>
                        <Helmet>
                            <title>{details.title}</title>
                        </Helmet>
                        {details.component}
                    </Route>
                ))}

                {/* Index page last so there's no chance it conflicts with anything */}
                <Route exact path="/">
                    <Helmet>
                        <title>Ethan Goh</title>
                    </Helmet>
                    <IndexPage />
                </Route>

                <Route>
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
