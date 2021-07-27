import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import "@testing-library/jest-dom";
import {Alumnos} from './Alumnos';
import {get} from '../__mocks__/axios'

jest.mock('../__mocks__/axios')
test('Registro component visible onclic', async () => {
render(<Alumnos />)

await waitFor(() => {
    expect(screen.getByText('Pepe')).toBeInTheDocument()
  })
    
  })