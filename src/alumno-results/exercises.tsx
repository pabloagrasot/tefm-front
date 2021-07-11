import { FC, useState, useEffect} from 'react'
import {PropsExercises} from './domain/props'
import {IExercise} from './domain/interfaces'
import {exercisesApi, alumnoApi} from './infrastructure/api'
import { optionsHeaders } from '../utils/utils'
import axios, {AxiosResponse} from 'axios'
import {ExerciseDelete} from './Exercise-delete'
import * as RemixIcons from 'react-icons/ri'

export const Exercises: FC<PropsExercises> = ({showNewExercise, getAlumno}) => {

    const [exercises, setExercises] = useState<IExercise[]>([])

    const [renderExercises, setRenderExercises] = useState(false)
    const reload = () => setRenderExercises(!renderExercises);
    const [order, setOrder] =  useState(false)


    useEffect(() => {
      axios.get<IExercise[]>(alumnoApi + getAlumno + exercisesApi, optionsHeaders)
      .then((response:AxiosResponse) => {
      setExercises(response.data.data)
          })
          
      }, [renderExercises, showNewExercise, getAlumno])


    useEffect(() => {

      if (order === true){
        setExercises(exercises.reverse())
      }if (order === false) {
        setExercises(exercises.reverse())
      }
      
    }, [order, exercises, renderExercises, showNewExercise])


    return (
      <section className='exercise__section'>
        <div className='exercise__section-titles'>
          <h3>Ejercicios</h3>

         
            <h3>Fecha <span><RemixIcons.RiArrowUpDownFill  className='exercise__section-order-icon' onClick={() => setOrder(!order)}/></span></h3>
            
          
          
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

                <ExerciseDelete getAlumno={getAlumno} reloadExercises={reload} exerciseID={exercise._id} />
            </div>
              )})}
              
      </section> 
    )
  }