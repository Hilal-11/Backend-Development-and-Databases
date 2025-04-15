
const express = require('express');
const connectDB = require('./config/database')

const app = express();
require('dotenv').config();

const PORT = process.env.PORT

app.use(express.json())
app.get('/' , (req , res) => {
    res.send("<h1>Backend Devlopment</h1>")
})

connectDB().then(()=> {
    app.listen(PORT , () => {
        console.log(`App is running on PORT ${PORT}`)
    })
})