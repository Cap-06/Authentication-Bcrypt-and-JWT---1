const express = require('express');
const Product = require('../models/Product');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();


router.get('/', authenticateToken, async (req, res) => {
  const products = await Product.find();
  res.json(products);
});


router.post('/', authenticateToken, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});


router.put('/:id', authenticateToken, async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
});

router.delete('/:id', authenticateToken, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
