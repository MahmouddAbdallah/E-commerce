"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express = require('express');
const dotenv = require('dotenv');
const http = require("http");
const morgan = require("morgan");
const cors = require("cors");
const { connectDB } = require('./src/middleware/connectDB');
const path_1 = __importDefault(require("path"));

//create app 
const app = express();

//middleware
dotenv.config({ path: "./.env" });
app.use(express.json()); //body parser for json data
app.use(morgan("dev"));
app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: true
}));

// Serve static files from the client/dist directory
app.use(express.static(path_1.default.join(__dirname, '../client/dist'), {
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

//routers 
const authRouter = require("./src/routers/authRouter");
const cateogryRouter = require("./src/routers/categoryRouter");
const productRouter = require("./src/routers/productRouter");
const reviewRouter = require("./src/routers/reviewRouter");
const cartRouter = require("./src/routers/cartRouter");
const userRouter = require("./src/routers/userRouter");

app.use("/api/auth", authRouter);
app.use("/api/v1", cateogryRouter);
app.use("/api/v1", productRouter);
app.use("/api/v1", reviewRouter);
app.use("/api/v1", cartRouter);
app.use("/api/v1", userRouter);

// Catch-all route to serve the client application
app.get('*', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../client/dist', 'index.html'));
});

// Handle unmatched routes
app.all("*", (req, res) => {
    res.status(500).json({ error: 'there is not url like this' });
});

// Connect to db
connectDB();

// Connect to server 
const server = http.createServer(app);
const port = process.env.PORT || 8001;
server.listen(port, () => {
    console.log('server run at ' + port);
});
