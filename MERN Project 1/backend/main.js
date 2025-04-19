const express = require('express')
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors')
const connectDB = require('./config/database')
const app_routes = require('./routes/app_routes')

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/v1' , app_routes);
app.get('/', (req , res) => {
    res.send("<h1>Authentication and Autherization in Backend</h1>")
})

app.listen(PORT , () => {
    console.log(`App ios running on PORT ${PORT}`);
})

connectDB();