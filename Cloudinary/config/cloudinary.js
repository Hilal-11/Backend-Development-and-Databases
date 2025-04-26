const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const cloudinaryConnect = async () => {
    try{
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        })
        console.log("Successfully cennect with Cloudinary database")

    }catch(error) {
        console.log(error.message);
        console.log("Failed to cennect with Cloudinary database")
    }
}

module.exports = cloudinaryConnect; 