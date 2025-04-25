const mongoose = require('mongoose');
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL
const connectDB = async () => {
    try{
        await mongoose.connect(DATABASE_URL);
        console.log("Database connection successfull")
    }   
    catch(error) {
        console.log(error.message);
        console.log("Failed to Connect Database")
        process.exit(1)
    }
}
module.exports = connectDB