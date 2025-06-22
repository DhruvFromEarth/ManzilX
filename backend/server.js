// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Import routes
const studentRoutes = require('./routes/students');
const careerRoutes = require('./routes/careers');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({
    origin: [process.env.FRONTEND_URL, 'http://localhost:5173', 'https://www.google.com'], // Add your frontend URL from .env, a local dev URL, and google for the iframe
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json()); // To parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded request bodies

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Successfully connected to MongoDB Atlas!"))
.catch(err => console.error("Error connecting to MongoDB Atlas:", err));

// API Routes
app.get('/', (req, res) => {
  res.send('ManzilX API is running...');
});
app.use('/api/students', studentRoutes);
app.use('/api/careers', careerRoutes);


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
