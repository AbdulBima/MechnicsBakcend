const Booking = require("../model/bookingModel");

const asyncHandler = require("express-async-handler");

//create a message

const createBooking = asyncHandler(async (req, res) => {
	try {
		const message = await Booking.create(req.body);
		res.status(200).json(message);
	} catch (error) {
		console.log(error.message);
		res.status(500);
		throw new Error(error.message);
	}
});

module.exports = {
	createBooking,
};
