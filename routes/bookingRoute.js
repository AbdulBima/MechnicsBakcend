const {
	createBooking,
} = require("../controller/bookingController");
const Order = require("../model/bookingModel");
const express = require("express");

const router = express.Router();

router.post("/", createBooking);

module.exports = router;
