// Codigo que se ejecuta antes que se llegue a la ruta

import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

export const authRequired= (req, res, next) => {
    // Middleware que protege la ruta indicada en el auth.routes.js
    const {token} = req.cookies

    if(!token) return res.status(401).json({message: "No token. Autorizacion denegada"})

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if(err) return res.status(401).json({message: "Invalid Token"})
        
        req.user = user

        next()
    })

}