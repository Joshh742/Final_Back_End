const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Dummy user data (ganti dengan database jika diperlukan)
const users = [
  { id: 1, email: "admin@example.com", password: "admin123", role: "admin" },
  { id: 2, email: "user@example.com", password: "user123", role: "user" },
];

// Login endpoint
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Cari user berdasarkan email dan password
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  // Buat token JWT
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  res.json({ token });
});

module.exports = router;
