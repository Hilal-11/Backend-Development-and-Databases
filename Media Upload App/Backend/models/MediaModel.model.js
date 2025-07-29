const mongoose = require('mongoose');
const nodemailer = require('nodemailer')
require('dotenv').config()
const MediaModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fileUrl: {
        type: String,
        required: true,
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
} , { timestamps : true})


// POST MIDDLEWARE
MediaModel.post("save" , async function(docs) {
    try{
        console.log(docs)
        // transpoter using nodemailer
        let transpoter = nodemailer.transpoter({
            host: process.env.MAIL_HOST,
            port: 587,
            auth : {
                user: process.env.MAIL_USER,
                password: process.env.MAIL_PASSWORD
            },
            secure: false,
            tls: {
                rejectUnauthorized: false, // <-- allow self-signed certificates
            }
            
        })
        // IIFE ---> Immediate Invoked function execution....after upload medai on cloud [Cloudinary]    
        
         const info = await transpoter.sendMail({
            from: "Hilal-11 Media Upload",
            to: info.email,
            subject: `Hello ${info.name} How are, welcome to the Hilal-11 Media Upload Application`,
            text: "welcome to the Hilal-11 Media Upload Application",
            html: "<b>Hi there and welcome in the Media Upload on CDN Software AApplication</b>"
        })
        console.log(info)

    }catch(error){
        console.log(error.message);
        console.log("Failed to send the mail using nodemailer")
        return resizeBy.json({
            success: false,
        })
    }
})

export const Media = mongoose.model("Media" , MediaModel);
