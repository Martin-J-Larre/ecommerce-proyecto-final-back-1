const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/authController');

//--------Register
router.post('/register', register)

//--------Register
router.post('/login', login)


module.exports  = router