import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import End from './ejercicio-terminado';
test('renders h2', () => {
  render(<End />);
  const h2 = screen.getByText(/El ejercicio ha terminado/i);
  expect(h2).toBeInTheDocument();
});

test('onclic', () => {

  const onClick = jest.fn();
  const { getByText } = render(<button onClick={onClick} />);
  render(<End />);
  fireEvent.click(getByText(/Empezar/i));
  expect(onClick).toHaveBeenCalled();
});