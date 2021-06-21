import { FC, useEffect, useState} from 'react'
import {AddAlumnos} from './Add-alumnos'
import axios from 'axios'
import './alumnos.css';
import * as FaIcons from "react-icons/bs";

const token = localStorage.getItem('token')
const options = {
    headers: {Authorization: token},
}

axios.get('http://localhost:3500/user', options)
    .then( response => {
        console.log(response.data.user.userName)
    })
    .catch((err) => {
        if (err && err.response)
        console.log(err.response.message)
      })

export const Alumnos: FC = () => {

  const [modal, setModal] = useState(false)
  const showModal = () => setModal(!modal);

  useEffect(()=> {
    
  })

  return (
    <>
      <h1>Alumnos</h1>

      <FaIcons.BsPlusCircleFill className='add-student-icon' onClick={showModal} />
      <AddAlumnos changeClass={showModal} className={modal ? 'modal active' : 'modal'}></AddAlumnos>
    </>
  );
}