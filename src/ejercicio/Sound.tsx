import React, { FC, useEffect, useState, useRef} from 'react'
import {PropsSound} from './domain/props'


export const ExerciseSound: FC<PropsSound> = ({sound, timerOn, propSetTimerOn, propSetTimerOff, propSetPlayExercise, propSetStopExercise}) => {

  const [audio] = useState( new Audio(sound))
  const ref = useRef(audio)

  const [audioPlay, setAudioPlay] = useState(false)

  useEffect(() => {
    if(audioPlay){
      ref.current.play()
      propSetTimerOn()
      propSetPlayExercise()
      
     } else{
      ref.current.pause()
      propSetTimerOff()
      propSetStopExercise()
     }
      
  }, [audioPlay, timerOn])


  useEffect(() => {
    if ( timerOn === false){
      setAudioPlay(false)
    }
  }, [timerOn])

  return (
    <>
    { audioPlay === false && <button onClick={() => setAudioPlay(!audioPlay)} className={"secundary-button"}>Empezar</button> }
    { audioPlay === true && <button onClick={() => setAudioPlay(!audioPlay)} className={"secundary-button"}>Pausar</button> }
    </>
  )
}
