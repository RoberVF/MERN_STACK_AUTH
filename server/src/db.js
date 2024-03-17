// Base de datos

import mongoose from 'mongoose'
import {DB_NAME, DB_USER, DB_PASS} from './config.js'

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_NAME}/`) // <-- Just for production
        // await mongoose.connect("mongodb://0.0.0.0:27017")
        console.log("> DATABASE IS CONNECTED")
    } catch (e) {
        console.log(e)
    }
}