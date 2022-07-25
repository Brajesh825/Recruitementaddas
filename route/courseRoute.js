const express = require('express')
const router = express.Router()

const CourseController = require("../controller/courseController")
const { authenticateUser, authorizePermissions } = require('../middleware/authentication')
const courseController = new CourseController()

// Course Home Page
router.get('/', authenticateUser, courseController.home)

// Create Course
router.post("/", authenticateUser, authorizePermissions('admin'), courseController.create);

// Update Course
router.patch(
    "/update",
    authenticateUser,
    authorizePermissions("admin"),
    courseController.update
);

// Delete Course
router.delete(
    "/delete",
    authenticateUser,
    authorizePermissions("admin"),
    courseController.delete
);

// Get Course details
router.get(
    "/details/:course_id",
    authenticateUser,
    courseController.getCourseDetails
);

// Get All Course
router.get(
    "/all",
    authenticateUser,
    courseController.getAllCourse
);

// Video Page
router.get("/:courseId/:sectionId/:videoNumber", authenticateUser, courseController.videoPage);

module.exports = router