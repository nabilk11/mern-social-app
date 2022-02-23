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
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
        await post.updateOne({
            $set: req.body
        });
        res.status(200).json("Your post has been updated!")

    } else {
        res.status(403).json("You can only update your own posts!")
    }
        
    } catch (err) {
        res.status(500).json(err)
        
    }
    
})

//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
        await post.deleteOne();
        res.status(200).json("Your post has been deleted!")

    } else {
        res.status(403).json("You can only delete your own posts!")
    }
        
    } catch (err) {
        res.status(500).json(err)
        
    }
    
})
//LIKE or UNLIKE A POST

router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({
                $push: { likes: req.body.userId}
            })
            res.status(200).json("The post was liked!")
        } else {
            await post.updateOne({
                $pull: { likes: req.body.userId }
            })
            res.status(200).json("The post was unliked!")
        }
        
    } catch (err) {
        res.status(500).json(err)
        
    }
})

//GET A POST

//GET TIMELINE POSTS


module.exports = router;