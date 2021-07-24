import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import { Menu } from "./Menu";
import "@testing-library/jest-dom";

test("Content contains var image", () => {
  render(
    <Router>
        <Menu />
    </Router>)
  ;
  const logo = screen.getByAltText(/app training tea/i);
  expect(logo).toBeInTheDocument();
});

test("Checking Function map", () => {
  render(
    <Router>
      <Menu />
    </Router>)
  const linkMap = screen.getByText(/Contacto/i);
  expect(linkMap).toBeInTheDocument();
});
