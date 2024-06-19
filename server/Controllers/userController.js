const asyncHandler = require('express-async-handler')
const userModel = require('../Model/User')
const generateToken = require('../Utils/generateToken')

// @desc   Register new user
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


// @desc   Autherise user
// @route  POST / api / user / login
// @access Public
const loginUser = asyncHandler(async (req, res) => {    
    let {email, password} = req.body

    user = await userModel.findOne({ email })

    if (user && (await user.matchPassword(password))) {
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


const logOut = asyncHandler(async (req, res) =>{
    res.cookie('jwt', '',{
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({ message: 'User Logged out'})
})


// @desc   Fetch the user information
// @route  GET / api / user / profile
// @access Private
const getUser = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }
    console.log(req)
    res.status(200).json(user)
})




module.exports = { registerUser, loginUser, getUser, logOut }