const mongoose = require('mongoose')
const nodemailer = require('nodemailer');
require('dotenv').config()
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


FileSchema.post('save' , async function(docs)  {
    try{
        // Transpoter
        let transpoter = nodemailer.transpoter({
            host: 'smtp-relay.brevo.com',
            port: 587,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            secure: false,
            tls: {
                rejectUnauthorized: false, // <-- allow self-signed certificates
            }
        })
        // email send
        let info = await transpoter.sendMail({
            from: 'Webmastery.pro',
            to: docs.email,
            subject: 'Hii there i am Hilal from webMastery.pro',
            text: 'Hello everyone',
            html: '<b>Webmastery.pro</b>'
        });
    }catch(error){
        console.log(error.message)
    }
})


module.exports = mongoose.model('File' , FileSchema)