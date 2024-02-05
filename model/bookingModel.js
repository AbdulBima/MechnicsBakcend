const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "please enter a correct name"],
		},

		email: {
			type: String,
			required: [true, "please enter a correct name"],
		},

		Phone: {
			type: Number,
			required: [true, "please enter a correct name"],
		},

		carManufacturer: {
			type: String,
			required: [true, "please enter a correct name"],
		},

		carModel: {
			type: String,
			required: [true, "please enter a correct name"],
		},

		addMessage: {
			type: String,
			required: [true, "please enter a correct name"],
		},
	},

	{ timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
