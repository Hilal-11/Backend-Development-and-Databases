const mongoose = require('mongoose');

const MediaModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tag : {
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    file: {
        type: String,
        required : true
    }
} , { timestamps : true})


export const Media = mongoose.model("Media" , MediaModel);
