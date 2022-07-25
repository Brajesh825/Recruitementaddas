const express = require('express')
const router = express.Router()

const SectionController = require("../controller/sectionController")
const { authenticateUser, authorizePermissions } = require('../middleware/authentication')
const sectionController = new SectionController()

// Add Section
router.post("/", authenticateUser, authorizePermissions('admin'), sectionController.create);

// Update Section
router.patch(
    "/update",
    authenticateUser,
    authorizePermissions("admin"),
    sectionController.update
);

// Delete Section
router.delete(
    "/delete",
    authenticateUser,
    authorizePermissions("admin"),
    sectionController.delete
);

// Get Section details
router.get(
    "/details/:course_id",
    authenticateUser,
    sectionController.getCourseDetails
);

module.exports = router