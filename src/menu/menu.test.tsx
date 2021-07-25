import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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


test("Menú onclic", () => {
  const handleClick = jest.fn()
  render(
    <Router>
      <Menu>
        <Link to='#'>
          <svg onClick={handleClick}> </svg>
        </Link>
      </Menu>
    </Router>)
  const menu = screen.getByTitle(/hamburger/i)
  console.log(menu)
  fireEvent.click(menu)
  expect(handleClick).toHaveBeenCalledTimes(1)
});
