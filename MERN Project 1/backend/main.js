const express = require('express')
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors')
const connectDB = require('')
const app_routes = require('')

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/v1' , app_routes);


app.listen(PORT , () => {
    console.log(`App ios running on PORT ${PORT}`);
})

connectDB;