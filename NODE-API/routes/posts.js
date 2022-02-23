const router = require('express').Router();
const Post = require('../models/Post');

//CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body)
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
        
    } catch (err) {
        res.status(500).json(err)
        
    }
})

//UPDATE POST

//DELETE POST

//LIKE A POST

//GET A POST

//GET TIMELINE POSTS


module.exports = router;