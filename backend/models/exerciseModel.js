const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    username: {type: String, required: false},
    description: {type: String, required: true },
    duration: {type: String, required: true },
    date: {type: String, required: true}
}, {timestamps: true})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise

