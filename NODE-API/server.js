// DOTENV
const dotenv = require('dotenv')
dotenv.config();
// EXTERNALS
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const PORT = 8000;

// MONGO DB CONNECTION
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
}).then(()=> {
    console.log('MongoDB is Connected')
})


// LISTENER
app.listen(PORT, () => {
    console.log(`Server is Connected at PORT: ${PORT}`)
})