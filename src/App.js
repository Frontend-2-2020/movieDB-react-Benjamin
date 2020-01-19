import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

function App() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/detailPage">DetailPage</Link>
      <Switch>
        <Route path="/detailPage" component={Detail} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
