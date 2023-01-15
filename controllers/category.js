const Product = require('../models/product');

module.exports.category = async(req, res) => {
    const { category } = req.params;
    const products = await Product.find({ category: category });
    res.render('category', { products, category });
}