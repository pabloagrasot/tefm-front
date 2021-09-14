import React, { FC, useEffect, useState, ChangeEvent} from 'react'
import bici from '../img/bici.gif'
import correr from '../img/correr.gif'
import cinta from '../img/cinta.gif'
import biciPng from '../img/bici.png'
import correrPng from '../img/correr.png'
import cintaPng from '../img/cinta.png'
import deporte from '../img/deporte.png'
import bajo from '../audio/bajo.mp3'
import medio from '../audio/medio.mp3'
import alto from '../audio/alto.mp3'
import './ejercicios.css';
import { ExerciseSound } from './Sound'
import { ExerciseGif } from './ExerciseGif'
import { ProgressBar } from './ProgressBar'


export const Ejercicios: FC = () => {

  const [timerOn, setTimerOn] = useState(false)
  const propSetTimerOn = () => setTimerOn(true)
  const propSetTimerOff = () => setTimerOn(false)


  const [seconds, setSeconds] = useState(30);
  const [watch, setWatch] = useState(0);

  const [pointer, setPointer] = useState(true)
  const [gif, setGif] = useState('')
  const [exercisePng , setExercisePng] = useState (deporte )
  const [exercise , setExercise] = useState ('')
  const [sound, setSound] = useState ('')


  const selectSeconds = (e: ChangeEvent<any>) => {
    const secondsSelected = e.target.value
    setSeconds(secondsSelected)
    setWatch(100/secondsSelected)
  }

  const selectIntensity = (e: ChangeEvent<any>) => {
    const intensitySelected = e.target.value
    if(intensitySelected === "low"){
      setSound(bajo)
    }if(intensitySelected === "mid"){
      setSound(medio)
    }if(intensitySelected === "high"){
      setSound(alto)
    }
  }

  const selectExercise = (e: ChangeEvent<any>) => {
    const exerciseSelected = e.target.value
    if(exerciseSelected === "run"){
      setExercisePng(correrPng)
      setExercise(correr)
      setGif(correrPng)
    } if(exerciseSelected === "bike") {
      setExercisePng(biciPng)
      setExercise(bici)
      setGif(biciPng)
    } if (exerciseSelected === "treadmill"){
      setExercisePng(cintaPng)
      setExercise(cinta)
      setGif(cintaPng)
    }
  }

 

  useEffect(() => {
   
    if (timerOn){
        setGif(exercise)
        setPointer(false)
    } else{
      setGif(exercisePng)
    }
 
  }, [timerOn, watch, seconds, exercise])

    return (
    <>
      <h1>Ejercicios</h1>

      <section className="exercise">
        <div>
          <ExerciseGif gif={gif}/>

          <ProgressBar secondsSelected={seconds} watch={watch} timerOn={timerOn} propSetTimerOff={propSetTimerOff} />


          <div className="exercise__configuration">
            <select
              name="seconds"
              id="seconds"
              data-testid="seconds-main"
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

            <select name="intensity" id="intensity" data-testid="intensity-main" required className={`${pointer ? "pointer" : "pointer none"} exercises__options`} onChange={(e) => selectIntensity(e)}>
              <option className="seconds__option">Intensidad</option>
              <option value="low">Baja</option>
              <option value="mid">Media</option>
              <option value="high">Alta</option>
            </select>

            <select
              name="exercise"
              id="exercise"
              data-testid="exercise-main"
              required
              className={`${pointer ? "pointer" : "pointer none"} exercises__options`}
              onChange={(e) => selectExercise(e)}
            >
              <option className="seconds__option">Ejercicio</option>
              <option value="run">Correr</option>
              <option value="bike">Montar en Bici</option>
              <option value="treadmill">Correr en Cinta</option>
            </select>

          
            { exercise && <ExerciseSound sound={sound} timerOn={timerOn} propSetTimerOn={propSetTimerOn} propSetTimerOff={propSetTimerOff} />}
            
          </div>

        </div>

       

      </section>
     
    </>
  );
}