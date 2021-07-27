import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import "@testing-library/jest-dom";
import {Registro} from './Registro';


test('validate name acept text and validate', async () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const name =  screen.getByTestId('name') as HTMLTextAreaElement
  expect(name.value).toMatch('')
  fireEvent.change(name, {target: { value: 'Nombre'} })
  expect(name.value).toMatch('Nombre')
})


test('err message - not validate name', async () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const name =  screen.getByTestId('name') as HTMLTextAreaElement
  fireEvent.focusIn(name)
  fireEvent.focusOut(name)
  await waitFor(() => {
    expect(screen.getByText('Campo requerido')).toBeInTheDocument()
  })
})


test('validate lastName acept text', () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const lastName =  screen.getByTestId('lastName') as HTMLTextAreaElement
  expect(lastName.value).toMatch('')
  fireEvent.change(lastName, {target: { value: 'Apellido'} })
  expect(lastName.value).toMatch('Apellido')
})

test('err message - not validate lastName', async () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const lastName =  screen.getByTestId('lastName') as HTMLTextAreaElement
  fireEvent.focusIn(lastName)
  fireEvent.focusOut(lastName)
  await waitFor(() => {
    expect(screen.getByText('Campo requerido')).toBeInTheDocument()
  })
})


test('validate email acept text', () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const email =  screen.getByTestId('email') as HTMLTextAreaElement
  expect(email.value).toMatch('')
  fireEvent.change(email, {target: { value: 'test@test.es'} })
  expect(email.value).toMatch('test@test.es')
})


test('err message - not validate email', async () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const email =  screen.getByTestId('email') as HTMLTextAreaElement
  fireEvent.focusIn(email)
  fireEvent.focusOut(email)
  await waitFor(() => {
    expect(screen.getByText('Campo requerido')).toBeInTheDocument()
  })
})



test('validate userName acept text', () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const userName =  screen.getByTestId('userName') as HTMLTextAreaElement
  expect(userName.value).toMatch('')
  fireEvent.change(userName, {target: { value: 'userName'} })
  expect(userName.value).toMatch('userName')
})

test('err message - not validate userName', async () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const userName =  screen.getByTestId('userName') as HTMLTextAreaElement
  fireEvent.focusIn(userName)
  fireEvent.focusOut(userName)
  await waitFor(() => {
    expect(screen.getByText('Campo requerido')).toBeInTheDocument()
  })
})


test('validate password acept text', () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const password =  screen.getByTestId('password') as HTMLTextAreaElement
  expect(password.value).toMatch('')
  fireEvent.change(password, {target: { value: 'abcd'} })
  expect(password.value).toMatch('abcd')
})


test('err message - not validate password', async () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const password =  screen.getByTestId('password') as HTMLTextAreaElement
  fireEvent.focusIn(password)
  fireEvent.focusOut(password)
  await waitFor(() => {
    expect(screen.getByText('Campo requerido')).toBeInTheDocument()
  })
})

test('validate confirmPassword acept text', () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const confirmPassword =  screen.getByTestId('confirmPassword') as HTMLTextAreaElement
  expect(confirmPassword.value).toMatch('')
  fireEvent.change(confirmPassword, {target: { value: 'abcd'} })
  expect(confirmPassword.value).toMatch('abcd')
})

test('err message - not validate confirmPassword', async () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const confirmPassword =  screen.getByTestId('confirmPassword') as HTMLTextAreaElement
  fireEvent.focusIn(confirmPassword)
  fireEvent.focusOut(confirmPassword)
  await waitFor(() => {
    expect(screen.getByText('Campo requerido')).toBeInTheDocument()
  })
})


test('validate Pasword = confirmPassword', () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);

  const password =  screen.getByTestId('password') as HTMLTextAreaElement
  fireEvent.change(password, {target: { value: 'abcd'} })

  const confirmPassword =  screen.getByTestId('confirmPassword') as HTMLTextAreaElement
  fireEvent.change(confirmPassword, {target: { value: 'abcd'} })


  expect(confirmPassword.value).toMatch(password.value)
})


test('err message - passwords and confirmPassword are different', async () => {
  const className = 'modal active'
  const changeClass = () => {}
  render(<Registro className={className} changeClass={changeClass}/>);
  const password =  screen.getByTestId('password') as HTMLTextAreaElement
  fireEvent.change(password, {target: { value: 'abcd'} })

  const confirmPassword =  screen.getByTestId('confirmPassword') as HTMLTextAreaElement
  fireEvent.change(confirmPassword, {target: { value: 'dcba'} })

  fireEvent.focusIn(confirmPassword)
  fireEvent.focusOut(confirmPassword)

  await waitFor(() => {
    expect(screen.getByText('Las contraseñas no son inguales')).toBeInTheDocument()
  })
})
