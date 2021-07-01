import * as yup from 'yup'
export const validationSchema = yup.object().shape({
    alumnoName:yup.string().required('Introduce el nombre del alumno'),
  })