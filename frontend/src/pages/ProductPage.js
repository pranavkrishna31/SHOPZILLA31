import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://shopzilla31.onrender.com/api/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error('Product not found');
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching product:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loader />;
  if (!product) return <p className="text-center text-danger mt-5">❌ Product not found.</p>;

  return (
    <div className="container mt-5">
      <div className="card mx-auto shadow p-4" style={{ maxWidth: '600px' }}>
        <h2 className="card-title text-center mb-3">{product.name}</h2>

        <img
          src={product.image}
          alt={product.name}
          className="card-img-top mb-3"
          style={{ height: '300px', objectFit: 'cover' }}
          onError={(e) => (e.currentTarget.src = '/images/placeholder.png')}
        />

        <div className="card-body">
          <p>
            <strong>💵 Price:</strong> ₹{product.price.toLocaleString('en-IN')}
          </p>
          <p><strong>📝 Description:</strong> {product.description}</p>
          <p><strong>📦 In Stock:</strong> {product.countInStock}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
