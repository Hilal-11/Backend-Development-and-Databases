const Model = require('../models/MediaModel.model')
const cloudinary = require('cloudinary')

const videoUpload = async (req , res) => {

    function isSupportedType (type , supportedTypes) {
        return supportedTypes.includes(type)
    }
    async function uploadFileToCloudinary(file , folder) {
        try{
            return await cloudinary.uploader.upload(file.tempFilePath , {
                folder,
                resource_type: "auto"
            })
        }catch(error){
            console.log(error.message)
        }
    }
    try{
        const {name , tag , email , fileUrl } = req.body;
        const file = req.files.videoFile;
        console.log(file)

        // Validation
        const supportTypes = ['mp4', 'avi', 'mov', 'flv', 'webm'];
        const fileType = file.name.split('.')[1].toLowerCase();
        console.log(fileType)
        const isSupported = isSupportedType(fileType , supportTypes)

        console.log(isSupported)
        if(!isSupported) {
            return res.status(401).json({
                success: false,
                message: "file type not supported"
            })
        }

        // save on Cloudinary
        const response = await uploadFileToCloudinary(file , 'Cloudinary_11');
        console.log(response)
        // entry on Database
        const fileData = await Model.create({
            name,
            tag,
            email,
            fileUrl: "Hell"
        })

        return res.status(201).json({
            success: true,
            message: "Successfully upload file on cloudinary and database entry",
            response: fileData
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