const Cart = require("../Model/Cart")
const Product = require("../Model/Product")

exports.createCart = async (req, res) => {
    try {
        const { user, product } = req.body
        if (user) {
            if (product) {
                let cart = await Cart.create({
                    user,
                    product
                })
                cart = await Product.populate(cart, { path: 'product', select: '-desc -about -createdAt -updatedAt -__v' })
                res.status(201).json({ cart });
            } else {
                res.status(400).json({ error: "Enter cart's product" })
            }
        } else {
            res.status(400).json({ error: "Enter cart's user" })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.getCarts = async (req, res) => {
    try {
        const { userId } = req.params;
        if (userId) {
            const carts = await Cart.find({ user: userId })
                .select("product")
                .populate({ path: 'product', select: '-desc -about -createdAt -updatedAt -__v' })
            res.status(201).json(carts);
        } else {
            const carts = await Cart.find({}).populate({ path: 'product', select: '-desc -about -createdAt -updatedAt -__v' })
            res.status(201).json({ carts });
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.getCart = async (req, res) => {
    try {
        const { id } = req.params
        const cart = await Cart.findById(id)
        if (cart) {
            res.status(201).json({ cart });
        } else {
            res.status(400).json({ error: "this cart is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.deleteCart = async (req, res) => {
    try {
        const { id } = req.params
        const cart = await Cart.findByIdAndDelete(id)
        if (cart) {
            res.status(201).json({ cart });
        } else {
            res.status(400).json({ error: "this cart is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.updateCart = async (req, res) => {
    try {
        const { id } = req.params
        const cart = await Cart.findByIdAndUpdate(id)
        if (cart) {
            res.status(201).json({ cart });
        } else {
            res.status(400).json({ error: "this cart is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}