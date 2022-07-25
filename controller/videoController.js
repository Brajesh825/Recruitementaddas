const Course = require("../models/courseModel.js")
const Section = require("../models/sectionModel.js");
const Video = require("../models/videoModel.js");
class CourseController {
    constructor() {}
    create = async(req, res) => {
        try {
            const { courseId, sectionId, videoTitle, videoNumber, src, h } = req.body;
            const video = await Video.create({
                courseId,
                sectionId,
                videoTitle,
                videoNumber,
                src,
                h,
            });
            res.status(200).json({ status: true });
        } catch (error) {
            res.status(400).json({ status: false });
        }
    };

    get = async(req, res) => {
        try {
            const query = req.query
            let video = await Video.find(query).populate("sectionId");

            let videos = []
            video.forEach(element => {
                let newElement = {};
                newElement._id = element._id;
                newElement.courseId = element.courseId;
                newElement.sectionNumber = element.sectionId.sectionNumber
                newElement.sectionName = element.sectionId.sectionName
                newElement.sectionDetails = element.sectionId.sectionDetails
                newElement.sectionId = element.sectionId._id
                newElement.videoTitle = element.videoTitle;
                newElement.videoNumber = element.videoNumber;
                newElement.src = element.src;
                newElement.h = element.h;

                videos.push(newElement)
            });

            res.status(200).json({ status: true, videos });
        } catch (error) {
            console.log(error.message);
            res.status(400).json({ status: false });
        }
    };
}

module.exports = CourseController