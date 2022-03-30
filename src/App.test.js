import { render, screen } from "@testing-library/react";
import App from "./App";

test("Black or white button must be enabled", () => {
  render(<App />);
  const button = screen.getByRole("button");
  expect(button).toBeEnabled();
});
