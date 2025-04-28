const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById } = require("./user.service");
const { verifyToken, isAdmin } = require("../../middlewares/authMiddleware"); // Pastikan hanya satu deklarasi

router.get("/", verifyToken, async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json({ status: "success", data: users });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", verifyToken, async (req, res) => {
  try {
    const user = await getUserById(req.params.id);
    res.json({ status: "success", data: user });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
