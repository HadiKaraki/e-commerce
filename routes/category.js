const categories = require('../controllers/category');
const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');

router.get('/:category', catchAsync(categories.category))

module.exports = router;