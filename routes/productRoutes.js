const express = require('express');
const { Router } = require('express');
const router = express.Router();

const { 
    verifyToken,
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin 
} = require('../middlewares/verifyToken');

const { 
    createProduct, 
    updateProduct, 
    deleteProduct, 
    getOneProduct, 
    getAllProducts 
} = require('../controllers/productController');


router.post("/add/",verifyTokenAndAdmin, createProduct); // ok
router.get("/getall/", getAllProducts); //ok
router.get("/getone/:id", getOneProduct); //ok
router.put("/update/:id", verifyTokenAndAdmin, updateProduct); //0k
router.delete("/delete/:id", verifyTokenAndAdmin, deleteProduct); //ok

module.exports = router;
