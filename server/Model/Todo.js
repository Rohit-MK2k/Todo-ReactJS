const mongoose = require('mongoose')

const todoModel = mongoose.Schema({
    task: {
        type: String,
        require: true,
    },
    comment: {
        type: String,
        default: "No Comment"
    },
    startTime: {
        type: Date,
        default: Date.now,
    },
    endTime: {
        type: Date,
        require: true,
    }
})

module.exports = mongoose.model('Todo',todoModel)