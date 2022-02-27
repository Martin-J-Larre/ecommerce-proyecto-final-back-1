const { Router } = require('express');
const express = require('express');
const router = express.Router();

const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');
const { updateUser, deleteUser, getUser, getAllUsers } = require('../controllers/userController');

router.get('/', verifyTokenAndAdmin, getAllUsers);
router.get('/find/:id', verifyTokenAndAdmin, getUser);
router.put('/:id', verifyTokenAndAuthorization, updateUser);
router.delete('/:id', verifyTokenAndAuthorization, deleteUser);

module.exports = router;
