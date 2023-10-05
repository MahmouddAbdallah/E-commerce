const express = require('express')
const { createReview, getReviews } = require('../controllers/ReviewController')


const router = express.Router()
router.route("/review")
    .post(createReview)

router.get("/review/:productId", getReviews)

module.exports = router