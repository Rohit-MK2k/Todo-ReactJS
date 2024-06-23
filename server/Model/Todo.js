const mongoose = require('mongoose')

const todoModel = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
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
    },
    status:{
        type: String,
        default: 'onGoing',
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('Todo',todoModel)