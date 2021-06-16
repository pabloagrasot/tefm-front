import { FC} from 'react'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import './registro.css';
import * as FaIcons from "react-icons/fa";
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

const sleep = (ms:number) => new Promise((r) => setTimeout(r, ms));

export const Registro: FC<props> = ({className, changeClass}) => {

  //const [modal, setModal] = useState(false)
  //const showModal = () => setModal(!modal);

  return (
    <section className={className}>
      <Formik
       initialValues={{ name: '', lastName: '', email: '', userName: '', password: '', confirmPassword: '' }}
       validate={values => {
         const errors = {name: '', lastName: '', email: '', userName: '', password: '', confirmPassword: ''};
         if (!values.name) {
          errors.name = 'Requerido';
        }else if (!values.lastName) {
          errors.lastName = 'Requerido';
        }else if (!values.email) {
           errors.email = 'Requerido';
          }else if (!values.userName) {
            errors.userName = 'Requerido';
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
       onSubmit={async (values:Values) => {
        await sleep(500);
       console.log(values);
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
              <Field id="name" placeholder='Nombre' className='input' type='text' name='name' />
              <ErrorMessage className='input__error' name='name' component='div' />
            </div>

            <div className='form-input'>
              <Field id='lastName' placeholder='Apellido' className='input' type='text' name='lastName' />
              <ErrorMessage className='input__error' name='lastName' component='div' />
            </div>

            <div className='form-input'>
              <Field id='email' placeholder='Correo electrónico' className='input' type='email' name='email' />
              <ErrorMessage className='input__error' name='email' component='div' />
            </div>

            <div className='form-input'>
              <Field id='userName' placeholder='Nombre de Usuario' className='input' type='text' name='userName' />
              <ErrorMessage className='input__error' name='userName' component='div' />
            </div>

            <div className='form-input'>
              <Field id='password' placeholder='Contraseña' className='input' type='password' name='password' />
              <ErrorMessage className='input__error' name='password' component='div' />
           </div>

           <div className='form-input'>
              <Field id='confirmPassword' placeholder='Confirmar contraseña' className='input' type='password' name='confirmPassword' />
              <ErrorMessage className='input__error' name='confirmPassword' component='div' />
           </div>

           <button className='primary-button' type='submit' disabled={isSubmitting}>Registrarme</button>
           
         </Form>

       )}
     </Formik>
      
    </section> 
  )
}

