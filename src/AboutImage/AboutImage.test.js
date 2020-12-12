
import React from "react";
import AboutImage from "./AboutImage";
import { render } from "@testing-library/react";

describe("AboutImage tests", () => {
    it("renders correctly", () => {
      const { container } = render(<AboutImage />);
      expect(container).toMatchSnapshot();
    });
  
  });