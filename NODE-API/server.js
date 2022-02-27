// DOTENV
const dotenv = require('dotenv')
dotenv.config();
// EXTERNALS
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const helmet = require('helmet')
const morgan = require('morgan')
const multer = require('multer')
const path = require('path')
const PORT = 8000;

// INTERNAL ROUTES
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

// MONGO DB CONNECTION
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
}).then(()=> {
    console.log('MongoDB is Connected')
}).catch((err)=> {
    console.log(`Error Connecting to DB: ${err}`)
})
// IMAGES PATH
app.use("/images", express.static(path.join(__dirname, "public/images")))
// MIDDLEWARE
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

// Multer image upload routing - (may move to routes later)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/images")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})
const upload = multer(storage)
app.post("/api/upload", upload.single('file'), (req, res) => {
    try {
        return res.status(200).json("File uploaded successfully")
    } catch (err) {
        console.log(err)
    }
})


// ROUTERS
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)

// LISTENER
app.listen(PORT, () => {
    console.log(`Server is Connected at PORT: ${PORT}`)
})