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
/**
 * 
 * {
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^1.9.5",
    "axios": "^1.5.0",
    "bootstrap": "^5.2.3",
    "react": "^18.2.0",
    "react-apexcharts": "^1.4.1",
    "react-dom": "^18.2.0",
    "react-fast-marquee": "^1.6.1",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.10.1",
    "react-image-magnify": "^2.7.4",
    "react-redux": "^8.1.2",
    "react-router-dom": "^6.15.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-plugin-react": "^7.32.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "vite": "^4.4.5"
  }
}

 */