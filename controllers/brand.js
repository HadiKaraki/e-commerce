const Product = require('../models/product');

module.exports.brandsPage = async(req, res) => {
    const { brand } = req.params
    const brandProducts = await Product.find({ brand: brand });
    res.render('brand', { brandProducts });
}