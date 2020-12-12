
import React from "react";
import SideArticleItem from "./SideArticleItem";
import { render } from "@testing-library/react";

describe("SideArticleItem tests", () => {
    it("renders correctly", () => {
      const { container } = render(<SideArticleItem article={{}}/>);
      expect(container).toMatchSnapshot();
    });
  
  });