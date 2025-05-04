import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.state?.token;

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token); // Simpan token di localStorage
    } else {
      navigate("/"); // Redirect jika token tidak ada
    }
  }, [token, navigate]);

  if (!token) {
    return null; // Jangan render apa pun jika token tidak ada
  }

  return (
    <div className="home-container">
      <h1 className="home-title">Inventory Dashboard</h1>

      <div className="welcome-message">
        <p>Welcome to Inventory Management System</p>
      </div>

      <div className="action-buttons">
        <button className="logout-button" onClick={() => navigate("/")}>
          <span className="button-icon">🚪</span>
          Logout
        </button>

        <button
          className="stock-button"
          onClick={() => navigate("/stock-barang", { state: { token } })}
        >
          <span className="button-icon">📦</span>
          Manage Inventory
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
