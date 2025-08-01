const Media = require('../models/MediaModel.model')
const getMediaUpoadCloudinaryData = async (req , res) => {
    try {
        const response = await Media.find({})
        return res.status(200).json({
            success: true,
            message: "Get all data from Database successfully",
            data: response
        })
    }catch(error) {
        console.log(error.message);
        return res.status().json({
            succes: false,
            error: error.message,
            message: "Failed to get the data from Database"
        })
    }
}
module.exports = getMediaUpoadCloudinaryData