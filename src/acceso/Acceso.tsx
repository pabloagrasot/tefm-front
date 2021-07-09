import { FC, useState,} from 'react'
import { useFormik } from 'formik';
import './acceso.css';
import Logo from '../img/logo-blanco.png';
import { Registro } from '../registro/Registro'
import { validationSchema } from './domain/validationSchema';
import axios from 'axios';
import {Values} from './domain/values'

export const Acceso : FC = () => {

  const [modal, setModal] = useState(false)
  const [error, setError] = useState(null)
  const showModal = () => setModal(!modal);
  
  
  const onSubmit = async (values:Values) => {

    const {...data} = values

          const response = await axios.post('http://localhost:3500/signin', data).catch((err) => {
            if (err && err.response)
            setError(err.response.data.message)
            console.log(err.response.data.message)
          })

          if(response && response.data){
            formik.resetForm()
            window.location.href ='/alumnos/';
            sessionStorage.setItem('token', response.data.token)
          }

  }


  const formik = useFormik({initialValues: {userName: '', password: ''}, 
  validateOnBlur:true,
  onSubmit,
  validationSchema: validationSchema
})

  return (
    <>
    <section className="form__section">
      <div className="form__intro">
        <img src={Logo} className='menu-logo' alt='logo' />
        <p>Accede a tu cuenta para llevar el control de tus sesiones de educación física y poder llevar un seguimieto de la evolución de tus alumnos.</p>
        <button onClick={showModal} className="secundary-button">Regístrate</button>
      </div>
      
         <form className="form" onSubmit={formik.handleSubmit}>
            <div>
              <h1>Iniciar sesión</h1>
            </div>

            <div className='form-input'>
              <input id='userName' placeholder='Nombre de Usuario' className='input' type='text' name='userName' value={formik.values.userName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.userName && formik.errors.userName ? formik.errors.userName: ''}</div>
            </div>

            <div className='form-input'>
              <input id='password' placeholder='Contraseña' className='input' type='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.password && formik.errors.password ? formik.errors.password: ''}</div>
           </div>


           <button className="primary-button" type="submit">Accede</button>
           <p className='form-error'> {error ? error: ''} </p>
         </form>
     
    </section>
    <Registro changeClass={showModal} className={modal ? 'modal active' : 'modal'}></Registro>
    </>
  )
}
