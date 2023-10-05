const router = require('express').Router()
const { createProduct, getProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController')

router.route("/product")
    .post(createProduct)
    .get(getProducts)

router.route("/product/:id")
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router
