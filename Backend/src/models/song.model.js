const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    audio: String,
    mood: String,
    image: String,
    type:String,

})

const song = mongoose.model('song', songSchema)


module.exports = song 