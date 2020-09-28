import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Navigation from "../../components/navigation";

const mockUser = {
  firstName: "Julia",
  lastName: "Buggggg",
};

it("Renders the navbar without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter>
      <Navigation user={mockUser} />
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
