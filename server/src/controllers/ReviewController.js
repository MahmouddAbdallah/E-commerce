const Review = require("../Model/Review");

exports.createReview = async (req, res) => {
    try {
        const { product, user, message, stars } = req.body;
        if (user) {
            if (product) {
                if (message) {
                    const review = await Review.create({
                        product,
                        user,
                        message,
                        stars
                    })
                    res.status(201).json({ review });
                } else {
                    res.status(401).json({ error: "please enter message" })
                }
            } else {
                res.status(401).json({ error: "please select product" })
            }
        } else {
            res.status(401).json({ error: "please login " })
        }
    } catch (error) {
        console.error(error);
    }
}
exports.getReviews = async (req, res) => {
    try {
        const { productId } = req.params;
        const reviews = await Review.find({
            product: productId
        }).populate({ path: "user", select: "name picture" })
        res.status(200).json({ reviews });
    } catch (error) {
        console.error(error);
    }
}