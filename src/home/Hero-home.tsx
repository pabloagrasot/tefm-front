import { FC,} from 'react'
import './home.css';
import hero from '../img/hero-2.svg'

export const Hero : FC = () => {

  return (
      <section className='hero__section'>
        <div className='hero'>
          <img src={hero} />
          <h2>La herramienta complementaria para tu circuito de Educación Física por estaciones</h2>
        </div> 
      </section>

  )
}