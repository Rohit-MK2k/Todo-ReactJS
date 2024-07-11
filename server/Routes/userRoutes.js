const express = require('express')
const { registerUser, loginUser, getUser, logOut, changePassword, deleteAcc } = require('../Controllers/userController.js')
const { protect } = require('../Middlewares/authMiddleware.js')

const router = express.Router()

router.route("/").post(registerUser)
router.route("/login").post(loginUser)
router.route("/profile").get(protect, getUser).post(protect, changePassword)
router.route("/logout").post(logOut)
router.post('/delete',deleteAcc)

module.exports = router