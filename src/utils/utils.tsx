import axios, {AxiosResponse} from 'axios'




export const token = sessionStorage.getItem('token')

export const deleteToken = () => {
    sessionStorage.removeItem('token');
}
      
export const logOut = () => {
    deleteToken()
    window.location.href ='/'
    }


export const optionsHeaders = {
    headers: {Authorization: token},
}

export const getUserName = axios.get<AxiosResponse<string>>('https://training-tea-back.herokuapp.com/user', optionsHeaders) 
    .then( (response:AxiosResponse )=> {
        const user = response.data.user.userName
        console.log(user)
    })
    .catch((err) => {
        if (err && err.response)
        console.log(err.response.message)
      })
