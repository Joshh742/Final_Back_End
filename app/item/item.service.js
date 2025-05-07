const {
  findAll,
  findById,
  create,
  update,
  remove,
} = require("./item.repository");

const getAllItems = async () => await findAll();
const getItemById = async (id) => await findById(id);
const createItem = async (data) => {
  if (!data._id) {
    throw new Error("Custom ID (_id) is required");
  }
  return await create(data);
};
const updateItem = async (id, data) => await update(id, data);
const deleteItem = async (id) => await remove(id);

console.log("getAllItems:", getAllItems);
console.log("createItem:", createItem);
console.log("updateItem:", updateItem);
console.log("deleteItem:", deleteItem);

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
