import React, { FC, useEffect, useState, useRef} from 'react'
import {PropsSound} from './domain/props'


export const ExerciseSound: FC<PropsSound> = ({sound, timerOn, propSetTimerOn, propSetTimerOff, }) => {

  const [audio] = useState( new Audio(sound))
  const ref = useRef(audio)

  const [audioPlay, setAudioPlay] = useState(false)

  useEffect(() => {
    if(audioPlay){
      ref.current.play()
      propSetTimerOn()
      
      
     } else{
      ref.current.pause()
      propSetTimerOff()
     
     }
      
  }, [audioPlay, timerOn, propSetTimerOn, propSetTimerOff])


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
