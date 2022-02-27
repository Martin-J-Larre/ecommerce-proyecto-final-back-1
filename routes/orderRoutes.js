const { Router } = require('express');
const express = require('express');
const router = express.Router();

// // const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');
//todo: Poner la auth con token cuando se ponga más serio
const { createOrder, updateOrder, deleteOrder, getUserOrder, getAllOrders } = require('../controllers/orderController');


router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/find/:userId", getUserOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;

