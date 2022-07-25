const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: [true, "Please provide course name"],
    },
    courseDetails: {
        type: String
    }
});

module.exports = mongoose.model("Course", courseSchema);