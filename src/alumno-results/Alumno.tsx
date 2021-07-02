import { FC, useState, useEffect} from 'react'
import * as FaIcons from "react-icons/fa";
import {Props} from './domain/props'
import {IStudent} from './domain/interfaces'
import { optionsHeaders } from '../utils/utils'
import { alumnoApi, imgApi } from './infrastructure/api';
import axios, { AxiosResponse } from 'axios'

export function Alumno(props:Props){

const [student, setStudent] = useState<IStudent>()

const alumno = props.alumnoName


useEffect(() => {
console.log(alumno)
  axios.get<IStudent[]>(alumnoApi+alumno, optionsHeaders)
  .then((response:AxiosResponse) => {
    setStudent(response.data.data)
    
  })

}, [])

  return (
    <section className={props.className}>
    <div className='modal__form'>
      <div className='close' onClick={props.changeClass}>
        <FaIcons.FaTimes />
        <h2>{alumno}</h2>
      </div>        
    </div>
    </section> 
  )
}