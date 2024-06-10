require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const compression = require("compression");
const winston = require("winston");
const morgan = require("morgan");
const orderRoute = require("./routes/orderRoute");
const bookingRoute = require("./routes/bookingRoute");
const errorMiddleware = require("./middleware/errorMIddleWare");
const cors = require("cors");

const MONGO_URL = process.env.MONGO_URL;
const port = process.env.PORT || 3000;
const FRONTEND = process.env.FRONTEND;

// Initialize Express app
const app = express();

// Middleware
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger setup
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

// HTTP request logging
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) }}));

// Routes
app.use("/api/order", orderRoute);
app.use("/api/booking", bookingRoute);

// Error handling middleware
app.use(errorMiddleware);

// Database connection and server start
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((error) => {
        logger.error("Database connection error:", error);
        console.error("Database connection error:", error);
    });
