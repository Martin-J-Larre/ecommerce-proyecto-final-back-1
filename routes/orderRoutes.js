const express = require('express'); 
const { Router } = require('express');
const router = express.Router();

const { 
    verifyToken, 
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin 
} = require('../middlewares/verifyToken');

const { 
    createOrder, 
    updateOrder, 
    deleteOrder, 
    getUserOrders, 
    getAllOrders 
} = require('../controllers/orderController');


router.post("/add/", verifyToken, createOrder);//ok
router.get("/getall/", verifyTokenAndAdmin, getAllOrders); //ok
router.get("/userorders/:userId", verifyTokenAndAuthorization, getUserOrders); //ok
router.put("/update/:id", verifyTokenAndAdmin, updateOrder);//ok
router.delete("/delete/:id", verifyTokenAndAdmin, deleteOrder);//ok

module.exports = router;

