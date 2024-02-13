// Base de datos

import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017')
        console.log("> DB IS CONNNECTED")
    } catch (e) {
        console.log(e)
    }
}