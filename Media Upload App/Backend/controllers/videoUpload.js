const Model = require('../models/MediaModel.model')
const cloudinary = require('cloudinary')

const videoUpload = async (req , res) => {
    function isSupportedType (type , supportedTypes) {
        return supportedTypes.includes(type)
    }
    async function uploadFileToCloudinary(file , folder) {
        return await cloudinary.uploader.upload(file.tempFilePath , {
            folder,
            resource_type: "auto"
        })
    }
    try{
        const {name , tag , email , fileUrl} = req.body;
        const file = req.files.videoFile;

        // Validation
        const supportTypes = ["mp4"];
        const fileType = file.name.split('.')[1].toLowerCase();
        const isSupported = isSupportedType(fileType , supportTypes)

        if(!isSupported) {
            return res.status(401).json({
                success: false,
                message: "file type not supported"
            })
        }

        // save on Cloudinary
        const response = uploadFileToCloudinary(file , "Solitude");

        // entry on Database
        const fileData = await Model.create({
            name,
            tag,
            email,
            fileUrl: response.secure_url
        })

        return res.status(201).json({
            success: true,
            message: "Successfully upload file on cloudinary and database entry"
        })


    }catch(error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            error: error.message,
            message: "Failed to upload medai on cloudinary"
        })
    }
}

module.exports = videoUpload