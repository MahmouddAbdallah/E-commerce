const router = require('express').Router()
const { createUser, getUsers, getUser, deleteUser, updateUser } = require("../controllers/userController")
const prodectToken = require('../middleware/AuthorizationToken')

router.route("/user")
    .post(createUser)
    .get(getUsers)

router.route("/user/:id")
    .get(prodectToken, getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router
