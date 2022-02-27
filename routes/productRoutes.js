const { Router } = require('express');
const express = require('express');
const router = express.Router();

// const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('../middlewares/auth');
//todo: Poner la auth con token cuando se ponga más serio
const { createProduct, updateProduct, deleteProduct, getProduct, getAllProducts } = require('../controllers/productController');

// Create products
router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/find/:id", getProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
