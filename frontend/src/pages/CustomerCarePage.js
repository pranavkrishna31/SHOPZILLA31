import React from 'react';


const CustomerCarePage = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Customer Care</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="mb-4">
                We are here to help you with your shopping experience. Whether you have a question about an order,
                a return, a refund, or just need assistance with using ShopZilla, our customer care team is ready.
              </p>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">📦 Track your orders easily</li>
                <li className="list-group-item">🔁 Hassle-free returns</li>
                <li className="list-group-item">💳 Payment & refund support</li>
                <li className="list-group-item">🛠 Technical support</li>
              </ul>
              <p>
                If you can't find what you're looking for, feel free to reach out through our <a href="/contact" className="link-dark fw-semibold">Contact Page</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerCarePage;
