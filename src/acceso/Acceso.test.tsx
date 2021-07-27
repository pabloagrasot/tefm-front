import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import "@testing-library/jest-dom";
import {Acceso} from './Acceso';

test('render h1', () => {
  render(<Acceso />);
  const h1 = screen.getByText(/Iniciar sesión/i);
  expect(h1).toBeInTheDocument();
})

test('validate userName acept text', () => {
  render(<Acceso />);
  const userName =  screen.getByTestId('userName-log') as HTMLTextAreaElement
  expect(userName.value).toMatch('')
  fireEvent.change(userName, {target: { value: 'userName'} })
  expect(userName.value).toMatch('userName')
})

test('err message - not validate userName', async () => {
  render(<Acceso />);
  const userName =  screen.getByTestId('userName-log') as HTMLTextAreaElement
  fireEvent.focusIn(userName)
  fireEvent.focusOut(userName)
  await waitFor(() => {
    expect(screen.getByText('Introduce tu nombre de usuario')).toBeInTheDocument()
  })
})

test('validate password acept text', () => {
  render(<Acceso />);
  const password =  screen.getByTestId('password-log') as HTMLTextAreaElement
  expect(password.value).toMatch('')
  fireEvent.change(password, {target: { value: 'password'} })
  expect(password.value).toMatch('password')
})

test('err message - not validate password', async () => {
  render(<Acceso />);
  const userName =  screen.getByTestId('userName-log') as HTMLTextAreaElement
  expect(userName.value).toMatch('')
  fireEvent.change(userName, {target: { value: 'userName'} })
  const password =  screen.getByTestId('password-log') as HTMLTextAreaElement
  fireEvent.focusIn(password)
  fireEvent.focusOut(password)
  await waitFor(() => {
    expect(screen.getByText('Introduce tu contraseña')).toBeInTheDocument()
  })
})

test('err message user - axios response ', async () => {
  render(<Acceso />);

  const userName =  screen.getByTestId('userName-log') as HTMLTextAreaElement
  fireEvent.change(userName, {target: { value: 'userName'} })

  const password =  screen.getByTestId('password-log') as HTMLTextAreaElement
  fireEvent.change(password, {target: { value: 'aaaa'} })

  const button = screen.getByText('Accede')
  fireEvent.click(button)

  await waitFor(() => {
    expect(screen.getByText('La cuenta no existe')).toBeInTheDocument()
  })
})

test('Registro component visible onclic', async () => {
  render(<Acceso />);

  const registro =  screen.getByTestId('registro-modal')

  const registroButton = screen.getByTestId('secundary-button')
  fireEvent.click(registroButton)

  expect(registro).toHaveClass('modal active')
  
})


test('Registro component not visible onclic', async () => {
  render(<Acceso />);

  const registro =  screen.getByTestId('registro-modal')

  expect(registro).not.toHaveClass('modal active')
  
})

