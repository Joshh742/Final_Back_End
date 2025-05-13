const User = require("./user.model");

// Fungsi untuk mendapatkan semua pengguna
const findAll = async () => await User.find();

// Fungsi untuk mendapatkan pengguna berdasarkan ID
const findById = async (id) => await User.findById(id);

// Fungsi untuk membuat pengguna baru
const create = async (data) => await User.create(data);

module.exports = { findAll, findById, create };
