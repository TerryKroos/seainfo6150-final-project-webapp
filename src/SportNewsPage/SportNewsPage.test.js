



import React from "react";
import SportNewsPage from "./SportNewsPage";
import { render } from "@testing-library/react";

describe("SportNewsPage tests", () => {
    it("renders correctly", () => {
      const { container } = render(<SportNewsPage articles={[]}/>);
      expect(container).toMatchSnapshot();
    });
  
  });