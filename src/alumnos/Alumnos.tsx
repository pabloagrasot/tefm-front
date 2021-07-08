import { FC, useEffect, useState, } from 'react'
import {AddAlumnos} from './Add-alumnos'
import { Alumno } from '../alumno-results/Alumno';
import { optionsHeaders } from '../utils/utils'
import axios, { AxiosResponse } from 'axios'
import './alumnos.css';
import * as FaIcons from "react-icons/bs";
import { alumnosApi, imgApi } from './infrastructure/api';
import {IStudent} from './domain/interfaces'
import { FaWindows } from 'react-icons/fa';


export const Alumnos: FC = () => {

  const [logged, setLogged] = useState(false)

  const [modal, setModal] = useState(false)
  const showModal = () => setModal(!modal);

  const [modalAlumno, setModalAlumno] = useState(false)
  const showAlumno = () => setModalAlumno(!modalAlumno);

  const [renderAlumnos, setRenderAlumnos] = useState(false)
  const reload = () => setRenderAlumnos(!renderAlumnos);

  const [students, setStudents] = useState<IStudent[]>([])

  const [alumno, setAlumno] = useState('')


  useEffect(() => {
    axios.get<IStudent[]>(alumnosApi, optionsHeaders)
      .then((response:AxiosResponse) => {
        setLogged(true)
        setStudents(response.data.data)
      })
      
  }, [renderAlumnos])

  function getAlumno(alumnoName:string){
    showAlumno()
    setAlumno(alumnoName)
  }

  return (
    <>
      <h1>Alumnos</h1>


      { !logged && <div><p>Accede a tu cuenta para llevar el seguimieto de tus alumnos.</p>

        <button className="primary-button" onClick={() => window.location.href ='/acceso/'}>Accede</button>
        </div>}

      { logged && <FaIcons.BsPlusCircleFill className='add-student-icon' onClick={showModal} /> }   
      <AddAlumnos reloadStudents={reload} changeClass={showModal} className={modal ? 'modal active' : 'modal'}></AddAlumnos>

     
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

     { (modalAlumno===true) && <Alumno changeClass={showAlumno} reloadStudents={reload} alumnoName={alumno} className={modalAlumno ? 'modal active' : 'modal'}></Alumno> }


    </>
  );
}

