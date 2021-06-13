import { FC, useState,} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './acceso.css';
import Logo from '../img/logo-blanco.png';
import { Registro } from '../registro/Registro'

export const Acceso : FC = () => {

  const [modal, setModal] = useState(false)
  const showModal = () => setModal(!modal);
  
  return (
    <>
    <section className="form__section">
      <div className="form__intro">
        <img src={Logo} className='menu-logo' alt='logo' />
        <p>Accede a tu cuenta para llevar el control de tus sesiones de educación física y poder llevar un seguimieto de la evolución de tus alumnos.</p>
        <button onClick={showModal} className="secundary-button">Regístrate</button>
      </div>
    
      <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {email: ''};
         if (!values.email) {
           errors.email = 'Requerido';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Dirección de correo incorecta';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className="form">
            <div>
              <h1>Iniciar sesión</h1>
            </div>

            <div className='form-input'>
              <Field placeholder='Correo electrónico' className='input' type='email' name='email' />
              <ErrorMessage className='input__error' name='email' component='div' />
            </div>

            <div className='form-input'>
              <Field placeholder='Contraseña' className='input'type='password' name='password' />
              <ErrorMessage className='input__error' name="password" component="div" />
           </div>

           <button className="primary-button" type="submit" disabled={isSubmitting}>Accede</button>
         </Form>
       )}
     </Formik >
     
    </section>
    <Registro changeClass={showModal} className={modal ? 'modal active' : 'modal'}></Registro>
    </>
  )
}
