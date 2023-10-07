const router = require('express').Router({ mergeParams: true })
const { createCart, getCarts, getCart, deleteCart, updateCart } = require("../controllers/cartController")
router.use("/cart/:userId/user", getCarts)
router.route("/cart")
    .post(createCart)
    .get(getCarts)

router.route("/cart/:id")
    .get(getCart)
    .put(updateCart)
    .delete(deleteCart)

module.exports = router
