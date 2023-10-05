const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'username is required'],
    },
    picture: {
        type: String,
        default: "https://marketplace.canva.com/EAFewoMXU-4/1/0/1600w/canva-purple-pink-gradient-man-3d-avatar-0o0qE2T_kr8.jpg"
    },
    email: {
        type: String,
        required: [true, "Email is Required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Email is Required"],
    }
}, { timestamps: true });
const User = mongoose.model("User", UserSchema);
module.exports = User