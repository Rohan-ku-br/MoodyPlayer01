const express = require('express')
const { registerController, loginController } = require('../controllers/auth.controller')

const authRouter = express.Router()

authRouter.post('/signin', registerController)

authRouter.post('/login', loginController)


module.exports = authRouter