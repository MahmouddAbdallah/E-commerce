const jwt = require("jsonwebtoken");
const User = require("../Model/User");
const prodectToken = async (req, res, next) => {
    try {
        //1)- check if token is exist or not
        const authorization = req.headers.authorization;
        if (authorization && authorization.startsWith("Bearer ")) {
            const token = authorization.split(" ")[1]
            const { id } = jwt.verify(token, process.env.JWT_SECRET)
            const currentUser = await User.findById(id);
            if (currentUser) {
                req.userId = id
                next()
            } else {
                res.status(401).json({ error: 'please sign up' })
            }
        } else {
            res.status(401).json({ error: 'please sign in' })
        }
    } catch (error) {
        console.error(error);
    }
}
module.exports = prodectToken