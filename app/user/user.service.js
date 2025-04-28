const { findAll, findById } = require("./user.repository");

const getAllUsers = async () => await findAll();
const getUserById = async (id) => await findById(id);

module.exports = { getAllUsers, getUserById };
