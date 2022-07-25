const express = require('express')
const router = express.Router()

const VideoController = require("../controller/videoController")
const { authenticateUser, authorizePermissions } = require('../middleware/authentication')
const videoController = new VideoController()

// Add Video
router.post("/add", authenticateUser, authorizePermissions('admin'), videoController.create);

// Get Video
router.get(
    "/",
    authenticateUser,
    authorizePermissions("admin"),
    videoController.get
);

module.exports = router