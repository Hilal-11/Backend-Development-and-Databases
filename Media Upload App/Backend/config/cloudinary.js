const cloudinary = require('cloudinary')
const { model } = require('mongoose')
require('dotenv').config()


const cloudinaryConnect = async () => {
    try{   
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET
        })

    }catch(error) {
        console.log(error.message);
        console.log("Failed to connect with Cloudinary CDN")
        process.exit(1)
    }
}

model.exports = cloudinaryConnect