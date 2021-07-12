import { FC,} from 'react'
import { Hero } from './Hero-home';
import './home.css';

export const Home : FC = () => {

  return (
    <>
       <Hero/>

       <section className='home-body__section'>

          <div>
            <h2>¿Qué es Training <span>TEA</span></h2>
            <p>Training TEA es una web cuyo objetivo es dar apoyo en las sesiones de educación física con alumnos TEA. Para fomentar el ejercicio y poder realizar ejercicos </p>
          </div>

       </section>
    </>
  )
}
