const File = require('../models/File')
const localFileUpload = async ( req , res) => {
    try {
        // const { name , fileUrl , tags , email } = req.body;
        const file = req.files.file;
        console.log(file);

        let path = __dirname + "/files/" + Date.now()
        console.log(path)
        file.mv(path , (err) => {
            console.log(err.message)
        });

        res.json({
            success: true
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