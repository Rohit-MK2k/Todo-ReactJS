const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const userModel = require('../Model/User')

const protect = asyncHandler(async (req, res, next) =>{
    let token = req.cookies.jwt

    if(token){
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await userModel.findById(decode.id).select('-password')

            next()
        } catch(error){
            res.status(401)
            throw new Error('Not authorised, Invalid Token')
        }

    }else{
        res.status(401)
        throw new Error('Not authorised, No Token')
    }
})

module.exports = {protect}