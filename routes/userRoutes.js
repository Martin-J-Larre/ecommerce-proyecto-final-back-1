const express = require('express');
const { Router } = require('express');
const router = express.Router();

const { 
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin 
} = require('../middlewares/verifyToken');

const { 
    updateUser, 
    deleteUser, 
    getOneUser, 
    getAllUsers 
} = require('../controllers/userController');


router.get('/getall/', verifyTokenAndAdmin, getAllUsers);
router.get('/getone/:id', verifyTokenAndAdmin, getOneUser);
router.put('/update/:id', verifyTokenAndAuthorization, updateUser);
router.delete('/delete/:id', verifyTokenAndAuthorization, deleteUser);


module.exports = router;
