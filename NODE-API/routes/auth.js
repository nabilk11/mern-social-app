const router = require('express').Router();
const User = require('../models/User')

// REGISTER USER
router.post("/register", async (req, res) => {
    const newUser = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })
    try {
        const user = await newUser.save();
        res.status(200).json(user)
    } catch (err) {
        console.log(`Error registering user: ${err}`)
        
    }
   
})






module.exports = router;