import { FC,} from 'react'
import { Hero } from './Hero-home';
import logo from '../img/logo-blanco.png'
import guardar from '../img/guardar.png'
import gracias from '../img/gracias.png'
import './home.css';
import { Link } from 'react-router-dom';

export const Home : FC = () => {

  return (
    <>
       <Hero/>

       <section className='home-body__section'>

          <div className='home-body__section-text'>
            <h2>¿Qué es Training<span className='tea-font'>TEA</span>?</h2>
            <p>TrainingTEA es una web cuyo objetivo es dar apoyo en las sesiones de educación física con alumnos TEA.</p>
            <p>Para fomentar el ejercicio contínuo, se ofrece una herramienta que permite seleccionar diferentes tipos de actividades físicas, la duración e intensidad.</p>
            <p>El alumno podrá ver en el dispositivo un pictograma en movimiento que le indicará la actividad que se realizará. Para la gestión del tiempo, la herramienta tiene una barra de progreso que se va completando hasta finalizar el ejercicio. Además, para trabajar con diferentes intensidades, durante el ejercicio sonará una melodía que permitirá al alumno mantener un ritmo y frecuencia cardíaca constantes.</p>
          </div>

          <img src={logo} alt="" />

       </section>




       <section className='home-body__box'>
          <div className='box'>
            <img src={guardar} />
            <div className='box-text'>
              <p>Esta herramienta está pensada para los profesores, por lo que se ofrece un sistema de seguimiento de las actividades.</p>
              <p>Podrás crear una cuenta y registrar a tus alumnos para llevar un control de las actividades de educación física. Almacena los días en los que realizas las actividades, la intensidad y las observaciones para poder ver la evolución de tus alumnos y plantear sesiones individualizadas.</p>
            </div>
          </div>
          <div className='box'>
            <img src={gracias} />
            <div className='box-text'>
              <p>Especial agradecimiento a Raquel, Álvaro, Gema y Tobal.</p>
              <p>Esta aplicación estará en continua mejora y progresivamente se irán añadiendo nuevos ejercicios y funcionalidades. Si eres un profesional del sector de la Educación y tienes cualquier duda o sugerencia, puedes contactar conmigo a través de mi email <a href='mailto:info@training-tea.es'>info@training-tea.es</a></p>
              <small>*Los pictogramas utilizados son parte del material que comparte el Centro Aragonés para la Comunicación Aumentativa y Alternativa (ARASAAC). Los iconos utilizados como foto de perfil de los alumnos, han sido creados por @macrovector y se pueden encontrar de manera gratuita en la web freepik.</small>
            </div>
          </div>  
      </section>
    </>
  )
}
