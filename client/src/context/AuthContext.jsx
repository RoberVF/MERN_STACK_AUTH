// Contexto -> Componente que englobara a todos y nos permite compartir los datos en todos los componentes hijos

import { createContext, useState, useContext, useEffect } from 'react'
import { registerRequest, loginRequest } from '../api/auth'


export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used witgin an AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        }catch(e){
            console.log(e)
            setErrors(e.response.data)
        }
    }

    const signin = async (user) => {
        try{
            const res= await loginRequest(user)
            console.log(res)
        } catch(e){
            if(Array.isArray(e.response.data)){
                return setErrors(e.response.data)
            }
            setErrors(e.response.data.message)
        }
    }

    useEffect(() => {
    //Eliminar mensajes de error pasado un tiempo
        if(errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer) //Se quita el timer si no se usa
        }
    }, [errors])


    return (
        <AuthContext.Provider value={{ signup, signin, user, isAuthenticated, errors }}>
            {children}
        </AuthContext.Provider>
    )
}