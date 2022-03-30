const express = require('express');
const { Router } = require('express');
const router = express.Router();

const { 
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin 
} = require('../middlewares/verifyToken');

const { 
    createCart, 
    updateCart, 
    deleteCart, 
    getUserCart, 
    getAllCarts 
} = require('../controllers/cartController');


router.post("/add/", verifyToken, createCart); //
router.get("/getall/", verifyTokenAndAdmin, getAllCarts);
router.get("/getone/:userId", verifyTokenAndAuthorization, getUserCart);
router.put("/update/:id", verifyTokenAndAuthorization, updateCart); //
router.delete("/delete/:id", verifyTokenAndAuthorization, deleteCart); //

module.exports = router;
