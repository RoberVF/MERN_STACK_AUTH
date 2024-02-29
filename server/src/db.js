// Base de datos

import mongoose from 'mongoose'
import {DB_NAME, DB_USER, DB_PASS} from './config.js'

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@${DB_NAME}/`)
        // If you are runnning it for practice in local, use mongodb://0.0.0.0:27017 to release the connection with the database
        console.log("> ATLAS DATABASE IS CONNECTED")
    } catch (e) {
        console.log(e)
    }
}