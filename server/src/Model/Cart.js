const mongoose = require("mongoose")
const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'user is required'],
        ref: "User",
    },
    product: {
        type: mongoose.Schema.ObjectId,
        ref: "Products",
        required: [true, 'Product is required']
    }
},
    { timestamps: true })
const Cart = mongoose.model('Carts', CartSchema)
module.exports = Cart