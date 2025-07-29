const Model = require('../models/MediaModel.model')

const localFileUpload = async (req , res) => {
    try{
        const file = req.files.file;
        console.log(file)

        let path = __dirname+"files/" + Date.now() + `.${file.name.split('.')[1]}`

        file.mv(path , (err) => {
            console.log(err.message)
        })

        res.json({
            success: true,
            message: "Succesfully upload the file in local directory"
        })
    }catch(error) {
        console.log(error.message);
        res.status(401).json({
            success: false,
            message: "Failed to local file upload",
            error: error.message
        })
    }
}

module.exports = localFileUpload;