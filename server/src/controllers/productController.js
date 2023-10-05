const Product = require("../Model/Product")

exports.createProduct = async (req, res) => {
    try {
        const { title, mainImage, images, desc, about, subTitle, section, brand, oldPrice, price, priceExp, category, pieces, rating } = req.body
        if (title) {
            if (mainImage) {
                const product = await Product.create({
                    title,
                    mainImage,
                    images,
                    subTitle,
                    desc,
                    section,
                    brand,
                    oldPrice,
                    price,
                    priceExp,
                    category,
                    pieces,
                    rating,
                    about
                })
                res.status(201).json({ product });
            } else {
                res.status(400).json({ error: "Enter Product's image" })
            }
        } else {
            res.status(400).json({ error: "Enter Product's title" })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.getProducts = async (req, res) => {
    try {
        let { sort, field, keyword, limit, page, find, ...other } = req.query
        //implemation
        const product = Product.find(other)
        page = page || 1
        limit = limit || 12
        const skip = (page - 1) * limit
        product.skip(skip).limit(limit)
        //searching
        if (keyword) {
            const search = {}
            search.$or = [
                { title: { $regex: keyword, $options: "i" } },
            ]
            product.find(search)
        }
        //field 
        field = field || " -__v"
        product.select(field);

        //find 
        if (find) {
            find = JSON.parse(find)
            console.log(find);
            product.find(find)
        }
        //excution
        const products = await product.populate({ path: "category", select: "name image" })
        res.status(201).json({ page, limit, products });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
exports.getProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        if (product) {
            res.status(201).json({ product });
        } else {
            res.status(400).json({ error: "this Product is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (product) {
            res.status(201).json({ product });
        } else {
            res.status(400).json({ error: "this Product is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id)
        if (product) {
            res.status(201).json({ product });
        } else {
            res.status(400).json({ error: "this Product is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}