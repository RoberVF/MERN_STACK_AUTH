import jwt from 'jsonwebtoken'

import { TOKEN_SECRET } from "../config.js"

export function createAccessToken(payload) {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, 
            TOKEN_SECRET, 
            {
                expiresIn: "1d"
            }, 
            (err, token) => {
                //Callback
                if (err) reject (err)
                // res.json({ token }) //Lo enviamos mediante una cookie para facilitar la lectura en el frontend
                resolve(token)
            }
        )
    })
}