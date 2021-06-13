import { FC, useEffect, useState, ChangeEvent, lazy, Suspense} from 'react'
import bici from '../img/bici.gif'
import correr from '../img/correr.gif'
import biciPng from '../img/bici.png'
import correrPng from '../img/correr.png'
import deporte from '../img/deporte.png'
import noDeporte from '../img/no-deporte.png'
import './ejercicios.css';




export const Ejercicios: FC = () => {

  const circleConfig = {
    viewBox: '0 0 38 38',
    x: '19',
    y: '19',
    radio: '15.91549430918954'
  };

  const [timerOn, setTimerOn] = useState(false)
  const [seconds, setSeconds] = useState(30);
  const [watch, setWatch] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [pointer, setPointer] = useState(true)
  const [gif, setGif] = useState(deporte)
  const [exercise , setExercise] = useState ('')
  //const [EndExercise , setEndExercise] = useState<React.LazyExoticComponent<FC>>()


  const selectSeconds = (e: ChangeEvent<any>) => {
    let secondsSelected = e.target.value
    setSeconds(secondsSelected)
    setWatch(100/secondsSelected)
  }

  const selectExercise = (e: ChangeEvent<any>) => {
    const exerciseSelected = e.target.value
    if(exerciseSelected === "run"){
      setExercise(correr)
      setGif(correrPng)
    } else {
      setExercise(bici)
      setGif(biciPng)
    }
  }

  useEffect(() => {
    let interval:any
    if (timerOn && seconds > 0){
      interval = setInterval(() => {
        setSeconds( seconds => seconds - 1);
        setPercentage(percentage + watch)
        setGif(exercise)
        setPointer(false)
      }, 1000)
    }else if (seconds === 0){
      clearInterval(interval)
      setGif(noDeporte)
      
    }
    return () => clearInterval(interval)
  }, [timerOn, percentage, seconds, watch, exercise])

  
  const End = lazy (
  () => import ('../ejercicio-terminado/ejercicio-terminado')
 )

  return (
    <>
      <h1>Ejercicios</h1>

      <section className="exercise">
        <div>
          <figure>
            <svg viewBox={circleConfig.viewBox} className="circle">
              <circle
                className="ring"
                cx={circleConfig.x}
                cy={circleConfig.y}
                r={circleConfig.radio}
                fill="transparent"
                stroke="gray"
                strokeDasharray="100"
                strokeDashoffset="100"
                stroke-width="6"
              />

              <circle
                className="path"
                cx={circleConfig.x}
                cy={circleConfig.y}
                r={circleConfig.radio}
                fill="transparent"
                stroke="#1a83ff"
                strokeDasharray="100"
                strokeDashoffset={percentage}
                stroke-width="6"
              />
              <g className="circle-label">
                <text x="50%" y="50%" className="circle-percentage">
                  {seconds}
                </text>
              </g>
            </svg>
          </figure>

          <div className="exercise__configuration">
            <select
              name="seconds"
              id="seconds"
              className={`${pointer ? "pointer" : "pointer none"} exercises__options`}
              required
              onChange={selectSeconds}
            >
              <option className="seconds__option">Duración</option>
              <option value="30">30 segundos</option>
              <option value="60">1 minuto</option>
              <option value="90">1.5 minutos</option>
              <option value="120">2 minutos</option>
              <option value="150">2.5 minutos</option>
              <option value="180">3 minutos</option>
              <option value="300">5 minutos</option>
            </select>

            <select name="intensity" id="intensity" required className={`${pointer ? "pointer" : "pointer none"} exercises__options`}>
              <option className="seconds__option">Intensidad</option>
              <option value="low">Baja</option>
              <option value="mid">Media</option>
              <option value="high">Alta</option>
            </select>

            <select
              name="exercise"
              id="exercise"
              required
              className={`${pointer ? "pointer" : "pointer none"} exercises__options`}
              onChange={(e) => selectExercise(e)}
            >
              <option className="seconds__option">Ejercicio</option>
              <option value="run">Correr</option>
              <option value="bike">Montar en Bici</option>
            </select>

            <button onClick={() => setTimerOn(true)} className={"primary-button"} >Empezar</button>
          </div>
        </div>

        <div>
          <img src={gif} alt="" className="exercise-gif" />
        </div>
      </section>
      <Suspense fallback={null}>
      {(seconds === 0) && <End />}
      </Suspense>
    </>
  );
}