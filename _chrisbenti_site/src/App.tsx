import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { ContactPage } from "./pages/ContactPage";
import { IndexPage } from "./pages/IndexPage";

class App extends React.Component {
  constructor(props: any) {
    super(props);
    const host = "www.chrisbenti.com";
    if (
      window.location.host === host &&
      window.location.protocol !== "https:"
    ) {
      window.location.protocol = "https:";
    }
  }
  public render() {
    return (
      <BrowserRouter>
        <>
          <Route exact={true} path="/" component={IndexPage} />
          <Route exact={true} path="/contact" component={ContactPage} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
