import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, it, expect, vi } from "vitest";
import '@testing-library/jest-dom';
import { act } from "react";

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

  it("slides down the navigation bar on scroll (desktop only)", () => {
    vi.spyOn(window, "innerWidth", "get").mockReturnValue(1200);

    render(<App />);

    const nav = screen.getByTestId("navigation");
    expect(nav).toHaveClass("-translate-y-full");
    expect(nav).not.toHaveClass("translate-y-0");

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event("scroll"));
    });

    expect(nav).not.toHaveClass("-translate-y-full");
    expect(nav).toHaveClass("translate-y-0");
  });
});

// TODO: Add tests for mobile navigation menu toggle
// TODO: Add tests for language switcher