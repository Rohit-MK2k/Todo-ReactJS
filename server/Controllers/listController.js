const express = require('express')
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
    const taskList = await listDB.create({
        task,
        comment,
        startTime,
        endTime,
    })
    res.status(201).json(taskList)
})

module.exports = {newItem}