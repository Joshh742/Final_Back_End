const { findAll, findById, create } = require("./user.repository");

const getAllUsers = async () => await findAll();
const getUserById = async (id) => await findById(id);
const createUser = async (data) => await create(data);

module.exports = { getAllUsers, getUserById, createUser };
