import React, { useEffect, useState } from 'react';

const AccountPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Replace 'shopzillaUser' with the key you use in localStorage
    const userData = JSON.parse(localStorage.getItem('shopzillaUser'));
    setUser(userData);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Your Account</h2>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-sm">
            <div className="card-body">
              {user ? (
                <>
                  <h5 className="mb-3">Welcome, {user.name || user.username || 'User'}!</h5>
                  <p><strong>Email:</strong> {user.email}</p>
                </>
              ) : (
                <p>Please <a href="/login">log in</a> to view your account details.</p>
              )}

              <hr />
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">👤 Edit personal information</li>
                <li className="list-group-item">📦 View order history</li>
                <li className="list-group-item">💳 Manage saved payment methods</li>
                <li className="list-group-item">🔒 Change password & security settings</li>
              </ul>

              <p>
                Need help? Visit the <a href="/help" className="link-dark fw-semibold">Help Center</a> or <a href="/customer-care" className="link-dark fw-semibold">Customer Care</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
