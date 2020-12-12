
import React from "react";
import ArticleItemOther from "./ArticleItemOther";
import { render } from "@testing-library/react";

describe("ArticleItemOther tests", () => {
    it("renders correctly", () => {
      const { container } = render(<ArticleItemOther article={{}}/>);
      expect(container).toMatchSnapshot();
    });
  
  });