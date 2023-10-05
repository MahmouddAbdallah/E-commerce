const express = require('express')
const { singup, singin } = require('../controllers/authController')


const router = express.Router()
router.post("/signup", singup)
router.post("/signin", singin)
module.exports = router