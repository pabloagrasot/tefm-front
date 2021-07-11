import { FC,} from 'react'
import './home.css';
import hero from '../img/hero.svg'

export const Hero : FC = () => {

  return (
    <>
       <section className='hero'>
       <img src={hero} alt="" className="" />

       </section>
    </>
  )
}
