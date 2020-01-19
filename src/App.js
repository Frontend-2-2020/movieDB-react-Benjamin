import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:id" component={Detail} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
