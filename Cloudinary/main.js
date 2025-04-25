const express = require('express');
const app = express();
const fileUpload = require('express-fileupload')
require('dotenv').config();
const app_routes = require('./routes/app_routes')
const connectDB = require('./config/database')
const cloudinaryConnect = require('./config/cloudinary')
const PORT = process.env.PORT

app.use(express.json())
app.use(fileUpload())
app.use('/api/v1' , app_routes);

app.get('/', (req , res) => {
    res.send("<h1>File Upload Cloudinary Backend Project</h1>")
})

app.listen(PORT , () => {
    console.log(`App is running on PORT ${PORT}`)
})

connectDB()
cloudinaryConnect()
