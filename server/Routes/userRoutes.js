const express = require('express')
const { registerUser, loginUser, getUser, logOut } = require('../Controllers/userController.js')
const { protect } = require('../Middlewares/authMiddleware.js')

const router = express.Router()

router.route("/").post(registerUser)
router.route("/login").post(loginUser)
router.route("/profile").get(protect, getUser)
router.route("/logout").post(logOut)

module.exports = router