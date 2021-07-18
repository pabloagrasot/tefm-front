export interface PropsSound{
    sound:string
    timerOn: boolean
  }

  export interface PropsGif{
    gif:string
  }

  export interface PropsProgressBar{
    secondsSelected: number
    watch:number
    timerOn: boolean
    stopExercise: () =>void 
  }