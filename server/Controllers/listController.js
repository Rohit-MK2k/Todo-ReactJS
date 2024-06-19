const listDB = require('../Model/Todo')
const asyncHandler = require('express-async-handler')



// @desc   write data to TODO list database
// @route  POST / api / Todo
// @access Private
const newItem = asyncHandler(async(req, res) => {
    
    if (req.user) {
        let { task, comment, startTime, endTime } = req.body
        if (!task || !endTime) {
            res.status(400)
            throw new Error("Please all the fields")
        }

        // create a new task
        const taskList = await listDB.create({
            userID: req.user._id,
            task,
            comment,
            startTime,
            endTime,
        })

        if (taskList) {
            res.status(201).json(taskList)
            
        } else {
            res.status(400)
            throw new Error("Invalid Input")
        }    
    }
    else{
        throw new Error("Please login first or create a account")
    }


    
})

// @desc   write data to TODO list database
// @route  GET / api / Todo / list
// @access Private
const getAllItems = asyncHandler(async(req, res)=>{
    if(req.user){
        const list = await listDB.find({userID: req.user._id})
        if(list[0]){
            res.status(201).json(list)
        }else{
            res.status(401).json({message: "No task Added to the list"})
        }
    }else{
        throw new Error("Please login first or create a account")
    }
}) 


module.exports = {newItem, getAllItems}