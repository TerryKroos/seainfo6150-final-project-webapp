
import React from "react";
import PrivacyPage from "./PrivacyPage";
import { render } from "@testing-library/react";

describe("PrivacyPage tests", () => {
    it("renders correctly", () => {
      const { container } = render(<PrivacyPage />);
      expect(container).toMatchSnapshot();
    });
  
  });