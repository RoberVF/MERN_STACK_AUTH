// Contexto -> Componente que englobara a todos y nos permite compartir los datos en todos los componentes hijos

import { createContext, useState, useContext, useEffect } from 'react'
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth'

import Cookies from 'js-cookie'

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
    const [loading, setLoading] = useState(true)

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (e) {
            console.log(e)
            setErrors(e.response.data)
        }
    }

    const signin = async (user) => {
        try {
            const res = await loginRequest(user)
            setIsAuthenticated(true)
            setUser(res.data)
        } catch (e) {
            console.log(e.response.data)
            setErrors(e.response.data)
            
        }
    }

    const logout = () => {
        Cookies.remove("token")
        setIsAuthenticated(false)
        setUser(null)
    }

    useEffect(() => {
        //Eliminar mensajes de error pasado un tiempo
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => clearTimeout(timer) //Se quita el timer si no se usa
        }
    }, [errors])

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get()

            if (!cookies.token) {
                setIsAuthenticated(false)
                setLoading(false)
                return setUser(null)
            }
            try {
                const res = await verifyTokenRequest(cookies.token)
                if (!res.data) {
                    setIsAuthenticated(false)
                    setLoading(false)    
                    
                    return
                }
                setIsAuthenticated(true)
                setUser(res.data)
                setLoading(false)
            } catch (e) {
                setIsAuthenticated(false)
                setUser(null)
                setLoading(false)
            }

        }
        checkLogin()
    }, [])

    return (
        <AuthContext.Provider 
        value={{ signup, signin, logout, user, isAuthenticated, errors, loading }}>
            {children}
        </AuthContext.Provider>
    )
}