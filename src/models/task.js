const mongoose = require('mongoose')
const validator = require('validator')
const user = require('./user')

const taskSchema = mongoose.Schema({
    description:{
        type: String,
        required: true,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{
    timestamp: true
})
const Task = mongoose.model('Task', taskSchema)


module.exports = Task