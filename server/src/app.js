// Configuracion del codigo de express

import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

import { FRONTEND_URL } from './config.js'

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

//CORS
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions)) //Permitir que las peticiones del frontend, que estan en otro dominio, se puedan comunicar con el backend
app.options("*", cors(corsOptions))

app.use("/api", authRoutes)
app.use("/api", taskRoutes)

export default app
