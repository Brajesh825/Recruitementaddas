const express = require("express");
const router = express.Router();

const AdminController = require("../controller/adminController.js");
const { authenticateUser, authorizePermissions } = require("../middleware/authentication.js");
const adminController = new AdminController();

router.get("/", authenticateUser, authorizePermissions('admin'), adminController.home);

module.exports = router;