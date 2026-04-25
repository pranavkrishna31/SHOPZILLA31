const Product = require('../models/ProductModel');
const NodeCache = require('node-cache');

// Cache setup (60 seconds)
const cache = new NodeCache({ stdTTL: 60 });

/**
 * @desc    Get all products (optimized + cached)
 */
exports.getProducts = async (req, res) => {
  try {
    // 1️⃣ Check cache
    const cachedProducts = cache.get("products");

    if (cachedProducts) {
      console.log("CACHE HIT");
      return res.json(cachedProducts);
    }

    console.log("DB HIT");

    // 2️⃣ Optimized DB query
    const products = await Product.find()
      .select("name price image") // reduce payload
      .lean(); // VERY IMPORTANT (faster)

    // 3️⃣ Store in cache
    cache.set("products", products);

    res.json(products);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


/**
 * @desc    Get single product by ID (cached)
 */
exports.getProductById = async (req, res) => {
  try {
    const id = req.params.id;

    // 1️⃣ Check cache
    const cachedProduct = cache.get(`product_${id}`);

    if (cachedProduct) {
      console.log("CACHE HIT (single)");
      return res.json(cachedProduct);
    }

    console.log("DB HIT (single)");

    // 2️⃣ Fetch from DB
    const product = await Product.findById(id).lean();

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // 3️⃣ Store in cache
    cache.set(`product_${id}`, product);

    res.json(product);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};