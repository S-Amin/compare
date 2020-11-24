import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Compare } from "pages";
import Theme from "../layouts/theme";

function App() {
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <Theme>
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/compare" component={Compare} />
          </Switch>
        </Router>
      </Theme>
    </Suspense>
  );
}

export default App;
