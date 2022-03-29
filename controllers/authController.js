require('dotenv').config()
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const cryptoJS = require('crypto-js');

//--------- Register
const register = async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString(),
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

//Login
// const login = async (req, res) => {
//     try {
//         const user = await User.findOne({ username: req.body.username});
//         if (user) {
//             const compare = await bcrypt.compare(req.body.password, user.password)
//             if (compare) {

//                 const accessToken = jwt.sign({
//                     id:user._id,
//                     isAdmin: user.isAdmin,
//                 }, process.env.JWT_SEC_KEY,
//                 { expiresIn:"30d"}
//                 );

//                 const { password, ...others } = user._doc;
//                 return res.status(200).json({ ...others, accessToken });
//             }else{
//                 return res.status(405).json("The password is wrong !!!!");
//             }
//         } else {
//             res.send("No se encontro el usurario")
//         }
//     } catch (err) {
//         res.status(500).json(err)
//     }
// }


// module.exports = { register, login };
module.exports = { register };
