// server.js
 import express from 'express';
 import dotenv from 'dotenv';
 import cors from "cors";
 import connectDB from './db.js'; // Import MongoDB connection
 import userRoutes from './routes/userRoutes.js'; 

// Load environment variables from .env file
  dotenv.config();

// Initialize Express
 const app = express();
  
// Connect to MongoDB
   connectDB();
 app.use(cors({
	   origin: ["http://localhost:3000", "http://frontend:3000"], // frontend docker container name or service name
	    credentials: true
	    }));
// Middleware to parse JSON data
 app.use(express.json());

 app.use("/api/users", userRoutes);
 app.get("/", (req, res) => {
	  res.send("API is running...");
 });

// Example endpoint
 app.get('/api/hello', (req, res) => {
   res.send('Hello from backend!') 
 });

// Set port from .env or default to 5000
 const PORT = process.env.PORT || 5000;

   
// Start server
 app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

