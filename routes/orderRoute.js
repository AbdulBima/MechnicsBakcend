const {
	createOrder,
} = require("../controller/orderController");
const Order = require("../model/orderModel");
const express = require("express");

const router = express.Router();

router.post("/", createOrder);

module.exports = router;
