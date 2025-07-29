const mongoose = require('mongoose');
const nodemailer = require('nodemailer')
require('dotenv').config()
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
    },
    fileUrl: {
        type: String,
        required: true,
    },
} , { timestamps : true})


// POST MIDDLEWARE
MediaModel.post("save" , async function(docs) {
    try{
        console.log("DOCS = ",docs)
        // transpoter using nodemailer
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth : {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS     
            },
            // secure: false,
            // tls: {
            //     rejectUnauthorized: false, // <-- allow self-signed certificates
            // }
            
        })
        // IIFE ---> Immediate Invoked function execution....after upload medai on cloud [Cloudinary]    
        
         let info = await transporter.sendMail({
            from: "Hilal-11 -- Media Upload Application",
            to: docs.email,
            subject: `Hello ${docs.name} How are, welcome to the Hilal-11 Media Upload Application`,
            text: "welcome to the Hilal-11 Media Upload Application",
            html: "<b>Hi there and welcome in the Media Upload on CDN Software AApplication</b>"
        })
        console.log(info)

    }catch(error){
        console.log(error.message);
        console.log("Failed to send the mail using nodemailer")
        
    }
})

module.exports = mongoose.model("Media" , MediaModel);
