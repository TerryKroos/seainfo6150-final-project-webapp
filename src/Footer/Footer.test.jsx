
import React from "react";
import Footer from "./Footer.jsx";
import { render } from "@testing-library/react";

describe("Footer tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Footer/>);
      expect(container).toMatchSnapshot();
    });
  
  });