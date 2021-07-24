
import React, { FC, useEffect, useState} from 'react'
import {PropsSound} from './domain/props'


export const ExerciseSound: FC<PropsSound> = ({sound, timerOn}) => {

  const [audio] = useState( new Audio(sound) )

console.log('fuera', audio)

  useEffect(() => {
    console.log('dentro', audio)
    audio.loop = true
    audio.controls = true
    audio.preload = 'none'
    if (timerOn === true){
      audio.play()
      console.log('true', audio)
    } else if ( timerOn === false){
      audio.pause()
    }
    
  }, [timerOn, audio])
  
  return (
    <>
    </>
  )
}


