const File = require('../models/File')
const localFileUpload = async ( req , res) => {
    try {
        // const { name , fileUrl , tags , email } = req.body;
        const file = req.files.file;
        console.log(file);

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`
        console.log(path)
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