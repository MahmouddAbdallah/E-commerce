const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'username is required'],
    },
    picture: {
        type: String,
        default: "https://i.imgflip.com/6yvpkj.jpg"
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Email is Required"],
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: "user"
    }
}, { timestamps: true });
const User = mongoose.model("User", UserSchema);
module.exports = User