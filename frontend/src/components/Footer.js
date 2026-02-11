// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <div className="container d-flex justify-content-between flex-wrap">
        <div>
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li><Link className="text-white text-decoration-none" to="/account">Account</Link></li>
            <li><Link className="text-white text-decoration-none" to="/orders">Orders</Link></li>
            <li><Link className="text-white text-decoration-none" to="/logout">Logout</Link></li>
          </ul>
        </div>
        <div>
          <h5>Support</h5>
          <ul className="list-unstyled">
            <li><Link className="text-white text-decoration-none" to="/customer-care">Customer Care</Link></li>
            <li><Link className="text-white text-decoration-none" to="/help-center">Help Center</Link></li>
            <li><Link className="text-white text-decoration-none" to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-3">© 2025 ShopZilla. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
