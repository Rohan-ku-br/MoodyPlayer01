require('dotenv').config();
const app = require('./src/app')
const Connectdb = require('./src/db/db')

Connectdb();


app.listen(3000, () => {
    console.log('Server is start on port no. is 3000');
})  