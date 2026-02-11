const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');

dotenv.config();

const products = [
  {
    name: "Samsung Galaxy S24 Ultra",
    price: 124999,
    description: "Samsung flagship smartphone with AMOLED display and 200MP camera",
    image: "/images/samsung.jpeg",
    countInStock: 20
  },
  {
    name: "MacBook Air M3",
    price: 134999,
    description: "Apple MacBook Air with M3 chip and long battery life",
    image: "/images/macbook.jpeg",
    countInStock: 8
  },
  {
    name: "Dell XPS 13",
    price: 109999,
    description: "Premium ultrabook with Intel Core processor and InfinityEdge display",
    image: "/images/dell.jpeg",
    countInStock: 12
  },
  {
    name: "ASUS ROG Zephyrus G14",
    price: 149999,
    description: "High-performance gaming laptop with Ryzen processor and RTX graphics",
    image: "/images/asus.jpeg",
    countInStock: 6
  },
  {
    name: "Sony WH-1000XM5",
    price: 24999,
    description: "Industry-leading noise cancelling wireless headphones",
    image: "/images/sony.jpeg",
    countInStock: 25
  },
  {
    name: "Canon EOS R10 Camera",
    price: 94999,
    description: "Mirrorless camera with fast autofocus and 4K video",
    image: "/images/canon.jpeg",
    countInStock: 7
  },
  {
    name: "Logitech MX Master 3S",
    price: 10999,
    description: "Ergonomic wireless mouse for productivity",
    image: "/images/logitech.jpeg",
    countInStock: 40
  },
  {
    name: "Amazon Echo (5th Gen)",
    price: 7999,
    description: "Smart speaker with Alexa voice assistant",
    image: "/images/echo.jpeg",
    countInStock: 30
  },
  {
    name: "Nike Air Zoom Pegasus 40",
    price: 12999,
    description: "Comfortable running shoes for daily training",
    image: "/images/nike.jpeg",
    countInStock: 18
  },
  {
    name: "Apple Watch Series 9",
    price: 39999,
    description: "Smartwatch with health tracking and GPS",
    image: "/images/apple9.jpg",
    countInStock: 14
  },
  {
    name: "Bose SoundLink Flex",
    price: 15999,
    description: "Portable Bluetooth speaker with deep bass",
    image: "/images/bose.jpeg",
    countInStock: 22
  },
  {
    name: "iPad 10th Generation",
    price: 44999,
    description: "Apple iPad with 10.9-inch Liquid Retina display",
    image: "/images/ipad.jpeg",
    countInStock: 10
  },
  {
    name: "OnePlus Buds Pro 2",
    price: 9999,
    description: "Wireless earbuds with active noise cancellation",
    image: "/images/oneplus.jpg",
    countInStock: 35
  },
  {
    name: "HP Envy x360",
    price: 84999,
    description: "Convertible 2-in-1 laptop with touch display",
    image: "/images/hpenvy.jpg",
    countInStock: 9
  },
  {
    name: "Samsung 55 inch QLED 4K TV",
    price: 67999,
    description: "Smart TV with vivid colors and 4K resolution",
    image: "/images/samsungtv.jpeg",
    countInStock: 5
  },
  {
    name: "GoPro HERO12 Black",
    price: 39999,
    description: "Action camera with 5.3K video and stabilization",
    image: "/images/gopro.jpg",
    countInStock: 11
  },
  {
    name: "PlayStation 5",
    price: 49999,
    description: "Next-gen gaming console with ultra-fast SSD",
    image: "/images/ps5.jpg",
    countInStock: 4
  },
  {
    name: "Xbox Series X",
    price: 48999,
    description: "Powerful gaming console with 4K gaming",
    image: "/images/xbox.jpg",
    countInStock: 6
  },
  {
    name: "Kindle Paperwhite",
    price: 13999,
    description: "E-reader with glare-free display and backlight",
    image: "/images/kindle.jpg",
    countInStock: 28
  },
  {
    name: "Samsung Galaxy Tab S9",
    price: 60999,
    description: "Android tablet with AMOLED display and S-Pen support",
    image: "/images/samsungs9.jpg",
    countInStock: 13
  }
];

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    for (const p of products) {
      await Product.updateOne(
        { name: p.name },
        { $set: p },
        { upsert: true }
      );
    }

    console.log('✅ Products upserted with updated INR prices');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
})();
