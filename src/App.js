import React from "react";
import { Route, Switch } from "react-router-dom";
import PublicRoute from "./Utils/PublicRoute";
import LoginPage from "./routes/LoginPage/LoginPage";
import Navigation from "./components/navigation";
import { BrowserRouter as Router } from "react-router-dom";
// import DropDown from "../assets/scss/mocks/DropDown";
import Home from "./pages/home";
import PageRenderer from "./page-renderer";
import landingPage from "../src/pages/landingPage";

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
          <PublicRoute exact path="/" component={landingPage} />
          <Route path="/search" component={Home} />
          <Route path="/:page" component={PageRenderer} />
          <PublicRoute path={"/login"} component={LoginPage} />
          <Route component={() => 404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
