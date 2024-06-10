require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const orderRoute = require("./routes/orderRoute");
const bookingRoute = require("./routes/bookingRoute");

const errorMiddlware = require("./middleware/errorMIddleWare");
const cors = require("cors");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
const FRONTEND = process.env.FRONTEND;
const corsOptions = {
	origin: FRONTEND,
	optionSuccessStatus: 200,
};

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/order", orderRoute);

app.use("/api/booking", bookingRoute);

app.use(errorMiddlware);
mongoose
	.connect(MONGO_URL)
	.then(() => {
		console.log("connected to mongodb");

		app.listen(PORT, () => {
			console.log(
				`Server running in port ${PORT} :)`
			);
		});
	})
	.catch((error) => {
		console.log(error);
	});
