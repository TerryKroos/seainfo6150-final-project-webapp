
import React from "react";
import AboutItem from "./AboutItem";
import { render } from "@testing-library/react";

describe("AboutItem tests", () => {
    it("renders correctly", () => {
      const { container } = render(<AboutItem />);
      expect(container).toMatchSnapshot();
    });
  
  });