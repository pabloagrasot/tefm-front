import { FC, useEffect, useState} from 'react'
import {AddAlumnos} from './Add-alumnos'
import { Alumno } from '../alumno-results/Alumno';
import { optionsHeaders } from '../utils/utils'
import axios, { AxiosResponse } from 'axios'
import './alumnos.css';
import * as FaIcons from "react-icons/bs";
import { alumnosApi, imgApi } from './infrastructure/api';
import {IStudent} from './domain/interfaces'




export const Alumnos: FC = () => {

  const [modal, setModal] = useState(false)
  const showModal = () => setModal(!modal);

  const [modalAlumno, setModalAlumno] = useState(false)
  const showAlumno = () => setModalAlumno(!modalAlumno);

  const [students, setStudents] = useState<IStudent[]>([])

  const [alumno, setAlumno] = useState('')

  useEffect(() => {

      axios.get<IStudent[]>(alumnosApi, optionsHeaders)
      .then((response:AxiosResponse) => {
        setStudents(response.data.data)
      })



  }, [])

  function getAlumno(alumnoName:string){
    showAlumno()
    setAlumno(alumnoName)
    console.log(alumno)
  }

  return (
    <>
      <h1>Alumnos</h1>

      <FaIcons.BsPlusCircleFill className='add-student-icon' onClick={showModal} />
      <AddAlumnos changeClass={showModal} className={modal ? 'modal active' : 'modal'}></AddAlumnos>

     
      <section className='students_section'>
      {students.map((student:IStudent, index) => {
              return (
                <div id={student.alumnoName} onClick={() => getAlumno(student.alumnoName)} className='students_section-student' key={index}>
                    <img src={imgApi + student.imagePath} alt="" />
                    <span>{student.alumnoName}</span>
                </div>
              );
            })}
      </section>

      <Alumno changeClass={showAlumno} alumnoName={alumno} className={modalAlumno ? 'modal active' : 'modal'}></Alumno>


    </>
  );
}

