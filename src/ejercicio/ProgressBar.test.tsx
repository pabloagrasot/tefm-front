import React from 'react';
import { act, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import {ProgressBar} from './ProgressBar';

test('Props seconds progress bar', () => {
  const secondsSelected = 30
  const watch = 100/secondsSelected
  const timerOn = false
  const stopExercise = () => {}

  render(<ProgressBar secondsSelected={secondsSelected}  watch={watch} timerOn={timerOn} stopExercise={stopExercise}  />);
  const secondsCounter = screen.getByText(30)
  expect(secondsCounter).toHaveTextContent('30');
});


test('Percentaje progress bar 0', () => {
  const secondsSelected = 30
  const watch = 100/secondsSelected
  const timerOn = false
  const stopExercise = () => {}

  render(<ProgressBar secondsSelected={secondsSelected}  watch={watch} timerOn={timerOn} stopExercise={stopExercise}  />);
  const secondsCounter = screen.getByTestId('seconds')
  expect(secondsCounter).toHaveAttribute('style', 'width: 0%;');
});


test('Interval change progress bar', () => {
  const secondsSelected = 30
  const watch = 100/secondsSelected
  const timerOn = true
  const stopExercise = () => {}
  jest.useFakeTimers()

  act(() => {
  render(<ProgressBar secondsSelected={secondsSelected}  watch={watch} timerOn={timerOn} stopExercise={stopExercise}  />);
  const secondsCounter = screen.getByTestId('seconds')
  jest.advanceTimersByTime(1000);  
  expect(secondsCounter).toHaveTextContent('29');
  expect(secondsCounter).toHaveAttribute('style', 'width: 3.3333333333333335%;')
  })
})



