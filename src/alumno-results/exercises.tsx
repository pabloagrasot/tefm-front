import { FC, useState, useEffect} from 'react'
import {PropsExercises} from './domain/props'
import {IExercise} from './domain/interfaces'
import {exercisesApi} from './infrastructure/api'
import { optionsHeaders } from '../utils/utils'
import axios, {AxiosResponse} from 'axios'
import * as FaIcons from "react-icons/fa";

export const Exercises: FC<PropsExercises> = ({apiGetAlumno}) => {

    const [exercises, setExercises] = useState<IExercise[]>([])
    const [api, setApi] = useState('')
    const [countClicks, setCountClicks] = useState(0)

    useEffect(() => {
        setApi(apiGetAlumno + exercisesApi)
       if(api) {
           axios.get<IExercise[]>(api, optionsHeaders)
          .then((response:AxiosResponse) => {
            setExercises(response.data.data)
            console.log(exercises)
          })}

          if(countClicks === 2){
            alert('Has Clicado 2 veces')
          }
          
      }, [api, countClicks])




    return (
      <section className='exercise__section'>
        <div className='exercise__section-titles'>
          <h3>Ejercicios</h3>
          <h3>Fecha</h3>
        </div>
        {exercises.map((exercise:IExercise, index) => {
              return (
              <div className='exercise__section-exercise' key={index}>
            
                <div className='exercise__section-exercise-data'>
                    <h3>{exercise.exName}</h3>
                    <p>Dificultad: {exercise.dificulty}</p>
                    <p>Tiempo: {exercise.time}</p>
                    <p>Observaciones: {exercise.observations}</p>
                </div>

                <div className='exercise__section-exercise-date'>
                  <p>{exercise.updatedAt.slice(0, -14)}</p>
                </div>

                <FaIcons.FaTrash className='icon-delete-exercise' onClick={(index)=> setCountClicks(countClicks + 1)}/>
              </div>
              );
            })}

      </section> 
    )
  }