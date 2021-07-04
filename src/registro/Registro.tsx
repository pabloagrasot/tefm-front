import { FC, useState} from 'react'
import { useFormik } from 'formik';
import * as FaIcons from "react-icons/fa";
import axios from 'axios';
import {Values} from './domain/values'
import {Props} from './domain/props'
import { validationSchema } from './domain/validationSchema';

export const Registro: FC<Props> = ({className, changeClass}) => {
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const onSubmit = async (values:Values) => {

    const {confirmPassword, ...data} = values

          const response = await axios.post('http://localhost:3500/signup', data).catch((err) => {
            if (err && err.response)
            setError(err.response.data.message)
            setSuccess(null)
          })

          if(response && response.data){
            setError(null)
            setSuccess(response.data.message)
            formik.resetForm()
          }

  }

  const formik = useFormik({initialValues: { name: '', lastName: '', email: '', userName: '', password: '', confirmPassword: '' }, 
    validateOnBlur:true,
    onSubmit,
    validationSchema: validationSchema
  })

  return (
    <section className={className}>

         <form className='modal__form' onSubmit={formik.handleSubmit} >

           <div className='close' onClick={changeClass}>
              <FaIcons.FaTimes />
           </div>

            <div>
              <h2>Regístrate</h2>
            </div>

            <div>
              {error==null && <p className='form-success'> {success ? success: ''} </p>}
              {success==null && <p className='form-error'> {error ? error: ''} </p>}
            </div>

            <div className='form-input'>
              <input id="name" placeholder='Nombre' className='input' type='text' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.name && formik.errors.name ? formik.errors.name: ''}</div>
            </div>

            <div className='form-input'>
              <input id='lastName' placeholder='Apellido' className='input' type='text' name='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName: ''}</div>
            </div>

            <div className='form-input'>
              <input id='email' placeholder='Correo electrónico' className='input' type='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.email && formik.errors.email ? formik.errors.email: ''}</div>
            </div>

            <div className='form-input'>
              <input id='userName' placeholder='Nombre de Usuario' className='input' type='text' name='userName' value={formik.values.userName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.userName && formik.errors.userName ? formik.errors.userName: ''}</div>
            </div>

            <div className='form-input'>
              <input id='password' placeholder='Contraseña' className='input' type='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.password && formik.errors.password ? formik.errors.password: ''}</div>
           </div>

           <div className='form-input'>
              <input id='confirmPassword' placeholder='Confirmar contraseña' className='input' type='password' name='confirmPassword' value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword: ''}</div>
           </div>

           <button className='primary-button' type='submit'>Registrarme</button>
           
         </form>
      
    </section> 
  )
}

