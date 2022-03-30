const express = require('express');
const { Router } = require('express');
const router = express.Router();

const { createPayment } = require("../controllers/paymentController")

router.post("/payment"); 


module.exports = router;