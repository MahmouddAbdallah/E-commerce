const mongoose = require("mongoose")
const ProductSchema = new mongoose.Schema({
    mainImage: {
        type: String,
        required: [true, 'Image is required.']
    },
    images: {
        type: [String]
    },
    subTitle: {
        type: String,
    },
    title: {
        type: String,
        required: [true, 'title is required.']
    },
    desc: {
        type: String,
    },
    about: {
        type: Object,
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Caregories",
        required: [true, 'category is required.']
    },
    brand: {
        type: String
    },
    price: {
        type: Number,
        required: [true, 'price is required'],
    },
    oldPrice: {
        type: Number,
    },
    priceExp: {
        type: String,
    },
    pieces: {
        type: Number,
    },
    section: {
        type: String,
    },
    rating: {
        type: Object
    }
}, { timestamps: true })
const Product = mongoose.model('Products', ProductSchema)
module.exports = Product