
const express = require('express')
cors = require('cors')
const dotenv = require('dotenv')
const userRoute= require('./routes/userRoute')

dotenv.config();
const app = express();


app.use(express.json())
app.use(userRoute)

const PORT = process.env || 1301
app.listen(PORT, (error) =>{
	error ? console.error(error): console.log('App is running')
})