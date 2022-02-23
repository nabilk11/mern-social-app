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

// INTERNAL ROUTES
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

// MONGO DB CONNECTION
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
}).then(()=> {
    console.log('MongoDB is Connected')
})

// MIDDLEWARE
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

// ROUTERS
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)


// LISTENER
app.listen(PORT, () => {
    console.log(`Server is Connected at PORT: ${PORT}`)
})