const router = require('express').Router()
const { createProduct, getProduct, getProducts, updateProduct, deleteProduct, productByCategory } = require('../controllers/productController')

router.route("/product")
    .post(createProduct)
    .get(getProducts)


router.get('/product/by-category/:categoryId', productByCategory)
router.route("/product/:id")
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct)

module.exports = router
