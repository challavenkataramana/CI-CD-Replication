import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("user can login", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Login"));
  expect(screen.getByText(/Welcome/)).toBeInTheDocument();
});
