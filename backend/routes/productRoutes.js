const express = require('express');
const router = express.Router();

// ✅ IMPORT CONTROLLER (IMPORTANT)
const {
  getProducts,
  getProductById
} = require('../controllers/productController');


// ✅ GET all products (uses cache now)
router.get('/', getProducts);

// ✅ GET single product
router.get('/:id', getProductById);


// ✅ POST (keep as is)
const Product = require('../models/ProductModel');

router.post('/', async (req, res) => {
  try {
    const { name, price, description, image, countInStock } = req.body;

    if (!name || !price || !description || !image) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const product = new Product({
      name,
      price,
      description,
      image,
      countInStock
    });

    const created = await product.save();
    res.status(201).json(created);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;