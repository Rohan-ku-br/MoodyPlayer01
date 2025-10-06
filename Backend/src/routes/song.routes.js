const express = require('express');
const multer = require('multer');
const uploadFile = require('../service/storage.service');
const songModel = require('../models/song.model');

const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });
router.post('/songs', upload.single("audio"), async (req, res) => {

    console.log(req.body)
    console.log(req.file);
    const fileData = await uploadFile(req.file);

    const song = await songModel.create({
        title: req.body.title,
        artist: req.body.artist,
        audio: fileData.url,
        mood: req.body.mood,
        image: fileData.url,
        type: req.body.type
    })
    res.status(201).json({
        message: " song created successfully",
        song: song
    })
})

router.get('/songs', async (req, res) => {

    const { mood, type } = req.query;

    const filter = {}
    if (mood) filter.mood = mood;
    if (type) filter.type = type;

    const songs = await songModel.find(filter)

    res.status(200).json({
        message: "songs fatched successfully",
        songs
    })
})

router.get('/cards', async (req, res) => {
    const titles = await songModel.find(); // get all songs
    res.status(200).json({
        message: "Songs Title fetch successfully...",
        titles,
    });
});


module.exports = router;