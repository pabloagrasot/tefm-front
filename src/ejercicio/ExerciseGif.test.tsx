import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import {ExerciseGif} from './ExerciseGif';

test('Props img', () => {
  const gif = 'img-test.jpg'
  render(<ExerciseGif gif={gif} />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', 'img-test.jpg');
});

