const File = require('../models/File')
const cloudinary = require('cloudinary').v2
const imageUpload = async ( req , res) => {

    function checkSupportedType(type , supportedType){
        return supportedType.includes(type)
    }

    async function fileUploadToCloudinary(file , folder) {
        const options = {folder}
        return await cloudinary.uploader.upload(file.tempFile , options).then(() => {
            console.log("File upload on cloudinary successfully")
        })
    }
    try {
        // FETCH THE DATA
        const { name , tags , email } = req.body;
        const file = req.files.imageFile;
        console.log(file);

        // VALIDATION

        const supportedType = ['jpg', 'jpeg' , 'png'];
        const type = `.${file.name.split('.')[1].toLowerCase}`;

        isSupported = checkSupportedType(type, supportedType);

        if(!isSupported) {
            return res.status(400).json({
                success: false,
                message: "File type is not suppor"
            })
        }

        // UPLOAD ON CLOUDINARY
        const response = fileUploadToCloudinary(file , 'Cloudinary_11')
        console.log(response)
        // SAVE ENTRY ON DATABASE(mongoDb)
        // const fileData = await File.create({
        //     name,
        //     tags,
        //     email,
        //     imageUrl
        // })

        res.status(200).json({
            success: true,
            message: "Image successfully uploaded"
        })

    }catch(error) {
        console.log(error.message);
        res.status(400).json({
            success: false,
            message: "Failed to upload image on Cloudinary"
        })
    }
}

module.exports = imageUpload