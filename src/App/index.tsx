import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as pages from "../pages";
import Theme from "../layouts/theme";

function App() {
  const Pages = { ...pages.default };
  return (
    <Theme>
      <Router>
        <Switch>
          <Route path="/" component={Pages["/home"]} exact />
          {Object.keys(Pages).map((path: string) => (
            <Route key={path} path={path} component={Pages[path]} exact />
          ))}
        </Switch>
      </Router>
    </Theme>
  );
}

export default App;
