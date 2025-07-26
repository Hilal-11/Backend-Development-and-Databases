const File = require('../models/File')
const localFileUpload = async ( req , res) => {
    try {

        // FILE FETCH FROM REQUEST
        const file = req.files.file;
        console.log(file);

        // EXTRACT THE FILE PATH AND FILE EXTENSION || 
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`
        console.log(path)

        // MOVE THE LOCAL/ RESPONSE FILE ON PATH USING MOVE (mv) FUNCTION
        file.mv(path , (err) => {
            console.log(err)
        });

        res.json({
            success: true,
            message: "Local file is upload successfully"
        })
    }catch(error) {
        console.log(error.message);
        res.status(400).json({
            success: false,
            error: error.message,
            message: "failed to upload media file"
        })
    }
}

module.exports = localFileUpload