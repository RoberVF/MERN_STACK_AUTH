// Configuracion del codigo de express

import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { FRONTEND_URL } from './config.js'

const app = express()



app.use(cors({
    // origin: FRONTEND_URL,
    AcceseControlAllowOrigin: '*',
    origin: 'https://task-manager-frontend-r9ow.onrender.com',
    credentials: true,
    methods: 'GET,POST,PUT,DELETE'
})) //Permitir que las peticiones del frontend, que estan en otro dominio, se puedan comunicar con el backend




app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

app.use("/api", authRoutes)
app.use("/api", taskRoutes)

export default app
