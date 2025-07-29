const express = require('express')
require('dotenv').config();
const cors = require('cors')
const appRoutes = require('./routes/appRoutes')
const connectDB = require('./config/database');
const cloudinaryConnect = require('./config/cloudinary')
const fileUpload = require('express-fileupload')
const PORT = process.env.PORT

const corsOptions = {
    origin: 'http://localhost:5173/',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use(express.json())

app.use(fileUpload());

app.use('/api/v1' , appRoutes);

const app = express();


app.get('/', (req , res) => {
    res.send("Media Upload MERN Application");
})

app.listen(PORT , () => {
    console.log(`App is running on port ${PORT}`)
})

connectDB()
cloudinaryConnect()