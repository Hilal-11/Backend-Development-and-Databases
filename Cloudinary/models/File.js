const mongoose = require('mongoose')

const FileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fileUrl : {
        type: String
    },
    tags: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('File' , FileSchema)