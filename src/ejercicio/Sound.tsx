
import React, { FC, useEffect, useState} from 'react'
import {PropsSound} from './domain/props'


export const ExerciseSound: FC<PropsSound> = ({sound, timerOn}) => {

  const [audio] = useState( new Audio(sound) )

  useEffect(() => {
    audio.loop = true
    audio.controls = true
    audio.preload = 'none'
    if (timerOn === true){
      audio.play()
    } else if ( timerOn === false){
      audio.pause()
    }
    
  }, [timerOn, audio])
  
  return (
    <>
    </>
  )
}


