const router = require('express').Router();
const bcrypt= require('bcrypt');
const User = require('../models/User');


// UPDATE USER
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {

        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (err) {
                return res.status(500).json(err)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body,
            })
            res.status(200).json("Account has been updated!")
        } catch (error) {
            return res.status(500).json(err)
        }

    } else {
        return res.status(403).json("You can only update your own account!")
    }
})


// DELETE USER
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {

        try {
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account has been deleted!")
        } catch (error) {
            return res.status(500).json(err)
        }

    } else {
        return res.status(403).json("You can only delete your own account!")
    }
})


// GET A USER
router.get("/", async (req, res) => {
    // adding a query to route
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId 
        ? await User.findById(userId) 
        : await User.findOne({ username: username })
        // to send less properties - use line below and replace .json(user) w/,json(other)
        const { password, updatedAt, ...other} = user._doc
        res.status(200).json(other)
        
    } catch (err) {
        res.status(500).json(err)
    }

})


// FOLLOW A USER - updating the list of users
router.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (!user.followers.includes(req.body.userId)){
                await user.updateOne({
                    $push: { followers: req.body.userId }
                })
                await currentUser.updateOne({
                    $push: { followings: req.params.id }
                })
                res.status(200).json("User has been followed")
            } else {
                res.status(403).json("You already follow this user!")
            }
            
        } catch (err) {
            res.status(500).json(err)
            
        }
    } else {
        res.status(403).json("You can't follow yourself!")
    }
})

// UNFOLLOW A USER
router.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (user.followers.includes(req.body.userId)){
                await user.updateOne({
                    $pull: { followers: req.body.userId }
                })
                await currentUser.updateOne({
                    $pull: { followings: req.params.id }
                })
                res.status(200).json("User has been unfollowed")
            } else {
                res.status(403).json("You are not following this user!")
            }
            
        } catch (err) {
            res.status(500).json(err)
            
        }
    } else {
        res.status(403).json("You can't unfollow yourself!")
    }
})




module.exports = router;