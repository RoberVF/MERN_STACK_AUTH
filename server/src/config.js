// Configuraciones que el resto de archivos va a poder importar

import dotenv from 'dotenv'
dotenv.config()

export const TOKEN_SECRET = process.env.TOKEN_SECRET || "some secret key"
export const DB_NAME = process.env.DB_NAME || ""
export const DB_USER = process.env.DB_USER || "127.0.0.0"
export const DB_PASS = process.env.DB_PASS || "27017"

export const PORT = process.env.PORT || 3000

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173"