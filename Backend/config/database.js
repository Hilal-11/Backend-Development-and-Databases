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
        process.exit(0)
    }
}

module.exports = connectDB



// const mongoose = require('mongoose');
// require('dotenv').config();

// const DATABASE_URL = process.env.DATABASE_URL;

// const connectDB = () => {
//     mongoose.connect(DATABASE_URL , {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log("MongoDB connect successfully...")
//     })
//     .catch((error) => {
//         console.log("Failed to connect the database")
//         console.log(error.message);
//     })
// }

// module.exports = connectDB;