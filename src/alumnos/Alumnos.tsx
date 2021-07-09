import { FC, useEffect, useState, } from 'react'
import {AddAlumnos} from './Add-alumnos'
import { Alumno } from '../alumno-results/Alumno';
import { optionsHeaders } from '../utils/utils'
import axios, { AxiosResponse } from 'axios'
import './alumnos.css';
import * as BoostrapIcons from "react-icons/bs";
import * as Heroicons from "react-icons/hi";
import * as Githubicons from "react-icons/go";
import { alumnosApi, imgApi } from './infrastructure/api';
import {IStudent} from './domain/interfaces'
import {deleteToken} from '../utils/utils'



export const Alumnos: FC = () => {

  const [logged, setLogged] = useState(false)
  const [logOptions, setLogOptions] = useState(false)
  const showMlogOptions = () => setLogOptions(!logOptions);

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


  function logOut() {
  deleteToken()
  window.location.href ='/'
  }

  return (
    <>
      <h1>Alumnos</h1>


      { !logged && <div><p>Accede a tu cuenta para llevar el seguimieto de tus alumnos.</p>

        <button className="primary-button" onClick={() => window.location.href ='/acceso/'}>Accede</button>
        </div>}

      { logged && <Heroicons.HiDotsVertical className='options-icon' onClick={showMlogOptions}/>}

      { logOptions && logged && <ul className='modal__options-icon'>  

          <li className='nav-link' onClick={showModal}>
            <a>
              <BoostrapIcons.BsPlusCircleFill/>
              <span className='nav-link__title'>Añadir alumno</span>
            </a>
          </li>

          <li className='nav-link' onClick={logOut}>
            <a>
              <Githubicons.GoSignOut/>
              <span className='nav-link__title'>Cerrar sesión</span>
            </a>
          </li>

      </ul> }


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

