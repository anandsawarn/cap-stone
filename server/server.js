require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const rateLimit = require('express-rate-limit');
const path = require('path');
const multer = require('multer');
const serviceRoutes = require('./routes/services');

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173',  // Frontend URL
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
};
app.use(cors(corsOptions));

// Logging HTTP requests
app.use(morgan('dev'));  // Logs requests in 'dev' format

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests, please try again later.'
});
app.use(limiter);

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve uploaded images

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/serviceDB', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.error("MongoDB Connection Error:", err));

// Routes
app.use('/api/services', serviceRoutes);

// Custom error handler
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message,
  });
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log("Server shutting down...");
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));