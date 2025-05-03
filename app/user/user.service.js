const { findAll, findById, create } = require("./user.repository");

const getAllUsers = async () => await findAll();
const getUserById = async (id) => await findById(id);
const createUser = async (data) => {
  if (!data._id) {
    throw new Error("Custom ID (_id) is required");
  }
  return await create(data);
};

module.exports = { getAllUsers, getUserById, createUser };
