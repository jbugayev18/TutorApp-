import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import MATH from "../../pages/MATH";

it("Renders the CAStandards Page without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <MATH />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
