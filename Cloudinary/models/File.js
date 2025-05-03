const mongoose = require('mongoose')
const nodemailer = require('nodemailer');

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


FileSchema.post('save' , async function(doc)  {
    try{
        console.log(doc)

        // Transpoter

        let transpoter = nodemailer.transpoter({
            host: process.env.MAIL_HOST,
            port: '',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        })
    }catch(error){
        console.log(error.message)
    }
})


module.exports = mongoose.model('File' , FileSchema)