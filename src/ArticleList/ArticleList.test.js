
import React from "react";
import ArticleList from "./ArticleList";
import { render } from "@testing-library/react";

describe("ArticleList tests", () => {
    it("renders correctly", () => {
      const { container } = render(<ArticleList articles={[]}/>);
      expect(container).toMatchSnapshot();
    });
  
  });