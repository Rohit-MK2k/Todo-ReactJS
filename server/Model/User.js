const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const listDB = require('./Todo')

const userModel = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
},
{
    timestamps: true,
}
)

userModel.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})
userModel.pre('findOneAndUpdate', async function(next){
    if(!this.getUpdate().password){
        next()
    }
    
    const salt = await bcrypt.genSalt(10)
    this._update.password = await bcrypt.hash(this._update.password, salt)
})

userModel.pre('remove', async function(next){
    try {
        await Todo.deleteMany({ userId: this._id });
        next();
    }catch (err) {
        next(err);
    }
})

userModel.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User',userModel)