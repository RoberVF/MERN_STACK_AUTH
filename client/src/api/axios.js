import axios from 'axios'

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"

/*const instance = axios.create({
    baseURL: `${URL}/api`,
    withCredentials: true
})*/
const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true
})

export default instance