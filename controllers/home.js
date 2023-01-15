const Product = require('../models/product');

module.exports.homePage = async(req, res) => {
    const products = await Product.find({});
    res.render('home', { products });
}