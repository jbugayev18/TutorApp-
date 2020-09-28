import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Home from "../../pages/home";

it("Renders the CAStandards Page without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
