import { FC} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './registro.css';
import * as FaIcons from "react-icons/fa";
interface props{
  className:string
  changeClass: () => void
}

export const Registro: FC<props> = ({className, changeClass}) => {

  //const [modal, setModal] = useState(false)
  //const showModal = () => setModal(!modal);

  return (
    <section className={className}>
      <Formik
       initialValues={{ name: '', email: '', password: '', confirmPassword: ''}}
       validate={values => {
         const errors = {email: '', password:'', confirmPassword: ''};
         if (!values.email) {
           errors.email = 'Requerido';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Dirección de correo incorecta';
         } else if (!values.password){
            errors.password = 'Requerido'

         } else if (!values.confirmPassword){
            errors.confirmPassword = 'Requerido'
             
         } else if (values.password !== values.confirmPassword){
            errors.confirmPassword = 'Las contraseñas no coinciden'
         }return errors;
         
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (

         <Form className='modal__form'>

           <div className='close' onClick={changeClass}>
              <FaIcons.FaTimes />
           </div>

            <div>
              <h2>Regístrate</h2>
            </div>

            <div className='form-input'>
              <Field placeholder='Nombre completo' className='input' type='text' name='name' />
              <ErrorMessage className='input__error' name='name' component='div' />
            </div>

            <div className='form-input'>
              <Field placeholder='Correo electrónico' className='input' type='email' name='email' />
              <ErrorMessage className='input__error' name='email' component='div' />
            </div>

            <div className='form-input'>
              <Field placeholder='Contraseña' className='input' type='password' name='password' />
              <ErrorMessage className='input__error' name='password' component='div' />
           </div>

           <div className='form-input'>
              <Field placeholder='Confirmar contraseña' className='input' type='password' name='confirmPassword' />
              <ErrorMessage className='input__error' name='confirmPassword' component='div' />
           </div>

           <button className='primary-button' type='submit' disabled={isSubmitting}>Registrarme</button>
           
         </Form>

       )}
     </Formik>
      
    </section> 
  )
}

