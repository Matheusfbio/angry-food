import Home from "@/app";
import { render } from "@testing-library/react-native";
import React from "react";

test("Should be render the home screen", () => {
  render(<Home />);
});
