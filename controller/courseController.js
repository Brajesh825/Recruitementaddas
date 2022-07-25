const Course = require("../models/courseModel.js")
const Video = require("../models/videoModel")

class CourseController {
    constructor() {}

    home = async(req, res) => {
        try {
            res.render("course", { courseId: "629524554bd85a5b07e0991d" });
        } catch (error) {
            res.status(400).redirect("/");
        }
    };

    videoPage = async(req, res) => {
        try {
            const { courseId, sectionId, videoNumber } = req.params
            const video = await Video.findOne({ courseId, sectionId, videoNumber })

            let source =
                video.src + "?h=" + video.h;

            res.render("course-video", { source });
        } catch (error) {
            console.log(error.message);
            res.status(200).send()
        }
    };

    create = async(req, res) => {
        try {
            const { courseName, courseDetails } = req.body;
            const course = await Course.create({
                courseName,
                courseDetails,
            });
            res.status(200).json({ status: true });
        } catch (error) {
            res.status(400).json({ status: false });
        }
    };
    update = async(req, res) => {
        try {
            const { courseName, courseDetails, courseId } = req.body;
            console.log("hello World");
            const course = await Course.findByIdAndUpdate(courseId, {
                courseName,
                courseDetails,
            });
            res.status(200).json({ status: true });
        } catch (error) {
            res.status(400).json({ status: false });
        }
    };
    delete = async(req, res) => {
        try {
            const { courseId } = req.body;
            const course = await Course.findByIdAndDelete(courseId);
            if (!course) {
                return res.status(404).json({ status: false });
            }
            res.status(200).json({ status: true });
        } catch (error) {
            res.status(400).json({ status: false });
        }
    };
    getCourseDetails = async(req, res) => {
        try {
            const { course_id } = req.params;
            const course = await Course.findById(course);
            res.status(200).json({ status: true, Course });
        } catch (error) {
            res.status(400).json({ status: false });
        }
    };
    getAllCourse = async(req, res) => {
        try {
            const course = await Course.find({});
            res.status(200).json({ status: true, course });
        } catch (error) {
            res.status(400).json({ status: false });
        }
    };
}

module.exports = CourseController