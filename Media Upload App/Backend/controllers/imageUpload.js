const Model = require('../models/MediaModel.model')
const imageUpload = async (req , res) => {
    try{   
        const { name , tag , email , fileUrl} = req.body;
        const file = req.files.file
        
        const support = ['jpg', 'png', 'jpeg', 'webg']
        const exension = file.split('.')[1]

    }catch(error) {
        console.log(error.message)
        res.status().json({
            success: false,
            error: error.message,
            message: "failed to upload image on clouddinary",
        })
    }
}

module.exports = imageUpload