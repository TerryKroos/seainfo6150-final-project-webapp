
import React from "react";
import SideArticleList from "./SideArticleList";
import { render } from "@testing-library/react";

describe("SideArticleList tests", () => {
    it("renders correctly", () => {
      const { container } = render(<SideArticleList articles={[]}/>);
      expect(container).toMatchSnapshot();
    });
  
  });