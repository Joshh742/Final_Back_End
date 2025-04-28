const express = require("express");
const router = express.Router();
const userController = require("../app/user/user.controller");
const itemController = require("../app/item/item.controller");
const authController = require("../app/auth/auth.controller"); // Tambahkan ini

// Rute untuk autentikasi
router.use("/auth", authController);

// Rute untuk pengguna
router.use("/users", userController);

// Rute untuk barang
router.use("/items", itemController);

module.exports = router;
