import { FC, useState} from 'react'
import { Formik, useFormik, } from 'formik';
import './registro.css';
import * as FaIcons from "react-icons/fa";
import * as yup from 'yup'
import axios from 'axios';
interface props{
  className:string
  changeClass: () => void
}

interface Values {
  name: string;
  lastName: string;
  email: string;
  userName:string;
  password: string;
  confirmPassword:string;
}


const validationSchema = yup.object().shape({
  name: yup.string().required('Campo requerido'),
  lastName: yup.string().required('Campo requerido'),
  email: yup.string().email('Introduce un email correcto').required('Campo requerido'),
  userName:yup.string().required('Campo requerido'),
  password: yup.string().required('Campo requerido')
  .oneOf([yup.ref('confirmPassword')], 'Las contraseñas no son inguales'),
  confirmPassword:yup.string().required('Campo requerido')
  .oneOf([yup.ref('password')], 'Las contraseñas no son inguales')
})
const sleep = (ms:number) => new Promise((r) => setTimeout(r, ms));



export const Registro: FC<props> = ({className, changeClass}) => {
  const [success, setSuccess] = useState(null)

  const onSubmit = async (values:Values) => {

    const {confirmPassword, ...data} = values

          const response = await axios.post('http://localhost:3500/signup', data).catch((err) => {
            if (err && err.response)
            console.log('Error: ', err);
          })

          if(response && response.data){
            setSuccess(response.data.message)
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
              <p className='form-success'> {success ? success: 'Usuario registrado'} </p>
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

