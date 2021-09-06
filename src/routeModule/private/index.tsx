import React from "react";
import Dashboard from "../../components/Dashboard";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../utils/constants";

const Private = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/Dashboard" exact={true} component={Dashboard} />
      </Switch>
    </Router>
  );
};
export default Private;
