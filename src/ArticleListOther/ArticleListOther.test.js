
import React from "react";
import ArticleListOther from "./ArticleListOther";
import { render } from "@testing-library/react";

describe("ArticleListOther tests", () => {
    it("renders correctly", () => {
      const { container } = render(<ArticleListOther articles={[]}/>);
      expect(container).toMatchSnapshot();
    });
  
  });