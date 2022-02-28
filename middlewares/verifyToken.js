// // Vieja versión para check auth
// const jwt = require("jsonwebtoken");
// require('dotenv').config()

// // Verify Token
// const verifyToken = (req, res, next) => {
//     const authHeader = req.headers.token;
//     if (authHeader) {
//         const token = authHeader.split(" ")[1];
//         jwt.verify(token, process.env.JWT_SEC_KEY, (err, user) => {
//             if (err) res.status(403).json("Token is not valid!");
//             req.user = user;
//             next();
//         });
//     } else {
//         return res.status(401).json("You are not authenticated!");
//     }
// };

// // Verify token and authorization
// const verifyTokenAndAuthorization = (req, res, next) => {
//     verifyToken(req, res, () => {
//         if (req.user.id === req.params.id || req.user.isAdmin) {
//             next();
//         } else {
//             res.status(403).json("You are not alowed to do that!");
//         }
//     });
// };

// // Verify token and admin
// const verifyTokenAndAdmin = (req, res, next) => {
//     verifyToken(req, res, () => {
//         if (req.user.isAdmin) {
//             next();
//         } else {
//             res.status(403).json("You are not alowed to do that!");
//         }
//     });
// };

// module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }