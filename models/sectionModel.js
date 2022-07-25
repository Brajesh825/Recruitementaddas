const mongoose = require('mongoose')

const sectionSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: [true, "Please provide course name"],
    },
    sectionName: {
        type: String,
        required: [true, "Please provide course name"],
    },
    sectionNumber: {
        type: Number,
        required: [true, "Please provide course name"],
    },
    sectionDetails: {
        type: String,
    },
});

module.exports = mongoose.model("Section", sectionSchema);