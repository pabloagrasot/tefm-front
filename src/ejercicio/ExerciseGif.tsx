import { FC } from 'react'
import {PropsGif} from './domain/props'




export const ExerciseGif: FC<PropsGif> = ({gif}) =>{ 



  return (
    <img src={gif} alt="" className="exercise-gif" />
  )
}


