//AXIOS -> Biblioteca que engloba fecths
import axios from 'axios'

const API = 'http://localhost:3000/api'

export const registerRequest = async (user) => {

    return await axios.post(`${API}/register`, user)

}
//Se da un usuario y se envia un POST con ese usuario :)