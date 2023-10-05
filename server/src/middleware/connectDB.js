const mongoose = require('mongoose');
exports.connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => { console.log("connectdb"); })
        .catch((error) => { console.log(error); })
}