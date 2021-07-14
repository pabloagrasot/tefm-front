import * as yup from 'yup'
export const validationSchema = yup.object().shape({
    name: yup.string().required('Campo requerido'),
    email: yup.string().email('Introduce un email correcto').required('Campo requerido'),
    subject:yup.string().required('Campo requerido'),
    message:yup.string().required('Campo requerido')
  })