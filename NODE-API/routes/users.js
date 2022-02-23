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

// FOLLOW A USER

// UNFOLLOW A USER






module.exports = router;