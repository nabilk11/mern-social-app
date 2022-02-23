const router = require('express').Router();
const User = require('../models/User')
const bcrypt = require('bcrypt');

// REGISTER USER
router.post("/register", async (req, res) => {
    
    try {
        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        // creating new user
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })
        // save new user and response
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (err) {
        console.log(`Error registering user: ${err}`)
        
    }
})

// LOGIN USER

router.post("/login", async (req, res) => {

    try {
        const user = await User.findOne({email:req.body.email})
        !user && res.status(404).json("user not found")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("invalid password")

        res.status(200).json(user)
        
    } catch (err) {
        console.log(`Error logging in user: ${err}`)
    }
    
})






module.exports = router;