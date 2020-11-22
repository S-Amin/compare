import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as pages from "../pages";
import sass from "./App.module.scss";

function App() {
  const Pages = { ...pages.default };
  return (
    <div className="App">
      <header className={sass.AppHeader}>Header</header>
      <Router>
        <Switch>
          <Route path="/" component={Pages["/home"]} exact />
          {Object.keys(Pages).map((path: string) => (
            <Route key={path} path={path} component={Pages[path]} exact />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
