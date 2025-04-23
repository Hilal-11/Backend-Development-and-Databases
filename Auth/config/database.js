const mongoose = require('mongoose');
require('dotenv').config();
const DATABASE_URI = process.env.DATABASE_URI
const connectDB = async () => {
    try{
        await mongoose.connect(DATABASE_URI);
        console.log("Database connection successfull")
    }   
    catch(error) {
        console.log(error.message);
        console.log("Failed to Connect Database")
        process.exit(1)
    }
}
module.exports = connectDB