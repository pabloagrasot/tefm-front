import * as yup from 'yup'
export const validationSchema = yup.object().shape({
  exName: yup.string().required('Campo requerido'),
  intensity: yup.string().required('Campo requerido'),
  time:yup.string().required('Campo requerido'),
  observations: yup.string().required('Campo requerido')
})