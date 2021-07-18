
import { FC, useEffect, useState} from 'react'
import {PropsSound} from './domain/props'


export const ExerciseSound: FC<PropsSound> = ({sound, timerOn}) => {
  const [play, setPlay] = useState(timerOn)

  useEffect(() => {

    setPlay(timerOn)
    let audio = new Audio(sound)
    
    play ? audio.play() : audio.pause()

  }, [timerOn, play])

 

  return (
    <>
    </>
  )
}


