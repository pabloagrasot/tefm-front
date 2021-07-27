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


test("Menú visible onClic", () => {
  render(
    <Router>
      <Menu/>
    </Router>)
  const menu = screen.getByTitle(/hamburger/i)
  fireEvent.click(menu)
  const navBar = screen.getByTestId('nav')
  expect(navBar).toHaveClass('nav-menu active') 
});


test("Menú not visiblr onClic", () => {
  render(
    <Router>
      <Menu/>
    </Router>)
  const navBar = screen.getByTestId('nav')
  expect(navBar).not.toHaveClass('nav-menu active') 
});
