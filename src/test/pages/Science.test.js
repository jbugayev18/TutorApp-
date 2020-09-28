import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Science from "../../pages/Science";

it("Renders the CAStandards Page without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Science />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
