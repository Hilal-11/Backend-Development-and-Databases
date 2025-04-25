const mongoose = require('mongoose')

const mediaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl : {
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
module.exports = mongoose.model('Media_Model' , mediaSchema)