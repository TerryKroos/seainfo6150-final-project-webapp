
import React from "react";
import NavBar from "./NavBar";
import { render } from "@testing-library/react";

describe("NavBar tests", () => {
    it("renders correctly", () => {
      const { container } = render(<NavBar />);
      expect(container).toMatchSnapshot();
    });
  
  });