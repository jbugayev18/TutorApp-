import React from "react";
import Navigation from "./components/navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import DropDown from "../assets/scss/mocks/DropDown";

import Home from "./pages/home";
import PageRenderer from "./page-renderer";

function App() {
  const user = {
    firstName: "Julia",
    lastName: "B",
  };

  return (
    <Router>
      <div className="App">
        <Navigation user={user} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:page" component={PageRenderer} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
