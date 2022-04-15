import { render } from "@testing-library/react";
import App from "../App";

test("renders all sections", () => {
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
