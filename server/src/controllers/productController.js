const Product = require("../Model/Product");
const FeatureAPi = require("../utils/FeatureAPi/FeatureAPi");

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
        let { find } = req.query
        const productAPI = new FeatureAPi(Product, req)
            .filters()
            .fields()
            .sort()
            .search()
            .pagenation()
            .populate('category', 'name image')

        if (find) {
            productAPI.find()
        }

        const products = await productAPI.Model
        res.status(200).json({ products });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
exports.productByCategory = async (req, res) => {
    try {
        const { categoryId } = req.params;
        console.log({ categoryId });
        const products = await Product.find({
            category: categoryId
        })
        res.status(200).json({ products });
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
        const { ...body } = req.body
        console.log(body);
        const product = await Product.findByIdAndUpdate(id, body, { new: true })
        if (product) {
            res.status(201).json({ product });
        } else {
            res.status(400).json({ error: "this Product is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
