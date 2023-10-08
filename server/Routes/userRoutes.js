const express = require('express')
const { registerUser, loginUser, getUser } = require('../Controllers/userController.js')

const router = express.Router()

router.route("/").post(registerUser)
router.route("/login").post(loginUser)
router.route("/user").get(getUser)

module.exports = router