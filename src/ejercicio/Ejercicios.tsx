import { FC, useState } from 'react'

export const Ejercicios: FC = () => {
  const [seconds, setSeconds] = useState(60);
   function UpdateTimer() {

    window.setInterval(() => {
     setSeconds( seconds => seconds - 1);
    }, 1000)
  }
  return (
    <>
      <h1>Ejercicios</h1>
      <h2>{seconds}</h2>
      <button onClick={UpdateTimer} >Empezar</button>
    </> 

   
  )
}