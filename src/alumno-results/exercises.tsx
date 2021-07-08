import { FC, useState, useEffect} from 'react'
import {PropsExercises} from './domain/props'
import {IExercise} from './domain/interfaces'
import {exercisesApi} from './infrastructure/api'
import { optionsHeaders } from '../utils/utils'
import axios, {AxiosResponse} from 'axios'
import {ExerciseDelete} from './Exercise-delete'

export const Exercises: FC<PropsExercises> = ({apiGetAlumno, showNewExercise}) => {

    const [exercises, setExercises] = useState<IExercise[]>([])
    const [api, setApi] = useState('')

    const [renderExercises, setRenderExercises] = useState(false)
    const reload = () => setRenderExercises(!renderExercises);


    useEffect(() => {
      setApi(apiGetAlumno + exercisesApi)
      axios.get<IExercise[]>(api, optionsHeaders)
      .then((response:AxiosResponse) => {
      setExercises(response.data.data)
          })
          
      }, [api, renderExercises, showNewExercise])

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

                <ExerciseDelete reloadExercises={reload} api={api} exerciseID={exercise._id} />
            </div>
              )})}
              
      </section> 
    )
  }