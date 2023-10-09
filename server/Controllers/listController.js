const listDB = require('../Model/Todo')
const asyncHandler = require('express-async-handler')



// @desc   write data to TODO list database
// @route  POST / api / Todo
// @access Private
const newItem = asyncHandler(async(req, res) => {
    let { task, comment, startTime, endTime } = req.body
    if (!task || !endTime) {
        res.status(400)
        throw new Error("Please all the fields")
    }

    // create a new task
    const taskList = await listDB.create({
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
})

module.exports = {newItem}