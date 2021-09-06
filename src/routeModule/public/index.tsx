import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Blog from "../../components/Blog";
import history from "../../utils/constants";

const Public = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact={true} component={Blog} />
      </Switch>
    </Router>
  );
};
export default Public;
