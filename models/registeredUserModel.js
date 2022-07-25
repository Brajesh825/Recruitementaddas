const mongoose = require('mongoose')

const registeredUser = new mongoose.Schema({
    courseId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("RegisteredUser", registeredUser);