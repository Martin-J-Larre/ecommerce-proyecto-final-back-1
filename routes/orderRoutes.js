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
router.get("/getall/", verifyTokenAndAdmin, getAllOrders); //
router.get("/userorders/:userId", verifyTokenAndAuthorization, getUserOrders); //
router.put("/update/:id", verifyTokenAndAdmin, updateOrder);//
router.delete("/delete/:id", verifyTokenAndAdmin, deleteOrder);//

module.exports = router;

