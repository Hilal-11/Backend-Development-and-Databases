const mongoose = require('mongoose')
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL

const connectDB = async (req , res) => {
    try{
        await mongoose.connect(DATABASE_URL);
        console.log("Databese connect successfully...")
    }catch(error) {
        console.log(error.message);
        console.log("Failed to connect with Cloud Database");
        res.status(500).json({
            success: false,
            message: "Failed to connect with DB",
            error: error.message,
        })
        process.exit(0)
    }
}

module.exports = connectDB