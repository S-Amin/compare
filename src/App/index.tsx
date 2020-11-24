import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Compare } from "pages";
import Theme from "../layouts/theme";

function App() {
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <Router>
        <Theme>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/compare" component={Compare} />
          </Switch>
        </Theme>
      </Router>
    </Suspense>
  );
}

export default App;
