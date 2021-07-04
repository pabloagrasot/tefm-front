import { FC, useState, useEffect} from 'react'
import {PropsExercises} from './domain/props'
import {IExercise} from './domain/interfaces'
import {exercisesApi} from './infrastructure/api'
import { optionsHeaders } from '../utils/utils'
import axios, {AxiosResponse} from 'axios'

export const Exercises: FC<PropsExercises> = ({apiGetAlumno}) => {

    const [exercises, setExercises] = useState<IExercise[]>([])
    const [api, setApi] = useState('')

    useEffect(() => {
        setApi(apiGetAlumno + exercisesApi)
       if(api) {
           axios.get<IExercise[]>(api, optionsHeaders)
          .then((response:AxiosResponse) => {
            setExercises(response.data.data)
            console.log(exercises)
          })}
          
      }, [api])




    return (
      <section>
        

        {exercises.map((exercise:IExercise, index) => {
              return (
                <div key={index}>
                    <p>{exercise.exName}</p>
                    <p>{exercise.dificulty}</p>
                    <p>{exercise.time}</p>
                    <p>{exercise.observations}</p>
                </div>
              );
            })}

      </section> 
    )
  }