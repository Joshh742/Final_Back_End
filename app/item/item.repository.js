const Item = require("./item.model");

const findAll = async () => await Item.find();
const findById = async (id) => await Item.findById(id);
const create = async (data) => await Item.create(data);
const update = async (id, data) =>
  await Item.findByIdAndUpdate(id, data, { new: true });
const remove = async (id) => await Item.findByIdAndDelete(id);

module.exports = { findAll, findById, create, update, remove };
