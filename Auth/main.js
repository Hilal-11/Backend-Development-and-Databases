const express = require('express');
const app = express();
require('dotenv').config();
const app_routes = require('./routes/app_routes')
const connectDB = require('./config/database')
const PORT = process.env.PORT


app.use(express.json())
app.use('/api/v1' , app_routes);

app.get('/', (req , res) => {
    res.send("<h1>Authentication and Autherization in Backend</h1>")
})

app.listen(PORT , () => {
    console.log(`App is running on PORT ${PORT}`)
})

connectDB();