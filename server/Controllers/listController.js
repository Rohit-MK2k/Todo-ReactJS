const listDB = require('../Model/Todo')
const asyncHandler = require('express-async-handler')



// @desc   write data to TODO list database
// @route  POST / api / Todo
// @access Private
const newItem = asyncHandler(async(req, res) => {
    if (req.user) {
        let { task, comment, startTime, endTime } = req.body
        if (!task) {
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
        console.log("hi")
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
        res.status(201).json(list)
    }else{
        res.status(401)
        throw new Error("Please login first or create a account")
    }
}) 

// @desc   write data to TODO list database
// @route  GET / api / Todo / deleteOne
// @access Private
const deleteItem = asyncHandler(async(req, res)=>{
    if(req.user){
        let { id } = req.body
        console.log(id)
        del = await listDB.findByIdAndDelete({_id: id})
        if(del){
            res.status(201).json({message: 'Succesfully Deletes'})
        }else{
            res.status(400)
            throw new Error('Unsuccesfully Deletes')
        }
    }else{
        res.status(401)
        throw new Error("Please login first or create a account")
    }
})

// @desc   Update the status of TODO
// @route  GET / api / Todo / status
// @access Private
const changeStatus = asyncHandler(async (req, res) =>{
    if(req.user){
        const {id, status} = req.body
        const filter = { _id: id }
        const update = { status: status}
        const newStatus = await listDB.findOneAndUpdate(filter, update)
        if (newStatus){
            res.status(201).json({message: "Sucessfully updated the Status"})
        }else{
            res.status(400)
            throw new Error('unsucessful to updated the Status')
        }
    }else{
        res.status(401)
        throw new Error("Please login first or create a account")
    }
})

// @desc   Update the status of TODO
// @route  GET / api / Todo / status
// @access Private
const updateTodo = asyncHandler(async (req, res) =>{
    if(req.user){
        const filter = { _id: req.body.id }
        const update = { 
            task: req.body.task,
            comment: req.body.comment,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            status: 'onGoing'
        }
        const newTodo = await listDB.findOneAndUpdate(filter, update)
        if(newTodo){
            res.status(201).json({message: 'Update Sucessful'})
        }else{
            res.status(400)
            throw new Error('Update not Sucessful')
        }
    }else{
        res.status(401)
        throw new Error("Please login first or create a account")
    }
})


module.exports = {newItem, getAllItems, deleteItem, changeStatus, updateTodo}