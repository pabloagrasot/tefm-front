import axios, {AxiosResponse} from 'axios'


export const token = sessionStorage.getItem('token')

export const deleteToken = () => {
    sessionStorage.removeItem('token');
}



export const optionsHeaders = {
    headers: {Authorization: token},
}

export const getUserName = axios.get('http://localhost:3500/user', optionsHeaders)
    .then( (response:AxiosResponse )=> {
        const user = response.data.user.userName
    })
    .catch((err) => {
        if (err && err.response)
        console.log(err.response.message)
      })

