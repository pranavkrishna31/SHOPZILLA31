const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products — get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/products/:id — get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/products — add new product
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
