const express = require('express')
const router = express.Router()

const UserController = require("../controller/userController")
const userController = new UserController()

router.get('/login', userController.loginForm)
router.get("/register", userController.registerForm);

router.post('/login', userController.login)
router.post("/register", userController.register);

module.exports = router