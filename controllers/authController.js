const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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
        if (user) {
            const compare = await bcrypt.compare(req.body.password, user.password)
            if (compare) {
                return res.status(200).json(user);
            }else{
                return res.status(405).json("La contraseña no coincide !!!!");
            }
        } else {
            res.send("No se encontro el usurario")
        }
    } catch (err) {
        res.status(500).json(err)
    }
}


module.exports = { register, login };
