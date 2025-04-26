const File = require('../models/File');
const cloudinary = require('cloudinary').v2;

const videoUpload = async ( req , res) => {
    function checkFileFormetSupport(file , supportedTypes) {
        return supportedTypes.includes(file)
    }

    async function uploadVideoToCloudinary(file , folder) {
        try{
            const options = {
                folder,
                resource_type: "video"
            };
            console.log(file.tempFilePath)
            return await cloudinary.uploader.upload(file.tempFilePath , options);
        }catch(error) {
            console.log(error.message)
        }
    }

    try {
        //  FETCH DATA  
        const { name , tags , email } = req.body;
        const file = req.files.videoFile;

        //  VALIDATION
        const support = ['mp4' , 'avi', 'mov', 'flv', 'webm'];
        const type = `${file.name.split('.')[1].toLowerCase()}`;
        console.log("File type: ", type)
        const isSupported = checkFileFormetSupport(type , support);

        if(!isSupported) {
            return res.status(400).json({
                success: false,
                message: "video file format/type is not supportable"
            })    
        }

        // UPLOAD ON CLOUDINARY
        const response = await uploadVideoToCloudinary(file , 'Cloudinary_11');
        console.log(response)
        // DATABASE EXTRY
        const fileData = await File.create({
            name,
            tags,
            email,
            videoUrl: response.secure_url
        })
        res.status(200).json({
            success: true,
            message: "Successfully upload video on cloudinary",
            response: fileData
        })

    }catch(error) {
        console.log(error.message);
        res.status(400).json({
            success: false,
            message: "Filed to upload the video on Cloudinary"
        })
    }
}

module.exports = videoUpload