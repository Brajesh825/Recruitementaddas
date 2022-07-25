const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json())

app.use(cookieParser());
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"));

require('dotenv').config()
app.get('/', function(req, res) {
    res.render('home-page')
    res.end()
})

const user = require('./route/userRoute')
const course = require('./route/courseRoute')
const admin = require('./route/adminRoute');
const section = require('./route/sectionRoute')
const video = require('./route/videoRoute')

app.use('/user/', user)
app.use("/course/", course);
app.use("/admin/", admin);
app.use("/section/", section);
app.use("/video/", video);

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(4000, console.log(`Server is listening on port ${4000}...`));
    } catch (error) {
        console.log(error);
    }
};
start();