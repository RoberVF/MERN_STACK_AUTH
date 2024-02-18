// Contexto -> Componente que englobara a todos y nos permite compartir los datos en todos los componentes hijos

import { createContext, useState, useContext } from 'react'
import { registerRequest } from '../api/auth'


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

    const signup = async (user) => {
        try {
            const res = await registerRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        }catch(e){
            console.log(e)
        }
    }

    return (
        <AuthContext.Provider value={{ signup, user, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}