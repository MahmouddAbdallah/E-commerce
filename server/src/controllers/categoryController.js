const Category = require("../Model/Category");
const FeatureAPi = require("../utils/FeatureAPi/FeatureAPi");

exports.createCategory = async (req, res) => {
    try {
        const { name, image } = req.body
        if (name) {
            if (image) {
                const category = await Category.create({
                    name,
                    image
                })
                res.status(201).json({ category });
            } else {
                res.status(400).json({ error: "Enter category's image" })
            }
        } else {
            res.status(400).json({ error: "Enter category's name" })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.getCategories = async (req, res) => {
    try {
        const categorApi = new FeatureAPi(Product, req)
            .filters()
            .fields()
            .sort()
            .search()
            .pagenation()
        const categories = categorApi.Model;
        res.status(201).json({ categories });
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.getCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findById(id)
        if (category) {
            res.status(201).json({ category });
        } else {
            res.status(400).json({ error: "this category is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findByIdAndDelete(id)
        if (category) {
            res.status(201).json({ category });
        } else {
            res.status(400).json({ error: "this category is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.findByIdAndUpdate(id)
        if (category) {
            res.status(201).json({ category });
        } else {
            res.status(400).json({ error: "this category is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}