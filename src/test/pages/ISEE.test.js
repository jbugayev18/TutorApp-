import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import ISEE from "../../pages/ISEE";

it("Renders the CAStandards Page without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <ISEE />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
