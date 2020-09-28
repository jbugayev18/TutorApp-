import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Tutor from "../../pages/tutor";

it("Renders the CAStandards Page without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Tutor />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
