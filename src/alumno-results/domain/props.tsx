export interface Props{
    className:string
    changeClass: () => void
    alumnoName:string
    reloadStudents: () => void
  }

  export interface PropsNewEx{
    showNewExercise: () => void
    getAlumno:string
  }

  export interface PropsExercises{
    getAlumno:string
    showNewExercise: () => void
  }

  export interface PropsExerciseDelete{
    exerciseID:string
    getAlumno:string
    reloadExercises: () => void
  }