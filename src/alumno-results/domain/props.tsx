export interface Props{
    className:string
    changeClass: () => void
    alumnoName:string
    reloadStudents: () => void
  }

  export interface PropsNewEx{
    showNewExercise: () => void
    apiGetAlumno:string
  }

  export interface PropsExercises{
    apiGetAlumno:string
  }