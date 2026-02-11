import React from 'react';

const HelpCenterPage = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Help Center</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm">
            <div className="card-body">
              <p className="mb-4">
                Welcome to the ShopZilla Help Center. Browse help topics, get quick answers, or reach out to our support team for assistance.
              </p>

              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">📦 Shipping and delivery information</li>
                <li className="list-group-item">🔁 Return and exchange process</li>
                <li className="list-group-item">🔐 Managing your account</li>
                <li className="list-group-item">💬 Live chat & email support</li>
              </ul>

              <p>
                Still need help? Visit our <a href="/contact" className="link-dark fw-semibold">Contact Page</a> or head over to our <a href="/customer-care" className="link-dark fw-semibold">Customer Care</a> section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
