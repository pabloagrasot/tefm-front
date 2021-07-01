import axios from 'axios'


export const token = localStorage.getItem('token')

export const optionsHeaders = {
    headers: {Authorization: token},
}

export const getUserName = axios.get('http://localhost:3500/user', optionsHeaders)
    .then( response => {
        const user = response.data.user.userName
    })
    .catch((err) => {
        if (err && err.response)
        console.log(err.response.message)
      })

