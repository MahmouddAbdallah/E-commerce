const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../Model/User')
exports.singup = async (req, res) => {
    try {
        const { name, password, email } = req.body
        const checkEmail = await User.findOne({ email })
        if (name) {
            if (email) {
                if (password) {
                    if (!checkEmail) {
                        const user = await User.create({
                            name,
                            password: await bcrypt.hash(password, 10),
                            email
                        })
                        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
                        res.status(201)
                            .cookie("token", token)
                            .json({ user: user, token })
                    } else {
                        res.status(401).json({ error: 'this email is used before' })
                    }
                }
                else {
                    res.status(401).json({ error: 'please enter your password....' })
                }
            }
            else {
                res.status(401).json({ error: 'please enter your email....' })
            }
        }
        else {
            res.status(401).json({ error: 'please enter your name....' })
        }
    } catch (error) {
        res.status(401).json({ error })
    }
}

exports.singin = async (req, res) => {
    try {
        const { password, email } = req.body
        const user = await User.findOne({ email })
        if (email) {
            if (password) {
                if (user) {
                    const isMatch = await bcrypt.compare(password, user.password)
                    if (isMatch) {
                        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
                        res.status(201)
                            .cookie("token", token)
                            .json({ user: user, token })
                    } else {
                        res.status(401).json({ error: 'Incorrect Password' })
                    }
                } else {
                    res.status(401).json({ error: 'this email is not created' })
                }
            } else {
                res.status(401).json({ error: 'please enter your password....' })
            }
        } else {
            res.status(401).json({ error: 'please enter your email....' })
        }
    } catch (error) {
        res.status(401).json({ error })
    }
}