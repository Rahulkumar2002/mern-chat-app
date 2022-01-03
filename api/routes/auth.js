const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//Register : 
router.post("/register", async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        const savedUser = await newUser.save();
        const { password, ...others } = savedUser._doc;

        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err);
        console.log("Error from register user : " + err);
    }
});



//Login :

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(404).json("user not found");

        const checkPassword = await bcrypt.compare(req.body.password, user.password);
        !checkPassword && res.status(403).json("Wrong Credentials");

        res.status(200).json(user);
    } catch (err) {
        console.log("Error from user login :" + err);
        res.status(500).json(err);
    }


})

module.exports = router;