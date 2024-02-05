const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "please enter a correct name"],
		},

		email: {
			type: String,
			required: [true, "please enter a correct name"],
		},

		amount: {
			type: Number,
			required: [true, "please enter a correct name"],
		},

		package: {
			type: String,
			required: [
				true,
				"please enter a correct correct",
			],
		},
	},

	{ timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
