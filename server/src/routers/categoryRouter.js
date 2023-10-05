const router = require('express').Router()
const { createCategory, getCategories, getCategory, deleteCategory, updateCategory } = require("../controllers/categoryController")

router.route("/category")
    .post(createCategory)
    .get(getCategories)

router.route("/category/:id")
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory)

module.exports = router
