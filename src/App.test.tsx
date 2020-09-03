import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Home link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Home");
  expect(linkElement).toBeInTheDocument();
});

test("renders Movies link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Movies");
  expect(linkElement).toBeInTheDocument();
});

test("renders Users link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("Users");
  expect(linkElement).toBeInTheDocument();
});
