import { render } from "@testing-library/react";
import App from "../App";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';

describe("Home page", () => {
  it("renders all sections", () => {
    const result = render(<App />);
    const sections = [
      "hero",
      "experience",
      "skills",
      "education",
      "hobby",
      "contact",
      "footer",
    ];
    sections.forEach((section) => {
      const element = result.container.querySelector("#" + section);
      expect(element).toBeInTheDocument();
    });
  });
});
