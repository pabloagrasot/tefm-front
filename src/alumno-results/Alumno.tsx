import { useState, useEffect, FC} from 'react'
import {AddExercise} from './Add-exercise'
import {Exercises} from './exercises'
import * as FaIcons from "react-icons/fa";
import {Props} from './domain/props'
import {IStudent} from './domain/interfaces'
import { optionsHeaders } from '../utils/utils'
import { alumnoApi, imgApi } from './infrastructure/api';
import axios, { AxiosResponse } from 'axios'
import './alumno.css';



export const Alumno: FC<Props> = ( {className, changeClass, alumnoName, reloadStudents}) => {

const [getAlumno] = useState(alumnoName)
const [student, setStudent] = useState<IStudent>()
const [success, setSuccess] = useState(null)
const [error, setError] = useState(null)
const [newExercise, setNewExercise] = useState(false)
const showNewExercise = () => setNewExercise(!newExercise);



  useEffect(() => {

    if (getAlumno){
    axios.get<IStudent>(alumnoApi + getAlumno, optionsHeaders)
    .then((response:AxiosResponse) => {
    setStudent(response.data.data)
    })}

}, [newExercise, getAlumno])

const deleteStudent = async () =>{
  await axios.delete<IStudent>(alumnoApi + getAlumno, optionsHeaders)
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
  changeClass()
  reloadStudents()
}

  return (
    <section className={className}>
    <div className='modal__form modal__alumno'>
      <div className='close' onClick={close}>
        <FaIcons.FaTimes />
      </div>
      
      <div className='alumno-data'>
        <div className='student-img__circle'>
          <img src={imgApi + student?.imagePath} alt="" />
        </div>

        <h2>{student?.alumnoName}</h2>
      </div>

      <div>
          {error==null && <p className='form-success'> {success ? success: ''} </p>}
          {success==null && <p className='form-error'> {error ? error: ''} </p>}
      </div>



      <Exercises showNewExercise={showNewExercise} getAlumno={getAlumno}/>

      {  newExercise && <AddExercise getAlumno={getAlumno} showNewExercise={showNewExercise}/> }

      <div className='student_buttons-flex'>
        <button className='secundary-button' onClick={() => deleteStudent()}>Borrar Alumno</button>
        <button className="primary-button" onClick={showNewExercise}>Nuevo Ejercicio</button>
      </div>

    </div>
    </section> 
  )
}