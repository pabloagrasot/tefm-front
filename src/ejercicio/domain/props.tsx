export interface PropsSound{
  sound:string
  timerOn: boolean
  propSetTimerOn: () =>void
  propSetTimerOff: () =>void
}

  export interface PropsGif{
    gif:string
  }

  export interface PropsProgressBar{
    secondsSelected: number
    watch:number
    timerOn: boolean
    propSetTimerOff: () =>void 
  }