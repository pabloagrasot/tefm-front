import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import "@testing-library/jest-dom";
import {Exercises} from './exercises';
import {ejercicios} from '../__mocks__/axios'
import axios, {AxiosResponse} from 'axios';

beforeAll(() => jest.spyOn(axios, 'get'))
const mockedAxios = axios as jest.Mocked<typeof axios>
const alumnosData = ejercicios
test('Registro component visible onclic', async () => {

  const mockedResponse: AxiosResponse = {
    data: alumnosData,
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {},
  }
const showNewExercise = () => {}

const getAlumno = 'alumno'

  render(<Exercises showNewExercise={showNewExercise} getAlumno={getAlumno}/>)

  mockedAxios.get.mockResolvedValueOnce(mockedResponse);

  expect(await axios.get).toHaveBeenCalledTimes(1);
   
    
  expect(await screen.getByText('saltar')).toBeInTheDocument

  })