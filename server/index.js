"use strict";
const express = require('express');
const dotenv = require('dotenv');
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require('./src/middleware/connectDB');
const path = require("path");

// Load environment variables from .env file
dotenv.config({ path: "./.env" });

const app = express();

// Middleware
app.use(express.json()); // Body parser for JSON data
app.use(morgan("dev"));
app.use(cors({
    origin: true,
    optionsSuccessStatus: 200,
    credentials: true
}));

// Serve static files from the client/dist directory
app.use(express.static(path.join(__dirname, '../client/dist'), {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

// Routers
const authRouter = require("./src/routers/authRouter");
const categoryRouter = require("./src/routers/categoryRouter");
const productRouter = require("./src/routers/productRouter");
const reviewRouter = require("./src/routers/reviewRouter");
const cartRouter = require("./src/routers/cartRouter");
const userRouter = require("./src/routers/userRouter");

app.use("/api/auth", authRouter);
app.use("/api/v1", categoryRouter);
app.use("/api/v1", productRouter);
app.use("/api/v1", reviewRouter);
app.use("/api/v1", cartRouter);
app.use("/api/v1", userRouter);

// Catch-all route to serve the client application
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Handle unmatched routes
app.all("*", (req, res) => {
    res.status(500).json({ error: 'There is no URL like this' });
});

// Connect to database
connectDB();

// Start server
const port = process.env.PORT || 8001;
const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
