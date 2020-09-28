import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import CAStandards from "../../pages/CAStandards";

it("Renders the CAStandards Page without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <CAStandards />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
