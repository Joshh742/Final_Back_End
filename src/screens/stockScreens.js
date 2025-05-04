import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/css/style.css"; // Impor file CSS untuk styling

const StockScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.state?.token || localStorage.getItem("token");

  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      console.warn("Token tidak tersedia, mengarahkan ke halaman login.");
      navigate("/login");
      return;
    }

    // Ambil data stok barang dari API
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/items", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Gagal mengambil data stok barang.");
        }

        const data = await response.json();
        setItems(data.data); // Asumsikan data barang ada di `data.data`
      } catch (err) {
        console.error("Error:", err.message);
        setError("Gagal memuat data stok barang.");
      }
    };

    fetchItems();
  }, [token, navigate]);

  return (
    <div className="stock-container">
      <div className="header-section">
        <h1 className="stock-title">Daftar Stok Barang</h1>
      </div>

      {error && <p className="error-message">{error}</p>}

      <table className="stock-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Barang</th>
            <th>Stok</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item._id}>
                <td>{item._id || "-"}</td>
                <td>{item.name || "-"}</td>
                <td>{item.stock?.toString() || "0"}</td>
                <td>Rp {item.price?.toLocaleString() || "0"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Tidak ada data tersedia</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Tombol Kembali */}
      <button className="back-button" onClick={() => navigate("/")}>
        Kembali ke Halaman Home
      </button>
    </div>
  );
};

export default StockScreen;
