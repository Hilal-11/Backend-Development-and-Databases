const Model = require('../models/MediaModel.model')
const cloudinary = require('cloudinary')
const imageUpload = async (req , res) => {

    function isSupportedType(type , supportedTypes) {
        return supportedTypes.includes(type)
    }
    async function uplodaFileToCloudinary(file , folder) {
        return await cloudinary.uploader.upload(file.tempFilePath , {
            folder: folder,
            resource_type: "auto"
        })
    } 

    try{   
        const { name , tag , email , fileUrl } = req.body;
        const file = req.files.imageFile
        console.log(file)
        
        // VALIDATION
        const supportedTypes = ['jpg', 'png', 'jpeg', 'webg']
        const fileType = file.name.split('.')[1].toLowerCase()

        const isSupported = isSupportedType(fileType , supportedTypes)
        if(!isSupported) {
            return res.status(401).json({
                success: false,
                message: "File type not supported"
            })
        }
        // Upload on Cloudinary

        const response = await uplodaFileToCloudinary(file , 'Cloudinary_11')
        console.log(response)
        // db entry
        const fileData = await Model.create({
            name,
            tag,
            email,
            fileUrl: response.secure_url
        })
        
        res.status(201).json({
            success: true,
            message: "successfully upload on cloudinary and save entry on DB"
        })


    }catch(error) {
        console.log(error.message)
        res.status(400).json({
            success: false,
            error: error.message,
            message: "failed to upload image on clouddinary",
        })
    }
}

module.exports = imageUpload