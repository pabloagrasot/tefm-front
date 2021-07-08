import { FC } from 'react'
import noDeporte from '../img/no-deporte.png'
import './ejercicio-terminado.css';



const End: FC = () =>{



  return (
    <section className="exercise-end">

         <div className='modal__form'>

            <div>
              <img src={noDeporte} alt="no ejercicio" className="img-no-deporte"/>
            </div>

            <div>
              <h2>El ejercicio ha terminado</h2>
              <p>Si estás registrado puedes guardar los resultados de tus alumnos o si lo prefieres, puedes realizar otro ejercicio.</p>
            </div>

          <div className="exercise-end_buttons">
           <button className='secundary-button' onClick={() => window.location.reload()}>Empezar</button>
           <button className='primary-button' onClick={() => window.location.href ='/alumnos/' }>Guardar resultados</button>
          </div>
           
         </div>

      
    </section> 
  )
}
export default End;

