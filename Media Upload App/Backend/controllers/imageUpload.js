const Model = require('../models/MediaModel.model')
const imageUpload = async (req , res) => {
    try{   
        const { name , tag , email , file} = req.body;
        
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