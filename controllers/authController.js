require('dotenv').config()
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');

//--------- Register
const register = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
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

//----------- Login
const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong username or password");

        const hashedPassword = CryptoJS.AES.decrypt( user.password, process.env.PASS_SECRET );

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        
        originalPassword != req.body.password && res.status(401).json("Wrong username or password");

        const accessToken = jwt.sign({
            id:user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC_KEY,
        { expiresIn:"30d"}
        );

        const { password, ...others } = user._doc;  

        res.status(200).json({...others, accessToken });
    } catch (err) {
        res.status(500).json(err)
    }
}


module.exports = { register, login };

