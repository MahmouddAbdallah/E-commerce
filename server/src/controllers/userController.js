const User = require("../Model/User")

exports.createUser = async (req, res) => {
    try {
        const { name, image } = req.body
        if (name) {
            if (image) {
                const user = await User.create({
                    name,
                    image
                })
                res.status(201).json({ user });
            } else {
                res.status(400).json({ error: "Enter user's image" })
            }
        } else {
            res.status(400).json({ error: "Enter user's name" })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).json({ users });
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findById(id)
        if (user) {
            res.status(201).json({ user });
        } else {
            res.status(400).json({ error: "this user is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndDelete(id)
        if (user) {
            res.status(201).json({ user });
        } else {
            res.status(400).json({ error: "this User is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}
exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id)
        if (user) {
            res.status(201).json({ user });
        } else {
            res.status(400).json({ error: "this user is not founded." })
        }
    } catch (error) {
        res.status(400).json({ error })
    }
}