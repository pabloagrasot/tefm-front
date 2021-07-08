import { FC, useEffect, useState} from 'react'
import * as FaIcons from "react-icons/fa";
import { optionsHeaders } from '../utils/utils'
import axios, {AxiosResponse} from 'axios'
import {PropsExerciseOptions} from './domain/props'
import { IExercise } from './domain/interfaces';


export const ExerciseDelete: FC<PropsExerciseOptions> = ({exerciseID, api, reloadExercises}) => {

const apiDelete = api + '/' + exerciseID
const deleteClick = (id:string) => {
    axios.delete<IExercise[]>(apiDelete, optionsHeaders)
  .then((response:AxiosResponse) => {
    reloadExercises()
      })
    }
useEffect(() => {


}, [exerciseID])

  return (
    <section className='exercise-options'>

    <FaIcons.FaTrash className='icon-delete-exercise' onClick={() => deleteClick(exerciseID)} />
      
    </section> 
  )
}