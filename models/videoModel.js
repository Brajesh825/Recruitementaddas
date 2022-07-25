const mongoose = require('mongoose')
const section = require('./sectionModel')

const videoSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: [true, "Please provide course Id"],
    },
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Please provide section name"],
        ref: section
    },

    videoTitle: {
        type: String,
        required: [true, "Please provide video"],
    },
    videoNumber: {
        type: Number,
        required: [true, "Please provide video number"],
    },
    src: {
        type: String,
        required: [true, "Please provide src"],
    },
    h: {
        type: String,
        required: [true, "Please provide h"],
    },
});

module.exports = mongoose.model("video", videoSchema);