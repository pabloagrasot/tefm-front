import * as yup from 'yup'
export const validationSchema = yup.object().shape({
    name: yup.string().required('Campo requerido'),
    lastName: yup.string().required('Campo requerido'),
    email: yup.string().email('Introduce un email correcto').required('Campo requerido'),
    userName:yup.string().required('Campo requerido'),
    password: yup.string().required('Campo requerido')
    .oneOf([yup.ref('confirmPassword')], 'Las contraseñas no son inguales'),
    confirmPassword:yup.string().required('Campo requerido')
    .oneOf([yup.ref('password')], 'Las contraseñas no son inguales')
  })