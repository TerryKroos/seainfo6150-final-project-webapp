
import React from "react";
import Article from "./Article";
import { render } from "@testing-library/react";

jest.mock('react-router-dom', () => ({
    __esModule: true,
    useLocation: jest.fn().mockReturnValue({
      pathname: '/home',
    }),
  }));

describe("Article tests", () => {
    it("renders correctly", () => {
      const { container } = render(<Article />);
      expect(container).toMatchSnapshot();
    });
  
  });