const Category = require("../../Model/Category");
const Product = require("../../Model/Product");
const fs = require('fs')
const dotenv = require("dotenv")
const { connectDB } = require("../../middleware/connectDB");

dotenv.config({ path: "../../../.env" })

connectDB()

const categories = JSON.parse(fs.readFileSync("./Products.json"));

const insertData = async () => {
    try {
        const category = await Product.create(categories)
        console.log(category);
        process.exit();
    } catch (error) {
        console.log(error);
    }
}
const deleteData = async () => {
    try {
        const category = await Category.deleteMany()
        console.log(category);
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

if (process.argv[2] == "-i") { // argv == index == node seeder -i == node index -1 seeder index -2 -i index -3
    insertData()
}
else if (process.argv[2] == "-d") {
    deleteData()
}