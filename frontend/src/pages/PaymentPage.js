import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const API_BASE = 'https://shopzilla31.onrender.com';

const PaymentPage = () => {
  const { clearCart } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  const { user, product } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!paymentMethod) {
      alert('Select a payment method');
      return;
    }

    const orderData = {
      user: { ...user, paymentMethod },
      items: [product],
    };

    try {
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) throw new Error('Order failed');

      await res.json();
      alert('✅ Order placed successfully!');
      clearCart();
      navigate('/orders');
    } catch (err) {
      console.error('❌ Order failed:', err);
      alert('❌ Error placing order.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: '500px', width: '100%' }}>
        <h3 className="card-title mb-4 text-center">Select Payment Method</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Payment Method</label>
            <select
              className="form-select"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">-- Select Payment Method --</option>
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit / Debit Card</option>
              <option value="upi">UPI</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
