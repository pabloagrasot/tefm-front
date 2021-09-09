import axios from 'axios'

interface IEjercicios {
  _id: string,
  exName: string,
  dificulty:string,
  time:string,
  observations:string,
}

const URI = '/test'

const ejercicios: IEjercicios[] = [
  {
    "_id": "60e1a303dbc02550b03449bc",
    "exName": "Jugar",
    "dificulty": "facil",
    "time": "1min",
    "observations": "bien",
  },
  {
    "_id": "60e1a387235af252117bf927",
    "exName": "saltar",
    "dificulty": "facil",
    "time": "2min",
    "observations": "bien"
    }
  ]

  export const mockApi = async () => {
    const { data } = await axios.get<IEjercicios>(URI)
  }

  