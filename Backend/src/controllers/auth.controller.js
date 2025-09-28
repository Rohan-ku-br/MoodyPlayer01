const userModel = require("../models/auth.model")
const jwt = require('jsonwebtoken')
const bcryptjs = require("bcryptjs")

async function registerController(req, res) {
    const { userName, email, password } = req.body

    const isUserRegister = await userModel.findOne({ userName })

    if (isUserRegister) {
        return res.status(409).json({ message: "User already exist..." })
    }

    const hash = await bcryptjs.hash(password, 10)

    const user = await userModel.create({ userName, email, password: hash })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    res.cookie('token', token)

    res.status(201).json({ message: "User register successfully..." })
}

async function loginController(req, res) {
    const { userName, password } = req.body

    const isUser = await userModel.findOne({ userName })

    if (!isUser) {
        return res.status(401).json({ message: "User not found..." })
    }

    const isPassword = await bcryptjs.compare(password, user.password)

    if (!isPassword) {
        return res.status(409).json({ message: "Invalid Password" })
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET)

    res.cookie('token', token)

    res.status(200).json({ message: "Login successfully..." })
}



module.exports = {
    registerController,
    loginController
}