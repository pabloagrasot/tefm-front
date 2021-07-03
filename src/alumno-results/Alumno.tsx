import { FC, useState, useEffect} from 'react'
import * as FaIcons from "react-icons/fa";
import {Props} from './domain/props'
import {IStudent} from './domain/interfaces'
import { optionsHeaders } from '../utils/utils'
import { alumnoApi, imgApi } from './infrastructure/api';
import axios, { AxiosResponse } from 'axios'
import './alumno.css';



export function Alumno(props:Props){

const [getAlumno, setGetAlumno] = useState('')
const [student, setStudent] = useState<IStudent>()
const [apiGetAlumno, SetApiGetAlumno ] = useState('')
const [success, setSuccess] = useState(null)
const [error, setError] = useState(null)



  useEffect(() => {
    SetApiGetAlumno(alumnoApi + getAlumno)
    setGetAlumno(props.alumnoName)
    const response = axios.get<IStudent>(apiGetAlumno, optionsHeaders)
    .then((response:AxiosResponse) => {
    setStudent(response.data.data)
    })

}, [getAlumno, apiGetAlumno])

const deleteStudent = async () =>{
  const response = await axios.delete<IStudent>(apiGetAlumno, optionsHeaders)
  .then((response:AxiosResponse) => {
    setError(null)
    setSuccess(response.data.message)
  })
  .catch((err) => {
    if (err && err.response)
    setError(err.response.data.message)
    setSuccess(null)
  })
}

function close(){
  props.changeClass()
  props.reloadStudents()
}

  return (
    <section className={props.className}>
    <div className='modal__form modal__alumno'>
      <div className='close' onClick={close}>
        <FaIcons.FaTimes />
      </div>

      <div className='student-img__circle'>
        <img src={imgApi + student?.imagePath} alt="" />
      </div>

      <div>
          {error==null && <p className='form-success'> {success ? success: ''} </p>}
          {success==null && <p className='form-error'> {error ? error: ''} </p>}
      </div>

      <h2>{student?.alumnoName}</h2>


      <button className='secundary-button' onClick={() => deleteStudent()}>Borrar Alumno</button>

    </div>
    </section> 
  )
}