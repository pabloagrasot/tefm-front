import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import { Menu } from "./Menu";
import "@testing-library/jest-dom";

test("Content contains var image", () => {
  render(<Menu />);
  const logo = screen.getByAltText(/app training tea/i);
  expect(logo).toBeInTheDocument();
});

test("Checking Function map", () => {
  render(<Menu />)
  const linkMap = screen.getByText(/Contacto/i);
  expect(linkMap).toBeInTheDocument();
});
