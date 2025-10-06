const userModel = require("../models/auth.model");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

// ======================== REGISTER CONTROLLER ========================
async function registerController(req, res) {
  try {
    const { userName, email, password } = req.body;

    // check if email already exists
    const isUserRegister = await userModel.findOne({ email });
    if (isUserRegister) {
      return res.status(409).json({ message: "User already exists..." });
    }

    // hash password
    const hash = await bcryptjs.hash(password, 10);

    // create new user
    const user = await userModel.create({ userName, email, password: hash });

    // generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // send token + response
    res.cookie("token", token, { httpOnly: true });
    res.status(201).json({
      message: "User registered successfully...",
      token,
    });
  } catch (err) {
    console.log("Register error:", err.message);
    res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
}

// ======================== LOGIN CONTROLLER ========================
async function loginController(req, res) {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found..." });
    }

    // verify password
    const isPassword = await bcryptjs.compare(password, user.password);
    if (!isPassword) {
      return res.status(409).json({ message: "Invalid Password" });
    }

    // create JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // set cookie and send response
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({
      message: "Login successfully...",
      token,
    });
  } catch (err) {
    console.log("Login error:", err.message);
    res.status(500).json({
      message: "Internal server error...",
      error: err.message,
    });
  }
}

module.exports = {
  registerController,
  loginController,
};
