const Product = require('../models/Product');

// ✅ CACHE SETUP
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 60 }); // cache for 60 seconds


// ✅ GET ALL PRODUCTS (OPTIMIZED)
exports.getProducts = async (req, res) => {
  try {
    // 1️⃣ Check cache
    const cachedProducts = cache.get("products");

    if (cachedProducts) {
      return res.json(cachedProducts);
    }

    // 2️⃣ Optimized DB query
    const products = await Product.find()
      .select("name price image") // only required fields
      .limit(10);                // limit results

    // 3️⃣ Store in cache
    cache.set("products", products);

    res.json(products);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};


// ✅ GET PRODUCT BY ID (WITH CACHE)
exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id;

    // check cache
    const cachedProduct = cache.get(`product_${id}`);
    if (cachedProduct) {
      return res.json(cachedProduct);
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    cache.set(`product_${id}`, product);

    res.json(product);

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};