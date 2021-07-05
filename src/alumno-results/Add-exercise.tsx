import { FC, useState} from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import {PropsNewEx} from './domain/props'
import {IExercisesValues} from './domain/values'
import { validationSchema } from './domain/validationSchema';
import * as FaIcons from "react-icons/fa";
import {optionsHeaders} from '../utils/utils'

export const AddExercise: FC<PropsNewEx> = ({showNewExercise, apiGetAlumno}) => {

  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)
  const [next, setNext] = useState(1)


  const onSubmit = async (values:IExercisesValues) => {
    

    const { ...data} = values


          const response = await axios.post(apiGetAlumno, data, optionsHeaders)
          
          .catch((err) => {
            if (err && err.response)
            setError(err.response.data.message)
            setSuccess(null)
          })

          if(response && response.data){
            setError(null)
            setSuccess(response.data.data)
            formik.resetForm()
            showNewExercise()
          }

  }


  const formik = useFormik({initialValues: { exName:'', dificulty:'', time:'', observations:''}, 
    validateOnBlur:true,
    onSubmit,
    validationSchema: validationSchema
  })

  return (
    <section className='add-excercise'>

         <form className='modal__form' onSubmit={formik.handleSubmit} >

         <div className='close' onClick={ showNewExercise }>
          <FaIcons.FaTimes />
         </div>

            <div>
              {error==null && <p className='form-success'> {success ? success: ''} </p>}
              {success==null && <p className='form-error'> {error ? error: ''} </p>}
            </div>

            {(next === 1) && <div className='form-input'>
              <p>Nombre del Ejercicio</p>
              <input id="exName" placeholder='Nombre del ejercicio' className='input' type='text' name='exName' value={formik.values.exName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.exName && formik.errors.exName ? formik.errors.exName: ''}</div>
              <FaIcons.FaArrowRight onClick={() => setNext(2)} className='next-add-exercise'/>
            </div>}

            { (next === 2) && <div className='form-input'>
              <p>Dificultad</p>
              <input id="dificulty" placeholder='Dificultad' className='input' type='text' name='dificulty' value={formik.values.dificulty} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.dificulty && formik.errors.dificulty ? formik.errors.dificulty: ''}</div>
              <FaIcons.FaArrowLeft onClick={() => setNext(1)} className='next-add-exercise'/>
              <FaIcons.FaArrowRight onClick={() => setNext(3)} className='next-add-exercise'/>
            </div>}

            {(next === 3) && <div className='form-input'>
              <p>Tiempo</p>
              <input id="time" placeholder='Tiempo' className='input' type='text' name='time' value={formik.values.time} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
              <div className='input__error'>{formik.touched.time && formik.errors.time ? formik.errors.time: ''}</div>
              <FaIcons.FaArrowLeft onClick={() => setNext(2)} className='next-add-exercise'/>
              <FaIcons.FaArrowRight onClick={() => setNext(4)} className='next-add-exercise'/>
            </div>}

            {(next === 4) && 
              <div className='last-input__add-excercise'>
                <div className='form-input'>
                  <p>Observaciones</p>
                  <input id="observations" placeholder='Observaciones' className='input' type='text' name='observations' value={formik.values.observations} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                  <div className='input__error'>{formik.touched.observations && formik.errors.observations ? formik.errors.observations: ''}</div>
                  <FaIcons.FaArrowLeft onClick={() => setNext(3)} className='next-add-exercise'/>
                </div>
                <button className='primary-button' type='submit'>Guardar</button>
            </div>}
           
         </form>
      
    </section> 
  )
}

