const User = require('../models/UserModel');

const register = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
        // console.log(savedUser);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username});

    } catch (err) {
        res.status(500).json(err)
    }
}


module.exports = { register, login };
