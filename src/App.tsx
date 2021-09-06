import React, { Suspense, lazy } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./theme/theme";
import history from "./utils/constants";
// import logo from "./logo.svg";
import "./App.css";

const Private = lazy(() => import("./routeModule/private"));
const Public = lazy(() => import("./routeModule/public"));

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/app/*" component={Private} />
            <Route exact path="/" component={Public} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
