const mongoose = require("mongoose")
const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        unique: [true, 'Name is required.']
    },
    image: {
        type: String,
        required: [true, 'Name is required.']
    },
    items: {
        type: Number
    }
}, { timestamps: true })
const Category = mongoose.model('Caregories', CategorySchema)
module.exports = Category