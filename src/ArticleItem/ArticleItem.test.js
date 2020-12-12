
import React from "react";
import ArticleItem from "./ArticleItem";
import { render } from "@testing-library/react";

describe("ArticleItem tests", () => {
    it("renders correctly", () => {
      const { container } = render(<ArticleItem article={{}}/>);
      expect(container).toMatchSnapshot();
    });
  
  });