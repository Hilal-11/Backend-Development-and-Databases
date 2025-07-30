const Model = require('../models/MediaModel.model')
const cloudinary = require('cloudinary');

const imageReducerUpload = async (req , res) => {
    function isSupportedType(type , supportedTypes) {
        return supportedTypes.includes(type)
    }
    async function imageReducerUploadToCloudinary(file , folder) {
        return await cloudinary.uploader.upload(file.tempFilePath , {
            resource_type: "image",
            transformation: [
                { quality: "auto" , fetch_format: "auto" }
            ]  
        })
    }
    try {
        const  {name, tag , email , imageUrl } = req.body;
        const file = req.files.imageFile;

        // validation
        const supportedTypes = ['jpg' , 'png' , 'jpeg', 'webp'];
        const fileType = file.name.split('.')[1].toLowerCase();
        const isSupported = isSupportedType(fileType , supportedTypes)

        if(!isSupported) {
            return res.status(401).json({
                success: false,
                message: "File type not supported"
            })
        }


        // upload on cloudinary
        const response = await imageReducerUploadToCloudinary(file , 'Cloudinary_11')

        // entry on database
        const fileData = await Model.create({
            name,
            tag,
            email,
            imageUrl: response.secure_url
        })

        res.status(201).json({
            success: true,
            message: "Successfully upload on cloudinary and entry on database",
            response: fileData
        })

    }catch(error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            error: error.message,
            message: "Failed to upload reduce image file on cloudinary"
        })
    }
}
module.exports = imageReducerUpload