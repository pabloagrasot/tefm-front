import { FC, useState} from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import {Values} from './domain/values'
import { validationSchema } from './domain/validationSchema';
import {contactApi} from './infrastructure/api'
import './contacto.css';

export const Contacto: FC= () => {
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const onSubmit = async (values:Values) => {

    const {...data} = values

          const response = await axios.post(contactApi, data).catch((err) => {
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

  const formik = useFormik({initialValues: { name: '', email: '', subject:'', message: ''}, 
    validateOnBlur:true,
    onSubmit,
    validationSchema: validationSchema
  })

  return (
    <section className='contact__section'>

        <h1>Contacto</h1>

        <p>Si tienes cualquier duda o propuesta de mejora, contacta a través del formulario y te responderemos lo maś rápido posible.</p>


         <form className='modal__form' onSubmit={formik.handleSubmit} >

            <div>
              {error==null && <p className='form-success'> {success ? success: ''} </p>}
              {success==null && <p className='form-error'> {error ? error: ''} </p>}
            </div>

            <div className='form-input'>
              <input id="name" placeholder='Nombre' className='input' type='text' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.name && formik.errors.name ? formik.errors.name: ''}</div>
            </div>


            <div className='form-input'>
              <input id='email' placeholder='Correo electrónico' className='input' type='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.email && formik.errors.email ? formik.errors.email: ''}</div>
            </div>

            <div className='form-input'>
              <input id='subject' placeholder='Asunto' className='input' type='text' name='subject' value={formik.values.subject} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.subject && formik.errors.subject ? formik.errors.subject: ''}</div>
            </div>


            <div className='form-input mensaje'>
              <textarea id='message' placeholder='Mensaje' className='input' name='message' value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.message && formik.errors.message ? formik.errors.message: ''}</div>
            </div>


           <button className='primary-button' type='submit'>Enviar</button>
           
         </form>
      
    </section> 
  )
}