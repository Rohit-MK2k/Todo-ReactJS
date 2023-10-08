const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const userModel = require('../Model/User')

const registerUser = asyncHandler(async(res, req) => {
    
})

const loginUser = asyncHandler(async (res, req) => {
    
})

const getUser = asyncHandler(async (res, req) => {
    
})


module.exports = { registerUser, loginUser, getUser }