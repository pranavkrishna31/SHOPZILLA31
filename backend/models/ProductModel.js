const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  image: { type: String },
  countInStock: { type: Number, default: 0 },
}, {
  timestamps: true
});

productSchema.index({ name: 1 });

const Product = mongoose.model('Product', productSchema);


module.exports = Product;
