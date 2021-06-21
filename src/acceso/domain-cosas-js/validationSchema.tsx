import * as yup from 'yup'
export const validationSchema = yup.object().shape({
  
    userName:yup.string().required('Introduce tu nombre de usuario'),
    password: yup.string().required('Introduce tu contraseña')
  })