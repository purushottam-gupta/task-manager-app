// without middleware - user request -> run route handler
// with middleware - user request -> do something -> run route handler
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')
const express = require('express')
const app = express()

const auth = app.use( async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET) // return id of doc where given token belongs
        console.log(decoded)
        const user = await User.findOne({ _id: decoded._id , 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please Authenticate' })
    }
})
// app.use((req, res, next) => {
//     res.status(500).send('Site is under maintainence, we will be back soon')
// })

module.exports = auth