import React from "react";
import ReactDOM from "react-dom";
import Button from "../../components/Button";

it("Renders a button without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});
