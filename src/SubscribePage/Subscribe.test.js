
import React from "react";
import Subscribe from "./Subscribe";
import { render } from "@testing-library/react";

describe("Subscribe tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Subscribe />);
      expect(container).toMatchSnapshot();
    });
  
  });