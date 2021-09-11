import React, { FC, useState, useEffect, lazy, Suspense} from 'react'
import {PropsProgressBar} from './domain/props'


export const ProgressBar: FC<PropsProgressBar> = ({secondsSelected, watch, timerOn, propSetTimerOff}) =>{ 

const [seconds, setSeconds] = useState(secondsSelected)

const [percentage, setPercentage] = useState(0);




const End = lazy (
  () => import ('../ejercicio-terminado/ejercicio-terminado')
 )

  useEffect(() => {
    setSeconds (secondsSelected)
  }, [secondsSelected])


  useEffect(() => {
    let interval: any
    
    if ( timerOn && seconds > 0){
      interval = setInterval(() => {
        setSeconds( seconds => seconds - 1)
        setPercentage(percentage + watch)
      }, 1000)
      
    }else if ( seconds === 0){
      clearInterval(interval)
      propSetTimerOff()
    }
    return () => clearInterval(interval)
  }, [watch, timerOn, propSetTimerOff, percentage, seconds] )

  return (
    <>
    <div className='progress-bar'>
        <div data-testid="seconds" className='progress-bar__background' style={{width: `${percentage}%`}}><span>{seconds}</span></div>
    </div>

    <Suspense fallback={null}>
      {(seconds === 0) && <End />}
    </Suspense>

    </>
  )
}


