import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token'); // Or however you're storing login state
    navigate('/login');
  }, [navigate]);

  return (
    <div className="container mt-5 text-center">
      <h4>Logging you out...</h4>
    </div>
  );
};

export default LogoutPage;
