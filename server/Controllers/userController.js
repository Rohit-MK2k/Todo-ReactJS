const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const userModel = require('../Model/User')

// @desc   write data to TODO list database
// @route  POST / api / user
// @access Private
const registerUser = asyncHandler(async (req, res) => {
    let {name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please enter all the credentials!")
    }
    
    const userExists = await userModel.findOne({email})

    // check user's email exists
    if (userExists) {
        res.status(400)
        throw new Error("Email already exists!")
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)  
    
    // create new user
    const user = await userModel.create({
        name,
        email,
        password: hashPassword
    })

    if (user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
        })
    }
    else {
        res.status(400)
        throw new Error("Invalid Inputs")
    }
})


// @desc   write data to TODO list database
// @route  POST / api / user / login
// @access Private
const loginUser = asyncHandler(async (req, res) => {    
    let {email, password} = req.body

    user = await userModel.findOne({ email })
    cheackPassword = await bcrypt.compare(password, user.password)
    
    if (user && cheackPassword) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
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