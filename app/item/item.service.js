const {
  findAll,
  findById,
  create,
  update,
  remove,
} = require("./item.repository");

const getAllItems = async () => await findAll();
const getItemById = async (id) => await findById(id);
const createItem = async (data) => await create(data);
const updateItem = async (id, data) => await update(id, data);
const deleteItem = async (id) => await remove(id);

console.log("getAllItems:", getAllItems); // Harus menghasilkan [Function: getAllItems]
console.log("createItem:", createItem); // Harus menghasilkan [Function: createItem]
console.log("updateItem:", updateItem); // Harus menghasilkan [Function: updateItem]
console.log("deleteItem:", deleteItem); // Harus menghasilkan [Function: deleteItem]

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
