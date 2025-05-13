const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById, createUser } = require("./user.service");

// Endpoint untuk mendapatkan semua pengguna
router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({ status: "success", data: users });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Endpoint untuk mendapatkan pengguna berdasarkan ID
router.get("/:id", async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json({ status: "success", data: user });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Endpoint untuk membuat pengguna baru
router.post("/", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ status: "success", data: user });
  } catch (error) {
    res.status(400).json({ status: "error", message: error.message });
  }
});

module.exports = router;
