const { Router } = require('express');
const express = require('express');
const router = express.Router();

// // const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');
//todo: Poner la auth con token cuando se ponga más serio
const { createCart, updateCart, deleteCart, getUserCart, getAllCarts } = require('../controllers/cartController');


router.post("/", createCart);
router.get("/", getAllCarts);
router.get("/find/:userId", getUserCart);
router.put("/:id", updateCart);
router.delete("/:id", deleteCart);

module.exports = router;
