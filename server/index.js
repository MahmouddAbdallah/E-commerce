const express = require('express');
const dotenv = require('dotenv');
const http = require("http")
const morgan = require("morgan");
const cors = require("cors")
const { connectDB } = require('./src/middleware/connectDB');

//create app 
const app = express()

//middleware
dotenv.config({ path: "./.env" })
app.use(express.json()) //body parser for json data
app.use(morgan("dev"))
app.use(cors({
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
    credentials: true
}))
//routers 
const cateogryRouter = require("./src/routers/categoryRouter")
const productRouter = require("./src/routers/productRouter")
const authRouter = require("./src/routers/authRouter")
const reviewRouter = require("./src/routers/reviewRouter")
app.use("/api/v1", cateogryRouter)
app.use("/api/v1", productRouter)
app.use("/api/v1", reviewRouter)
app.use("/api/auth", authRouter)

//connect to server 
const server = http.createServer(app)
const port = process.env.PORT || 8001
server.listen(port, () => {
    console.log('server run at ' + port);
})

//connect to db
connectDB()