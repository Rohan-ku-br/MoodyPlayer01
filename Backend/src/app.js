const express = require("express");
const songRoutes = require('./routes/song.routes')
const cors = require('cors');
const authRouter = require("./routes/auth.routers");

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', songRoutes)
app.use('/', authRouter)



module.exports = app;