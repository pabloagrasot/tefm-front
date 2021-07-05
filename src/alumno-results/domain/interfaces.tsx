import { string } from "yup/lib/locale"

export interface IStudent {
    alumnoName: string,
    createdAt: string,
    filename: string,
    imagePath: string,
    originalname: string,
    updatedAt: string,
    user: string,
    _id: string
}


export interface IExercise {
    exName:string,
    dificulty:string,
    time:number,
    observations:string,
    updatedAt:string
}

