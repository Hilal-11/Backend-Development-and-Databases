const express = require('express')
require('dotenv').config();
const cors = require('cors')
const appRoutes = require('')
const connectDB = require('');

const PORT = process.env.PORT

const corsOptions = {
    origin: 'http://localhost:5173/',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use(express.json())
app.use('/api/v1' , appRoutes);

const app = express();


app.get('/', (req , res) => {
    res.send();
})

app.listen(PORT , () => {
    console.log(`App is running on port ${PORT}`)
})

connectDB()