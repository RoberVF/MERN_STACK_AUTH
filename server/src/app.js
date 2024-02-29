// Configuracion del codigo de express

import express from 'express'
import morgan from 'morgan'
import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express()



app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
})) //Permitir que las peticiones del frontend, que estan en otro dominio, se puedan comunicar con el backend

app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use("/api", authRoutes)
app.use("/api", taskRoutes)

export default app
