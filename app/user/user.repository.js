const User = require("./user.model");

const findAll = async () => await User.find();
const findById = async (id) => await User.findById(id);

module.exports = { findAll, findById };
