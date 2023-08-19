import { render, screen } from "@testing-library/react";
import App from "./App";

test("Init link test", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Evan's Sneaker Collection/i);
  expect(linkElement).toBeInTheDocument();
});
