const mongoose = require('mongoose')
require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;


const connectDB = async () => {
    await mongoose.connect(DATABASE_URL)
    .then(() => {
        console.log("Database Connection Successfully")
    }).catch((error) => {
        console.log(error.message)
        console.log("Database Connection Failed")
        process.exit(1)
    })
}

module.exports = connectDB