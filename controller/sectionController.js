const Course = require("../models/courseModel.js")
const Section = require("../models/sectionModel.js");

class CourseController {
    constructor() {}

    create = async(req, res) => {
        try {
            const { courseId, sectionName, sectionNumber, sectionDetails } = req.body;
            const section = await Section.create({
                courseId,
                sectionName,
                sectionNumber,
                sectionDetails,
            });
            res.status(200).json({ status: true });
        } catch (error) {
            res.status(400).json({ status: false });
        }
    };
    update = async(req, res) => {
        try {
            const _id = req.body.sectionId;
            const { courseId, sectionNumber, sectionDetails, sectionName } = req.body;
            const section = await Section.findAndUpdate({ courseId, _id }, {
                sectionName,
                sectionNumber,
                sectionDetails,
            });
            res.status(200).json({ status: true });
        } catch (error) {
            res.status(400).json({ status: false });
        }
    };
    delete = async(req, res) => {
        try {
            const _id = req.body.sectionId;
            const { courseId } = req.body;
            const section = await Section.findAndDelete({ courseId, _id })
            if (!section) {
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
            const course = await Section.find({ courseId: course_id });

            if (!course) {
                return res.status(404).json({ status: false });
            }

            res.status(200).json({ status: true, course });
        } catch (error) {
            res.status(400).json({ status: false });
        }
    };
}

module.exports = CourseController