const asyncHandler = require('express-async-handler')
const userModel = require('../Model/User')
const generateToken = require('../Utils/generateToken')
const { compare } = require('bcrypt')

// @desc   write data to TODO list database
// @route  POST / api / user
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    let {name, email, password } = req.body

    if (!email || !password) {
        res.status(400)
        throw new Error("Please enter email address and password!")
    }
    
    const userExists = await userModel.findOne({email})

    // check user's email exists
    if (userExists) {
        res.status(400)
        throw new Error("Email already exists!")
    }
    
    // create new user
    const user = await userModel.create({
        name,
        email,
        password
    })

    if (user) {
        generateToken(res, user._id)
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }
    else {
        res.status(400)
        throw new Error("Invalid Inputs")
    }
})


// @desc   write data to TODO list database
// @route  POST / api / user / login
// @access Public
const loginUser = asyncHandler(async (req, res) => {    
    let {email, password} = req.body

    user = await userModel.findOne({ email })
    console.log(user)
    comparePassword = await user.matchPassword(password)

    if (user && comparePassword) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }
    else {
        res.status(401)
        throw new Error("Invalid Credentials")
    }
    
})

const getUser = asyncHandler(async (res, req) => {
    
})




module.exports = { registerUser, loginUser, getUser }