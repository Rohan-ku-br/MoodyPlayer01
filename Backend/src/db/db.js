const mongoose = require('mongoose');


function Connectdb(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log('connected to mongodb');
        
    })
    .catch(
        (err)=>{
            console.log('error do not connect the mongodb', err);
            
        }    )
}

module.exports = Connectdb