import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import {Ejercicios} from './Ejercicios';

test('renders h1', () => {
  render(<Ejercicios />);
  const linkElement = screen.getByText(/Ejercicios/i);
  expect(linkElement).toBeInTheDocument();
});


test("select seconds", () => {
  render(<Ejercicios />);
  fireEvent.change(screen.getByTestId("seconds-main"), {
    target: { value: "30" },
  });
    expect(screen.getByText("30")).toBeInTheDocument();
});

test("select intensity", () => {
  render(<Ejercicios />);
  fireEvent.change(screen.getByTestId("intensity-main"), {
    target: { value: "mid" },
  });
    expect(screen.getByText("Media")).toBeInTheDocument();
});


test("select exercise", () => {
  render(<Ejercicios />);
  fireEvent.change(screen.getByTestId("exercise-main"), {
    target: { value: "run" },
  });
    expect(screen.getByText("Correr")).toBeInTheDocument();
});
