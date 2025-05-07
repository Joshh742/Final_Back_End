import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/style.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password) {
      setValidationError("Email dan password wajib diisi");
      return false;
    }

    if (!emailRegex.test(email)) {
      setValidationError("Format email tidak valid");
      return false;
    }

    setValidationError("");
    return true;
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login gagal. Periksa email dan password Anda.");
      }

      const data = await response.json();

      if (!data.token) {
        throw new Error("Token tidak ditemukan dalam respons API.");
      }

      navigate("/stock", { state: { token: data.token } });
    } catch (error) {
      setValidationError(
        "Login gagal: " + (error.message || "Terjadi kesalahan")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">🔐 Login Sistem Inventori</h1>

      {validationError && (
        <div className="error-message">⚠ {validationError}</div>
      )}

      <div className="input-group">
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          id="email"
          className="login-input"
          type="email"
          placeholder="contoh@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <div className="password-input-container">
          <input
            id="password"
            className="login-input"
            type={showPassword ? "text" : "password"}
            placeholder="Masukkan password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            type="button"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        </div>
      </div>

      <div className="login-button-container">
        {loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <button className="login-button" onClick={handleLogin}>
            Masuk
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
