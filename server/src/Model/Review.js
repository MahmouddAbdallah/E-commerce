const mongoose = require("mongoose")
const ReviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'user is required'],
        ref: "User",
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: "Products",
        required: [true, 'Product is required']
    },
    message: {
        type: String,
    },
    stars: {
        type: Number
    }
},
    { timestamps: true })
const Review = mongoose.model('Reviews', ReviewSchema)
module.exports = Review